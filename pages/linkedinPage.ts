export default class LinkedInPage {
    usernameField = '#username';
    passwordField = '#password';
    messageBox = 'div.msg-form__contenteditable';
    sendBtn = 'button.msg-form__send-button';

    async login(username, password) {
        await browser.url('https://www.linkedin.com/login');
        await $(this.usernameField).setValue(username);
        await $(this.passwordField).setValue(password);
        await browser.keys('Enter');
        await browser.pause(5000);
    }

    async sendMessage(userUrl, message) {
        await browser.url(userUrl);
        const msgBox = await $(this.messageBox);
        await msgBox.waitForDisplayed({ timeout: 5000 });
        await msgBox.setValue(message);
        await $(this.sendBtn).click();
        await browser.pause(2000);
    }
}
