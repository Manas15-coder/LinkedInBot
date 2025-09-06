import LinkedInPage from "../pages/linkedinPage";
import { generateMessage } from "../utils/aiMessage";
import * as dotenv from "dotenv";
dotenv.config();

describe('LinkedIn Bot Automation', () => {
    const linkedin = new LinkedInPage();
    const users = [
        'https://www.linkedin.com/in/user-1',
        'https://www.linkedin.com/in/user-2'
    ];

    it('should login and send AI-generated messages', async () => {
        await linkedin.login(process.env.LINKEDIN_USER, process.env.LINKEDIN_PASS);

        for (const user of users) {
            try {
                const message = await generateMessage("User");
                await linkedin.sendMessage(user, message);
                console.log('Message sent to ' + user);
            } catch (error) {
                console.log('Failed to send message to ' + user + ': ' + error);
            }
        }
    });
});
