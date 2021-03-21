const alphabet = 'abcdefghijklmnopqrstuvwxyz'

function isLowerCase(char) {
    return char === char.toLowerCase()
}

function createCaesar(seed) {
    let caesar = ''

    for (let i = 0; i < alphabet.length; i++) {
        let charIndex = (i + seed) % alphabet.length
        caesar += alphabet[charIndex]
    }

    return caesar
}

function encrypt(char, caesar) {
    let i = alphabet.indexOf(char.toLowerCase())
    if (i === -1) {
        return char
    }

    const cipherChar = caesar[i]
    return isLowerCase(char) ? cipherChar : cipherChar.toUpperCase()
}

if (process.argv.length != 3) {
    console.log('Usage: node caesar.js <plain or cipher text>')
    process.exit(1)
}

const plainOrCipherText = process.argv[2]

for (let seed = 0; seed < alphabet.length; seed++) {
    const caesar = createCaesar(seed)
    let cipherText = ''

    for (let i = 0; i < plainOrCipherText.length; i++) {
        const char = plainOrCipherText.substring(i, i + 1)
        cipherText += encrypt(char, caesar)
    }

    console.log(alphabet[seed], cipherText)
}
