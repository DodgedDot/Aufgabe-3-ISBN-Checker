const {calculateISBNChecksum} = require('./src/methods.js')

describe('methods.js', () => {

    it('should return the sum of the first nine numbers of a ten-digit-input-string, while every number ist multiplied with its digit-number', () => {
        inputString = "0123456789"
        var result = calculateISBNChecksum(inputString)
        expect(result).toStrictEqual(240)
    })

    it('should return the sum of the first nine numbers of a ten-digit-input-string, while every number ist multiplied with its digit-number', () => {
        inputString = "9876543210"
        var result = calculateISBNChecksum(inputString)
        expect(result).toStrictEqual(165)
    })

    
})