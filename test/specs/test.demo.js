

describe('Test saucedemo', () => {
    it('Test 1 - Login Succesfully', async () => {
        await browser.url("https://www.saucedemo.com/")
        
        const usernameTextBox =   await browser.$("#user-name")
        const passwordTextBox =   await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')

        await usernameTextBox.addValue("standard_user")
        await passwordTextBox.addValue("secret_sauce")
        await loginButton.click()

        await browser.pause(5000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitle('Swag Labs')
        
    });

    it('Test 2 - Add Product to Cart Succesfully', async () => {
        await browser.url("https://www.saucedemo.com/inventory.html")
        

        const addtoCartButton = await browser.$('.btn_inventory ')
        const cartButton = await browser.$('.shopping_cart_link')
        
        await addtoCartButton.click()
        await cartButton.click()
    
        const elem = await $('//*[@class="cart_item"]')
        await expect(elem).toBeExisting()
        
    });
});