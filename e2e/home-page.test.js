describe('Pacific Point Resort', () => {
    beforeAll(async () => {
        await page.goto('https://guarded-river-60808.herokuapp.com/');
    });

    it('Tile of page should be "Pacific Point Resort"', async () => {
        await expect(page.title()).resolves.toMatch('Pacific Point Resort');
    });
});