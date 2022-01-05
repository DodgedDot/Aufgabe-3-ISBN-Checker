const {calculateISBNChecksum} = require('./src/methods.js')

describe('methods.js', () => {

    it('should accept a string of a ten-digit-number as Parameter and return a String', () => {
        inputString = "0000000000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toEqual(expect.stringContaining(""))
    })

    it('should accept a string of a ten-digit-number as Parameter and return a String', () => {
        inputString = "0000000000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toEqual(expect.stringContaining(""))
    })
})