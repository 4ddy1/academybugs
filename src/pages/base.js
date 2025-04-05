export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async goToPage() {
        await this.page.goto();
    }
}