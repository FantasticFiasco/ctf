const alphabet = 'abcdefghijklmnopqrstuvwxyz'

function usage() {
    console.log('Usage:')
    console.log('       node vigenere.js encrypt <key> <plain text>')
    console.log('       node vigenere.js decrypt <key> <cipher text>')
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

function decrypt(key, cipherText) {
    key = key.toLowerCase()
    let keyIndex = 0
    let plainText = ''

    for (let char of cipherText) {
        const seed = alphabet.indexOf(key[keyIndex % key.length])
        const caesar = createCaesar(seed)

        const i = caesar.indexOf(char.toLowerCase())
        if (i == -1) {
            plainText += char
            continue
        }

        const plainChar = alphabet[i]
        plainText += isLowerCase(char) ? plainChar : plainChar.toUpperCase()
        keyIndex++
    }

    console.log(plainText)
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
    case 'decrypt':
        if (args.length != 2) {
            usage()
        }
        decrypt(...args)
        break
    default:
        usage()
}
