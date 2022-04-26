const { By, Key, Builder, Browser } = require("selenium-webdriver");
require("chromedriver");




async function stuternHtmlTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    let accuracy = 0;
    let points = 0;
    let functionality = 0;
    let adviceArray = []
    // let driver = await new Builder().forBrowser("chrome").build();
    // sawait driver.get(webPath)
    // await new promise(r => setTimeout(r, 3000))
    await driver.get('https://folusoojo.github.io/stutern-html/')

    const htmlSkeleton = await driver.findElements(By.xpath("//*[contains(text(),'My first html')]"));
    console.log('kkk', htmlSkeleton)
    if (htmlSkeleton.length > 0) {
        accuracy++
        console.log('this element exist')
        let skeletonTagSrc = await htmlSkeleton[0].getTagName()
        if (skeletonTagSrc === 'title') {
            console.log('uuu', skeletonTagSrc)
            points++
        } else {
            console.log('file title does not exist', skeletonTagSrc)
            adviceArray.push('Your file title does not exist in your html file')
        }
    } else {
        console.log('this element does not exist')
        adviceArray.push('Your title tag does not exist in your html skeleton')
    }

    const firstHtmlTag = await driver.findElements(By.id('h1'))
    console.log('first element', firstHtmlTag)
    if (firstHtmlTag.length > 0 && firstHtmlTag.length < 2) {
        accuracy++
        console.log('h1 tag is just 1')
        let firstHtmlTagName = await firstHtmlTag[0].getTagName()
        console.log('NK', firstHtmlTagName)
        if (firstHtmlTagName === 'h1') {
            accuracy++
            console.log('first html tag is a h1 tag')
        } else {
            console.log('first html tag is not a h1 tag')
            adviceArray.push('The element with id=h1 is not a h1 tag')
        }

    } else {
        if (firstHtmlTag.length > 2) {
            console.log('h1 tag is more than 1')
            adviceArray.push('More than one h1 tag exist in your html file')
        } else {
            console.log('html file does not have and id=h1')
            adviceArray.push('you html file does not contain a h1 tag')
        }
    }


    const secondHtmlTag = await driver.findElements(By.id('h2'))
    console.log('second html', secondHtmlTag)
    if (secondHtmlTag.length === 0) {
        console.log('there is no h2 tag')
        adviceArray.push('you html file does not contain a h2 tag with id=h2')
        let secondHtmlTagName = await secondHtmlTag[0].getTagName()
        console.log('2nd h2',secondHtmlTagName)
        if(secondHtmlTagName==='h2') {
            accuracy++
            console.log('second html tag with id=h2 is a h2 tag')
        } else {
            console.log('second html tag with id=h2 is not a h2 tag')
            adviceArray.push('The element with id=h1 is not a h1 tag')
        }
    } else {
        if (secondHtmlTag.length > 0 && secondHtmlTag.length < 2) {
            accuracy++
            console.log('just 1 h2 tag exist in your file')
        } else {
            console.log('more than one h2 tags exist in your file')
            adviceArray.push('More than one h2 tag exist in your html file')
        }
    }


    const paragraphTag = await driver.findElements(By.id('reason'))
    console.log('paragraphabc', paragraphTag)
    if (paragraphTag.length > 0) {
        accuracy++
        console.log('element with id=reason exist')
        let paragraphTagSrc = await paragraphTag[0].getTagName()
        console.log('teddy',paragraphTagSrc)
        if (paragraphTagSrc === 'p') {
            accuracy++
            console.log('paragraph tag exist')
        } else {
            console.log('paragraph tag does not exist')
            adviceArray.push('The element with id=reason is not a p tag')
        }

    } else {
        console.log('element with id=reason does not exist')
        adviceArray.push('Your html file does not have an element tag with an id=reason ')
    }


    const anchorTag = await driver.findElements(By.id('external_link'))
    console.log('anchor',anchorTag)
    if (anchorTag.length > 0) {
        console.log('An anchor tag with the said id exist')
        accuracy++
        let anchorTagSrc = await anchorTag[0].getTagName()
        console.log('tag name',anchorTagSrc)
        if (anchorTagSrc === 'a') {
            console.log('element with id=external_link is an a tag')
            accuracy++
        } else {
            console.log('element with id=external_link is not  an a tag')
            adviceArray.push('The element with id=external_link is not an anchor tag')
        }
    } else {
        console.log('An anchor tag with the said id does not exist')
        adviceArray.push('Your html file does not have an element tag with an id=external_link')
    }
    async function imageTag() {
        const image = await driver.findElements(By.id('image'))
        console.log('imageE',image)
        if (image.length > 0) {
            console.log('an element with id=image exist')
            accuracy++
            let imageTag = await image[0].getTagName()
            console.log('image tag',imageTag)
            if (imageTag === 'img') {
                console.log('image tag exist')
                accuracy++
            } else {
                console.log('image tag does not exist')
                adviceArray.push('The element with an id=image is not an image tag')
            }
            let altAttribute =await image[0].getAttribute('alt')
            console.log('altA',altAttribute)
            if (altAttribute !== null) {
                console.log('Alt attribute exist')
                points++
            } else {
                console.log('alt attribute does not exist')
                adviceArray.push('Always make sure your image tag has an alt attribute as it helps just incase your image breaks')
            }
        } else {
            console.log('an element with id=image does not exist')
            adviceArray.push('An image tag with id=image does not exist in your html file')
        }

    }
    imageTag()

    const orderedList = await driver.findElements(By.id('ordered'))
    console.log('orderedL',orderedList)
    if (orderedList.length > 0) {
        console.log('an element with id=ordered exist')
        accuracy++
        let orderedListTag = await orderedList[0].getTagName()
        console.log('orderedD',orderedListTag)
        if (orderedListTag === 'ol') {
            console.log('ol tag exist')
            accuracy++
        } else {
            console.log('ol tag does not exist')
            accuracy.push('an ordered list tag does not exist in your html file')
        }
    } else {
        console.log('an element with id=ordered does not exist')
        adviceArray.push('An element with id=ordered does not exist in your html file')
    }


    const unOrderedList = await driver.findElements(By.id('unordered'))
    console.log('unorderedL',unOrderedList)
    if (unOrderedList.length > 0) {
        console.log('an element with id=unordered exist')
        accuracy++
        let unOrderedListTag = await unOrderedList[0].getTagName()
        console.log('unorderedD',unOrderedListTag)
        if (unOrderedListTag === 'ul') {
            console.log('ul tag exist')
            accuracy++
        } else {
            console.log('ul tag does not exist')
            accuracy.push('an unordered list tag does not exist in your html file')
        }
    } else {
        console.log('an element with id=unordered does not exist')
        adviceArray.push('An element with id=unordered does not exist in your html file')
    }

    async function nameInput() {
        const inputName = await driver.findElements(By.id('name'))
        if (inputName.length > 0) {
            accuracy++
            let inputTagName = await inputName[0].getTagName()
            if (inputTagName === 'input') {
                accuracy++
            }
            let nameInputType = await inputName[0].getAttribute('type')
            if (nameInputType === 'text') {
                accuracy++
            } else {
                adviceArray.push(' A text attribute type does not exist in your html page')
            }
            let nameInputPlaceholder = await inputName[0].getAttribute('placeholder')
            if (nameInputPlaceholder === 'Full Name') {
                accuracy++
            } else {
                accuracy.push('Your name input field does not have a full name placeholde')
            }

        } else {
            adviceArray.push('An input field with id=name does not exist in your html file')
        }
    }
    nameInput()


    async function emailInput() {
        const inputEmail = await driver.findElements(By.id('email_address'))
        if (inputEmail.length > 0) {
            accuracy++
        }
        let inputEmailName = await inputEmail[0].getTagName()
        if (inputEmailName === 'input') {
            accuracy++
            let emailInputType = await inputEmail[0].getAttribute('type')
            if (emailInputType === 'email') {
                accuracy++
            } else {
                adviceArray.push(' An email attribute type does not exist in your html page')
            }
            let emailInputPlaceholder = await inputEmail[0].getAttribute('placeholder')
            if (emailInputPlaceholder === 'Email Address') {
                accuracy++
            } else {
                adviceArray.push('Your email input field does not have a Email Address placeholder')
            }

        } else {
            adviceArray.push('An input field with id=email_address does not exist in your html file')
        }
    }
    emailInput()

    const radioButtonMale = await driver.findElements(By.id('radio_male'))
    if (radioButtonMale.length > 0) {
        accuracy++
        let radioMaleType = await radioButtonMale[0].getAttribute('type')
        if (radioMaleType === 'radio') {
            accuracy++
        } else {
            adviceArray.push('Your html file does not have a male radio button')
        }
    } else {
        adviceArray.push('A radio button with an id=radio_male does not exist in your html file')
    }

    const radioButtonFemale = await driver.findElements(By.id('radio_female'))
    if (radioButtonFemale.length > 0) {
        accuracy++
        let radioFemaleType = await radioButtonFemale[0].getAttribute('type')
        if (radioFemaleType === 'radio') {
            accuracy++
        } else {
            adviceArray.push('Your html file does not have a female radio button')
        }
    } else {
        adviceArray.push('A radio button with an id=radio_female does not exist in your html file')
    }


    const submitButton = await driver.findElements(By.id('submit_button'))
    if (submitButton.length > 0) {
        accuracy++
        let submitButtonType = await submitButton[0].getAttribute('type')
        if (submitButtonType === 'submit') {
            points++
        } else {
            adviceArray.push('Your submit button does not have an attribute type submit')
        }
    } else {
        adviceArray.push('A submit button with an id=submit_button does not exist in your html file')
    }

    const footerTag = await driver.findElements(By.id('footer'))
    if (footerTag.length > 0) {
        accuracy++
    } else {
        adviceArray.push('A footer element with id=footer does not exist in your html file')
    }

}
stuternHtmlTest()