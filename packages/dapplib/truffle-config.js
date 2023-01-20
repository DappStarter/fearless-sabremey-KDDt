require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind history give nasty forget sleep'; 
let testAccounts = [
"0x7a1ead1b096bae175c9a3dafa7e57368555bc2fc77a5f06f620715467bc34ffe",
"0xb987be96e57fc5abb7cd629ecc4a1218aea79642e874b34448cb58df61593463",
"0x2d18076813df1389eeeec2bbf0e5aa6fd1ecdb2d213ec8a9a485e8492a9536fe",
"0x02a5921ea320f436e18d1307c7e8f1912048c666167c7c9e1d3034d02b5ce387",
"0x4434f5a5667e5f6a73e8129d2f2d88de808f394cd39754d3620c7a6b334564ec",
"0x5890a1b0c9c6d23086716f78a7f1a910f36bcc7bfdc5ba78f9a88df70f72aa6c",
"0x212ec8aa18de8a909eba8d619bcf408cf6aa35461a1fb489d01a5c7bceb816ef",
"0x3b792338535cb61001dec9dc1d1c0ee1ea1bd1202c6bb24bf6bdcf5ae43b15f9",
"0x95b5c610788dccedad733da7eca31363babf5e382afcb27e5414e2a7d81794ee",
"0x37c26ffb174c25fbcd5118c8205aad42d973c45a608015c31d4527d8c1b0db34"
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

