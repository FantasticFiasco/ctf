const alphabet = 'abcdefghijklmnopqrstuvwxyz'

function usage() {
    console.log('Usage:')
    console.log('       node vigenere.js encrypt <key> <plain text>')
    process.exit(1)
}

function createCaesar(seed) {
    let caesar = ''

    for (let i = 0; i < alphabet.length; i++) {
        let charIndex = (i + seed) % alphabet.length
        caesar += alphabet[charIndex]
    }

    return caesar
}

function isLowerCase(char) {
    return char === char.toLowerCase()
}

function encrypt(key, plainText) {
    key = key.toLowerCase()
    let keyIndex = 0
    let cipherText = ''

    for (let char of plainText) {
        const seed = alphabet.indexOf(key[keyIndex % key.length])
        const caesar = createCaesar(seed)

        const i = alphabet.indexOf(char.toLowerCase())
        if (i == -1) {
            cipherText += char
            continue
        }

        const cipherChar = caesar[i]
        cipherText += isLowerCase(char) ? cipherChar : cipherChar.toUpperCase()
        keyIndex++
    }

    console.log(cipherText)
}

let args = process.argv.slice(2)
if (args.length < 1) {
    usage()
}

const verb = args[0]
args = args.slice(1)

switch (verb) {
    case 'encrypt':
        if (args.length != 2) {
            usage()
        }
        encrypt(...args)
        break
    default:
        usage()
}
