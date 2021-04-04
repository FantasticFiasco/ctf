const fetch = require('node-fetch')

const strings = [
    'instance',
    'copy_char',
    '43591XxcWUl',
    '504454llVtzW',
    'arrayBuffer',
    '2NIQmVj',
    'result',
    'value',
    '2wfTpTR',
    'instantiate',
    '275341bEPcme',
    'innerHTML',
    '1195047NznhZg',
    '1qfevql',
    'input',
    '1699808QuoWhA',
    'Correct!',
    'check_flag',
    'Incorrect!',
    'JIFxzHyW8W',
    '23SMpAuA',
    '802698XOMSrr',
    'charCodeAt',
    '474547vVoGDO',
    'getElementById',
]

const getString = function (index, _0x53c021) {
    index = index - 0x1d6
    let string = strings[index]
    return string
}

let webAssemblyExports
;(async () => {
    const _0x48c3be = getString
    let _0x5f0229 = await fetch('http://mercury.picoctf.net:55336/' + _0x48c3be(0x1e9)),
        _0x1d99e9 = await WebAssembly[_0x48c3be(0x1df)](await _0x5f0229[_0x48c3be(0x1da)]()),
        _0x1f8628 = _0x1d99e9[_0x48c3be(0x1d6)]
    webAssemblyExports = _0x1f8628['exports']
})()

function onButtonPress() {
    const _0xa80748 = getString
    let _0x3761f8 = document['getElementById'](_0xa80748(0x1e4))[_0xa80748(0x1dd)]
    for (let _0x16c626 = 0x0; _0x16c626 < _0x3761f8['length']; _0x16c626++) {
        webAssemblyExports[_0xa80748(0x1d7)](_0x3761f8[_0xa80748(0x1ec)](_0x16c626), _0x16c626)
    }
    webAssemblyExports['copy_char'](0x0, _0x3761f8['length']),
        webAssemblyExports[_0xa80748(0x1e7)]() == 0x1
            ? (document[_0xa80748(0x1ee)](_0xa80748(0x1dc))[_0xa80748(0x1e1)] = _0xa80748(0x1e6))
            : (document[_0xa80748(0x1ee)](_0xa80748(0x1dc))[_0xa80748(0x1e1)] = _0xa80748(0x1e8))
}
