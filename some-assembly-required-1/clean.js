;(async () => {
    const response = await fetch('./JIFxzHyW8W')
    const arrayBuffer = await response.arrayBuffer()
    const webAssembly = await WebAssembly.instantiate(arrayBuffer, importObject)

    const webAssemblyExports = webAssembly.instance.exports
    console.log('web assembly instance exports')
    console.log(webAssemblyExports)

    let password = 'picoCTF{51e513c498950a515b1aab5e941b2615}'

    for (let i = 0; i < password.length; i++) {
        const charCode = password.charCodeAt(i)
        webAssemblyExports.copy_char(charCode, i)
    }

    webAssemblyExports.copy_char(0, password.length)

    if (webAssemblyExports.check_flag() == 1) {
        console.log('Correct!')
    } else {
        console.log('Incorrect!')
    }
})()
