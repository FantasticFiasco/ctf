const fetch = require('node-fetch')

const strings = [
    '615361geljRK',
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
]

const getString = function (index) {
    index = index - 0xc3
    let string = strings[index]
    return string
}

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
