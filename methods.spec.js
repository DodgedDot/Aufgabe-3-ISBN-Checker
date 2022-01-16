const {calculateISBNChecksum, checkISBN} = require('./src/methods.js')

describe('checkISBN', () => {

    it('should return that the ISBN is valid because of correct user-InputString at the tenth digit', () => {
        inputString = "1000000001"
        var result = checkISBN('1', inputString)
        expect(result.feedbackText).toBe("ISBN is valid")
    })
    it('should return that the ISBN is invalid because of wrong user-InputString at the tenth digit', () => {
        inputString = "1000000002"
        var result = checkISBN('1', inputString)
        expect(result.feedbackText).toBe("ISBN is invalid")
    })
}),
describe('calculateISBNChecksum', () => {

    //Multiplication
    it('should return every number multiplied with its digit-number as a string', () => {
        inputString = "1000000000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("1")
    })
    it('should return every number multiplied with its digit-number as a string', () => {
        inputString = "0100000000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("2")
    })
    it('should return every number multiplied with its digit-number as a string', () => {
        inputString = "0010000000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("3")
    })
    it('should return every number multiplied with its digit-number as a string', () => {
        inputString = "0001000000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("4")
    })
    it('should return every number multiplied with its digit-number as a string', () => {
        inputString = "0000100000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("5")
    })
    it('should return every number multiplied with its digit-number as a string', () => {
        inputString = "0000010000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("6")
    })
    it('should return every number multiplied with its digit-number as a string', () => {
        inputString = "0000001000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("7")
    })
    it('should return every number multiplied with its digit-number as a string', () => {
        inputString = "0000000100"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("8")
    })
    it('should return every number multiplied with its digit-number as a string', () => {
        inputString = "0000000010"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("9")
    })

    //Addition
    it('should return the sum of the first nine numbers of a ten-digit-input-string as a string', () => {
        inputString = "1000000000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("1")
    })
    it('should return the sum of the first nine numbers of a ten-digit-input-string as a string', () => {
        inputString = "1100000000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("3")
    })
    it('should return the sum of the first nine numbers of a ten-digit-input-string as a string', () => {
        inputString = "1010000000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("4")
    })
    it('should return the sum of the first nine numbers of a ten-digit-input-string as a string', () => {
        inputString = "1001000000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("5")
    })
    it('should return the sum of the first nine numbers of a ten-digit-input-string as a string', () => {
        inputString = "1000100000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("6")
    })
    it('should return the sum of the first nine numbers of a ten-digit-input-string as a string', () => {
        inputString = "1000010000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("7")
    })
    it('should return the sum of the first nine numbers of a ten-digit-input-string as a string', () => {
        inputString = "1000001000"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("8")
    })
    it('should return the sum of the first nine numbers of a ten-digit-input-string as a string', () => {
        inputString = "1000000100"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("9")
    })
    it('should return the sum of the first nine numbers of a ten-digit-input-string as a string', () => {
        inputString = "1000000010"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("10")
    })

    //Modulo
    it('should return the remainder of the division through eleven as a string', () => {
        inputString = "0100000010" //11
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("0")
    })
    it('should return the remainder of the division through eleven as a string', () => {
        inputString = "0001010050" //55
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("0")
    })
    it('should return the remainder of the division through eleven as a string', () => {
        inputString = "1000000010" //10
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("10")
    })
    it('should return the remainder of the division through eleven as a string', () => {
        inputString = "0000000200" //16
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("5")
    })

    //All together --- extreme/border-examples
    it('should return the remainder of the division by dividing the sum of the first nine numbers of a ten-digit-input-string, while every number is first multiplied with its digit-number, through eleven as a string', () => {
        inputString = "0123456789"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("9")
    })

    it('should return the remainder of the division by dividing the sum of the first nine numbers of a ten-digit-input-string, while every number is first multiplied with its digit-number, through eleven as a string', () => {
        inputString = "9876543210"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("0")
    })

    it('should return the remainder of the division by dividing the sum of the first nine numbers of a ten-digit-input-string, while every number is first multiplied with its digit-number, through eleven as a string', () => {
        inputString = "123456789X"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("10")
    })

    //Real ISBN-examples
    it('should identify ISBN of Krabat by Ottfried Preußler as valid', () => {
        inputString = "3522202279"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("9")
    })

    it('should identify ISBN of Faust by  Johann Wolfgang von Goethe as valid', () => {
        inputString = "3123524027"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("7")
    })

    it('should identify ISBN of Erebos by Ursula Poznanski as valid', () => {
        inputString = "3785569572"
        var result = calculateISBNChecksum(inputString)
        expect(result).toBe("2")
    })
  
})