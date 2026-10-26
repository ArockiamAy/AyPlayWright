import {test,  expect} from '@playwright/test';

test('verify url', async({page})=>
    {

        await page.goto('https://www.google.com/');
        expect(page.url()).toBe('https://www.google.com/');

    })