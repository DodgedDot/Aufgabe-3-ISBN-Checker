const {calculateISBNChecksum} = require('./src/methods.js')

describe('methods.js', () => {

    it('should convert an input-string of a ten-digit-number and return it as an array', () => {
        inputString = "0123456789"
        var result = calculateISBNChecksum(inputString)
        expect(result).toStrictEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
    })

    it('should convert an input-string of a ten-digit-number and return it as an array', () => {
        inputString = "9876543210"
        var result = calculateISBNChecksum(inputString)
        expect(result).toStrictEqual(['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'])
    })
})