const fetch = require('node-fetch')

const strings = [
    'copy_char',
    'value',
    '207aLjBod',
    '1301420SaUSqf',
    '233ZRpipt',
    '2224QffgXU',
    'check_flag',
    '408533hsoVYx',
    'instance',
    '278338GVFUrH',
    'Correct!',
    '549933ZVjkwI',
    'innerHTML',
    'charCodeAt',
    './aD8SvhyVkb',
    'result',
    '977AzKzwq',
    'Incorrect!',
    'myExports',
    'length',
    'getElementById',
    '1jIrMBu',
    'input',
    '615361geljRK',
]

const getString = function (index) {
    index = index - 0xc3
    let string = strings[index]
    return string
}

;(function (_0x12fd07, _0x4e9d05) {
    const _0x4f7b75 = getString
    while (!![]) {
        try {
            const _0x1bb902 =
                -parseInt(_0x4f7b75(0xc8)) * -parseInt(_0x4f7b75(0xc9)) +
                -parseInt(_0x4f7b75(0xcd)) +
                parseInt(_0x4f7b75(0xcf)) +
                parseInt(_0x4f7b75(0xc3)) +
                -parseInt(_0x4f7b75(0xc6)) * parseInt(_0x4f7b75(0xd4)) +
                parseInt(_0x4f7b75(0xcb)) +
                -parseInt(_0x4f7b75(0xd9)) * parseInt(_0x4f7b75(0xc7))
            if (_0x1bb902 === _0x4e9d05) break
            else _0x12fd07['push'](_0x12fd07['shift']())
        } catch (_0x4f8a) {
            _0x12fd07['push'](_0x12fd07['shift']())
        }
    }
})(strings, 0x4bb06)

let myExports
;(async () => {
    const _0x835967 = getString
    let _0x1adb5f = await fetch('http://mercury.picoctf.net:61778/' + _0x835967(0xd2)),
        _0x355961 = await WebAssembly['instantiate'](await _0x1adb5f['arrayBuffer']()),
        _0x5c0ffa = _0x355961[_0x835967(0xcc)]
    myExports = _0x5c0ffa[_0x835967(0xd6)]
})()

function onButtonPress() {
    const _0x50ea62 = getString
    let _0x5f4170 = document[_0x50ea62(0xd8)](_0x50ea62(0xda))[_0x50ea62(0xc5)]
    for (let _0x19d3ca = 0x0; _0x19d3ca < _0x5f4170['length']; _0x19d3ca++) {
        myExports[_0x50ea62(0xc4)](_0x5f4170[_0x50ea62(0xd1)](_0x19d3ca), _0x19d3ca)
    }
    myExports['copy_char'](0x0, _0x5f4170[_0x50ea62(0xd7)]),
        myExports[_0x50ea62(0xca)]() == 0x1
            ? (document['getElementById'](_0x50ea62(0xd3))[_0x50ea62(0xd0)] = _0x50ea62(0xce))
            : (document[_0x50ea62(0xd8)](_0x50ea62(0xd3))['innerHTML'] = _0x50ea62(0xd5))
}
