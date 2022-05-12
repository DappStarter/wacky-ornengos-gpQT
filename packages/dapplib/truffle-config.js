require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture street rice ridge punch guess knee slot gate'; 
let testAccounts = [
"0x4666bb627c038402fe7c154ecbacc0c91e881f76bd6879c3114a048afb0b72ba",
"0x4e5306918c075e426c6ab05248a83a90f8a01b37110953fc458501eadeccffad",
"0x03de8f2391f66fad5872c9c0881e8a8de45927edc5f933d321afc2fe207d1462",
"0xdadf16a8223e46aa4a77fe48601dea845d6a9428d770be035df958fc930419aa",
"0x7fe5e65edff584df96d8a90d1aa696ee96c01e87a7b14dd7439f5e76dfd5ca5d",
"0x47bfd27ec7a0abac3d4ca6593fbe8818742c9d9481bf62a1f9949f7936afdd4c",
"0x0af57b78b9221c0802ca9c7a369fac1f8df8f98e6896e60a9ab6e004aadcd592",
"0xa26d3fd67c3f89eb22623ed46940d4db62b594c81aefc01aa16245bf77780767",
"0x043fab81fbd86450c2c78e312144b87f5cae68d16ea6fbb64a2008371f187d04",
"0xf9dd9a32d7c33531a2434e40b7ccf77fc68ec0d2217cd8683cf9a4a2ecfa34ba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

