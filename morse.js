const alphabet = [
    { char: 'A', code: '.-' },
    { char: 'B', code: '-...' },
    { char: 'C', code: '-.-.' },
    { char: 'D', code: '-..' },
    { char: 'E', code: '.' },
    { char: 'F', code: '..-.' },
    { char: 'G', code: '--.' },
    { char: 'H', code: '....' },
    { char: 'I', code: '..' },
    { char: 'J', code: '.---' },
    { char: 'K', code: '-.-' },
    { char: 'L', code: '.-..' },
    { char: 'M', code: '--' },
    { char: 'N', code: '-.' },
    { char: 'O', code: '---' },
    { char: 'P', code: '.--.' },
    { char: 'Q', code: '--.-' },
    { char: 'R', code: '.-.' },
    { char: 'S', code: '...' },
    { char: 'T', code: '-' },
    { char: 'U', code: '..-' },
    { char: 'V', code: '...-' },
    { char: 'W', code: '.--' },
    { char: 'X', code: '-..-' },
    { char: 'Y', code: '-.--' },
    { char: 'Z', code: '--..' },
    { char: '1', code: '.----' },
    { char: '2', code: '..---' },
    { char: '3', code: '...--' },
    { char: '4', code: '....-' },
    { char: '5', code: '.....' },
    { char: '6', code: '-....' },
    { char: '7', code: '--...' },
    { char: '8', code: '---..' },
    { char: '9', code: '----.' },
    { char: '0', code: '-----' },
]

function usage() {
    console.log('Usage: node morse.js <cipher>')
    process.exit(1)
}

function toChar(code) {
    for (const c of alphabet) {
        if (c.code === code) {
            return c.char
        }
    }

    console.log(`Code '${code}' was not found, returning it as is`)
    return code
}

function decode(cipher) {
    const codes = cipher.split(' ')
    let plainText = ''

    for (const code of codes) {
        plainText += toChar(code)
    }

    console.log(plainText)
}

let args = process.argv.slice(2)
if (args.length != 1) {
    usage()
}

decode(args[0])
