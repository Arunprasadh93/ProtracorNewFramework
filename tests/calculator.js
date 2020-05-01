describe('Demo Calculator Tests' , function() { 

    it('addition test' , function() {

        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
        var input = element(by.model('first'));
        input.sendKeys('123');
        expect(input.getAttribute('value')).toBe('123');

        var input2 = element(by.model('second'));
        input2.sendKeys('5');
        expect(input2.getAttribute('value')).toBe('5');
        
        element(by.css('[ng-click="doAddition()"]')).click();

        
        let result = element(by.cssContainingText('.ng-binding', '128'));

        expect(result.getText()).toEqual('128');
        
        

        browser.sleep(4000)
    });

    it('addition test2' , function() {

        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
        var input = element(by.model('first'));
        input.sendKeys('123');
        expect(input.getAttribute('value')).toBe('123');

        var input2 = element(by.model('second'));
        input2.sendKeys('3');
        expect(input2.getAttribute('value')).toBe('5');
        
        element(by.css('[ng-click="doAddition()"]')).click();

        
        let result = element(by.cssContainingText('.ng-binding', '128'));

        expect(result.getText()).toEqual('128');
        
        

        browser.sleep(4000)
    });


    // it('sutraction test' , funtion() {


    // });
});