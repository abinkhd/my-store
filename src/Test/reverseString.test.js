import { reverseString } from "./reverseString"

describe.skip('All the tests for Reversing a String',()=>{
    test('Check by entering a string', () => { 
        expect(reverseString('hello')).toBe('olleh');
     })
})