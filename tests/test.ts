import { expect, test } from '@playwright/test';



test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
});




test('Header element should have correct background image and text', async ({ page }) => {
	await page.goto('https://example.com'); // Replace with your website URL
	const header = await page.waitForSelector('header');

	// Check background image URL
	const backgroundImage = await header.evaluate(element => {
		return element.style.backgroundImage;
	});
	expect(backgroundImage).toContain('alex-wedding-2.jpeg');

	// // Check heading text
	// const headingText = await header.$eval('h1.text-10xl', element => element.textContent.trim());
	// expect(headingText).toBe('Ali & Dan');

	// // Check date text
	// const dateText = await header.$eval('h3', element => element.textContent.trim());
	// expect(dateText).toBe('15th June 2024');
});
