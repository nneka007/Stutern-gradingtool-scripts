const { By, Key, Builder, Browser } = require("selenium-webdriver");
require("chromedriver");

async function stuternCssTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    let accuracy = 0;
    let points = 0;
    let functionality = 0;
    let adviceArray = []
    // let driver = await new Builder().forBrowser("chrome").build();
    // sawait driver.get(webPath)
    // await new promise(r => setTimeout(r, 3000))
    await driver.get('file:///C:/Users/nwogb/Desktop/toluwasele/Css-Assignment-1/index.html')

    const projectDiv1 = await driver.findElements(By.id('1'))
    console.log('Div 1',projectDiv1)
    if(projectDiv1.length>0) {
        console.log('an element with id=1 exist')
        accuracy++
        let divTag = await projectDiv1[0].getTagName()
        console.log('div',divTag)
        if(divTag==='div') {
            console.log('the div tag element is a div')
            accuracy++
        } else {
            console.log('the div tag element is not a div')
            adviceArray.push('The element with an id=1 is not a div tag')
        }
        let divColor = await projectDiv1[0].getCssValue('background-color')
        console.log('divColor',divColor)
        if(divColor!==null) {
            console.log('div one has a background color styling')
            accuracy++
        }else {
            console.log('div one does not have a background color styling')
            adviceArray.push('Your first div was not styled with a background color')
        }
    } else {
        console.log('an element with id=1 does not exist')
        adviceArray.push('A div element with id=1 does not exist in your html file')
    }

    const firstImage = await driver.findElements(By.id('image1'))
    console.log('first image',firstImage)
    const secondImage = await driver.findElements(By.id('image2'))
    console.log('second image',secondImage)
    const thirdImage = await driver.findElements(By.id('image3'))
    console.log('third image',thirdImage)
    if(firstImage.length > 0 && secondImage.length > 0 && thirdImage.length > 0) {
        console.log('first,second and third images exist with its instructed ids')
        accuracy++ 
    } else {
        console.log('first,second and third images does not exist with its instructed ids')
        adviceArray.push('elements with id=image1,id=image2,id=image2 does not exist in your html file')
    }

    const fullNameInput = await driver.findElements(By.id('name'))
    console.log('full name input',fullNameInput)
    if(fullNameInput.length > 0) {
        console.log('an input element with id=name exist in your file')
        accuracy++
        let fullNameInputType = await fullNameInput[0].getAttribute('type')
        console.log('full name input type',fullNameInputType)
        if(fullNameInputType!==null) {
            console.log('a type text exist in your html file')
            accuracy++
        } 
        if(fullNameInputType==='text') {
            console.log('a type=text exist in your html file')
            points++
        } else {
            console.log('a type text does not exist in your html file')
            adviceArray.push('An attribute type=text does not exist in your html file')
        }
        
    } else {
        console.log('an input element with id=name does not exist in your file')
        adviceArray.push('An element input element with id=name exist in your html file')
    }

    const emailInput = await driver.findElements(By.id('email'))
    console.log('email input',emailInput)
    if(emailInput.length > 0) {
        console.log('an input element with id=email exist in your file')
        accuracy++
        let emailInputType = await emailInput[0].getAttribute('type')
        console.log('email input type',emailInputType)
        if(emailInputType!==null) {
            console.log('a type email exist in your html file')
            accuracy++
        } 
        if(emailInputType==='email') {
            console.log('a type=email exist in your html file')
            points++
        } else {
            console.log('a type email does not exist in your html file')
            adviceArray.push('An attribute type=email does not exist in your html file')
        }
        
    } else {
        console.log('an input element with id=name does not exist in your file')
        adviceArray.push('An element input element with id=name exist in your html file')
    }

    const textArea = await driver.findElements(By.id('text_area'))
    console.log('text area',textArea)
    if(textArea.length > 0) {
        console.log('an element with id=text_area exist in your html file')
        accuracy++
    } else {
        console.log('an element with id=text_area does not exist in your html file')
        adviceArray.push('An element with id=text_area does not exist in your html file')
    }

    const maleRadio = await driver.findElements(By.id('radio-male'))
    const femaleRadio = await driver.findElements(By.id('radio-female'))
    const otherRadio = await driver.findElements(By.id('other-radio'))
    if(maleRadio.length > 0 && femaleRadio.length > 0 && otherRadio.length > 0) {
        accuracy++
        let maleRadioType = await maleRadio[0].getAttribute('type')
        if(maleRadioType==='radio') {
            accuracy++
        } else {
            adviceArray.push('An input filed with type=radio attribute does not exist in your html file')
        }
        let femaleRadioType = await femaleRadio[0].getAttribute('type')
        if(femaleRadioType==='radio') {
            accuracy++
        } else {
            adviceArray.push('An input filed with type=radio attribute does not exist in your html file')
        }
        let otherRadioType = await otherRadio[0].getAttribute('type')
        if(otherRadioType==='radio') {
            accuracy++
        } else {
            adviceArray.push('An input filed with type=radio attribute does not exist in your html file')
        }
    } else {
        adviceArray.push('elements with id=radio-male,id=radio-female,id=radio-others does not exist in your html file')
    }

    const cricketCheckbox = await driver.findElements(By.id('checkbox-cricket'))
    const footballCheckbox = await driver.findElements(By.id('checkbox-football')) 
    const hockeyCheckbox = await driver.findElements(By.id('checkbox-hockey'))
    if(cricketCheckbox.length > 0 && footballCheckbox.length > 0 && hockeyCheckbox.length > 0) {
        accuracy++
        let cricket = await cricketCheckbox[0].getAttribute('type')
        if(cricket==='checkbox') {
            accuracy++
        } else {
            adviceArray.push('An input field with type=checkbox does not exist in your html file')
        }
        let football = await footballCheckbox[0].getAttribute('type')
        if(football==='checkbox') {
            accuracy++
        } else {
            adviceArray.push('An input field with type=checkbox does not exist in your html file')
        }
        let hockey = await hockeyCheckbox[0].getAttribute('type')
        if(hockey==='checkbox') {
            accuracy++
        } else {
            adviceArray.push('An input field with type=checkbox does not exist in your html file')
        }
    } else {
        adviceArray.push('elements with id=checkbox-cricket,id=checkbox-football,id=checkbox-hockey does not exist in your html file')
    }

    
    const submitButton = await driver.findElements(By.id('Submit_button'))
    if(submitButton.length > 0) {
        accuracy++
        let submitButtonTag = await submitButton[0].getTagName()
        if( submitButtonTag==='button') {
            accuracy++
        } else {
            if(submitButtonTag==='input') {
                adviceArray.push('Submit button should be a button tag not an input field')
            }
        }

    } else {
        adviceArray.push('An element with id=Submit_button does not exist in your html file')
    }

    const footer = await driver.findElements(By.id('footer'))
    if(footer.length > 0) {
        accuracy++
        let footerTag = await footer[0].getTagName()
        if(footerTag==='footer') {
            accuracy++
        } else {
            adviceArray.push('A footer tag does not exist in your html file')
        }
    } else {
        adviceArray.push('An element with id=footer does not exist in your html file')
    }


    


}
stuternCssTest()