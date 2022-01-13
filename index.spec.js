const {calculateISBNChecksum} = require('./src/methods.js')

describe('methods.js', () => {

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

    //alle Tests nachtragen + Test von realen Büchern
    //Test von Summe, dann Multiplikation, dann ... mittels 0001000000 = ...
    //X und Extremfälle testen Bsp. Summe 001000001 (12) -> Summe: 2 Multiplikation: 12 Modulo: 1
})