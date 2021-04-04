const fetch = require('node-fetch')

;(async () => {
    const response = await fetch('http://mercury.picoctf.net:61778/aD8SvhyVkb')
    const arrayBuffer = await response.arrayBuffer()
    const webAssembly = await WebAssembly.instantiate(arrayBuffer)
    const webAssemblyExports = webAssembly.instance.exports

    console.log('web assembly exports')
    console.log(webAssemblyExports)

    let password = 'p'

    for (let i = 0; i < password.length; i++) {
        webAssemblyExports.copy_char(password.charCodeAt(i), i)
    }

    webAssemblyExports.copy_char(0, password.length)

    if (webAssemblyExports.check_flag() == 1) {
        console.log('Correct!')
    } else {
        console.log('Incorrect!')
    }
})()
