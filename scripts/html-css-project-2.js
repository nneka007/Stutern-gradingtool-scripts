const { By, Key, Builder, Browser } = require("selenium-webdriver");
require("chromedriver");

async function project2() {
    let driver = await new Builder().forBrowser("chrome").build();
    let accuracy = 0;
    let points = 0;
    let functionality = 0;
    let adviceArray = []
    // let driver = await new Builder().forBrowser("chrome").build();
    // sawait driver.get(webPath)
    // await new promise(r => setTimeout(r, 3000))
    await driver.get('file:///C:/Users/nwogb/Desktop/folder/HTML-AND-CSS-PROJECT-1/index.html')

    const logo = await driver.findElements(By.id('header_2'))
    console.log('logo', logo)
    if (logo.length > 0) {
        console.log('an element with id=header_2 exist')
        accuracy++
        let logoTag = await logo[0].getText()
        console.log('logo tag', logoTag)
        if (logoTag === 'STUTERN') {
            accuracy++
        } else {
            adviceArray.push('The text ebeded in your logo is not STUTERN as instructed')
        }
    } else {
        console.log('an element with id=header_2 does not exist')
        adviceArray.push('an element with id=header_2 does not exist')
    }

    const learning = await driver.findElements(By.id('paragraph'))
    console.log('learning', learning)
    if (learning.length > 0) {
        console.log('an element with id=paragraph exist in your file')
        accuracy++
        let learningText = await learning[0].getText()
        console.log('learning text', learningText)
        if (learningText === 'LEARNING') {
            console.log('this tag contains a text learning')
            accuracy++
        } else {
            adviceArray.push('There is no text LEARNING in your html file')
        }
    } else {
        console.log('an element with id=paragraph does not exist in your html file')
        adviceArray.push('an element with id=paragraph does not exist in your html file')
    }

    const navLink = await driver.findElements(By.id('nav-bar'))
    console.log('nav bar', navLink)
    if (navLink.length > 0) {
        console.log('an element with id=nav-bar exists in your file')
        accuracy++
        let navLinkTag = await navLink[0].getTagName()
        console.log('nav', navLinkTag)
        if (navLinkTag === 'div') {
            accuracy++
        } else {
            adviceArray.push('Your nav list are not nested in a div ')
        }
    } else {
        console.log('an element with id=nav-bar does not exists in your file')
        adviceArray.push('an element with id=nav-bar does not exists in your file')
    }

    const home = await driver.findElements(By.id('home'))
    console.log('HOME', home)
    const about = await driver.findElements(By.id('about'))
    console.log('ABOUT', about)
    const products = await driver.findElements(By.id('products'))
    console.log('PRODUCTS', products)
    const services = await driver.findElements(By.id('services'))
    console.log('SERVICES', services)
    const blog = await driver.findElements(By.id('blog'))
    console.log('BLOG', blog)
    const pages = await driver.findElements(By.id('pages'))
    console.log('PAGES', pages)
    const contacts = await driver.findElements(By.id('contacts'))
    console.log('CONTACTS', contacts)
    if (home.length > 0 && about.length > 0 && products.length > 0 && services.length > 0 && blog.length > 0 && pages.length > 0 && contacts.length > 0) {
        console.log('home,about,products,services,blog,pages,contacts exist with its instructed ids')
        accuracy++
    } else {
        console.log('home,about,products,services,blog,pages,contacts does not exist with its instructed ids')
        adviceArray.push('home,about,products,services,blog,pages,contacts does not exist with its instructed ids')
    }

    const signIn = await driver.findElements(By.id('sign-in'))
    console.log('SIGN IN', signIn)
    if (signIn.length > 0) {
        console.log('a sign in button with id=sign in exist in your file')
        accuracy++
        let signInTag = await signIn[0].getTagName()
        console.log('Sign in tag', signInTag)
        if (signInTag === 'button') {
            console.log('element with id=sign-in is a button tag')
            accuracy++
        } else if (signInTag === 'input') {
            adviceArray.push('element with id=sign-in is suppose to be a button tag not an input tag')
        } else {
            console.log('kindly use a button tag')
            adviceArray.push('Kindly use a button tag')
        }
        let currentPage = await driver.getCurrentUrl()
        const signInClick = await signIn[0].click()
        let newPage = await driver.getCurrentUrl()
        if (currentPage === newPage) {
            console.log('sign in routed')
            adviceArray.push('On clicking the sign in button, it did not route to the log in page')
        } else {
            console.log('sign in routed to log in page')
            accuracy++
        }
    } else {
        console.log('a sign in button with id=sign does not exist in exist in your file')
        adviceArray.push('a sign in button with id=sign does not exist in exist in your file')
    }

    const emailInput = await driver.findElements(By.id('email_input'))
    console.log('EMAIL INPUT', emailInput)
    if (emailInput.length > 0) {
        console.log('an element with id=email_input exist in your html file')
        accuracy++
    } else {
        console.log('an element with id=email_input does not exist in your html file')
        adviceArray.push('an element with id=email_input does not exist in your html file')
    }

    const passwordInput = await driver.findElements(By.id('password_input'))
    console.log('PASSWORD INPUT', passwordInput)
    if (passwordInput.length > 0) {
        console.log('an element with password_input exist in your html file')
        accuracy++
    } else {
        console.log('an element with password_input does not exist in your html file')
        adviceArray.push('an element with password_input does not exist in your html file')
    }

    const checkBox = await driver.findElements(By.id('check_box'))
    console.log('CHECK BOX', checkBox)
    if (checkBox.length > 0) {
        console.log('element with id=check_box exist in your html file')
        accuracy++
        let checkBoxAtt = await checkBox[0].getAttribute('type')
        console.log('CHECK BOX ATT', checkBoxAtt)
        if (checkBoxAtt === 'checkbox') {
            console.log('This input element is a check box')
            accuracy++
        } else {
            console.log('this input element is not a checkbox')
            adviceArray.push('this input element is not a checkbox')
        }

    } else {
        console.log('an element with id=check_box does not exist in your html file')
        adviceArray.push('an element with id=check_box does not exist in your html file')
    }

    const homePage = await driver.findElements(By.id('home_page'))
    console.log('HOME PAGE', homePage)
    if (homePage.length > 0) {
        console.log('an element with id=home_page exist in your html file')
        accuracy++
        let presentPage = await driver.getCurrentUrl()
        let homePageClick = await homePage[0].click()
        let homeScreen = await driver.getCurrentUrl()
        if (presentPage === homeScreen) {
            console.log('no routing')
            adviceArray.push('On clicking the home page link, it did not route back to the home page')
        } else {
            accuracy++
        }


    } else {
        console.log('an element with id=home_page does not exist in your html file')
        adviceArray.push('an element with id=home_page does not exist in your html file')
    }




}
project2()