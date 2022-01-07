const {calculateISBNChecksum} = require('./src/methods.js')

describe('methods.js', () => {

    it('should return the remainder of the division by dividing the sum of the first nine numbers of a ten-digit-input-string, while every number is first multiplied with its digit-number, through eleven', () => {
        inputString = "0123456789"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe(9)
    })

    it('should return the remainder of the division by dividing the sum of the first nine numbers of a ten-digit-input-string, while every number is first multiplied with its digit-number, through eleven', () => {
        inputString = "9876543210"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe(0)
    })

    
})