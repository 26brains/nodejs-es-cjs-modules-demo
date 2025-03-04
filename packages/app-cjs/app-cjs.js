const { adder } = require('mod-cjs');
const modEsm = import('mod-esm');

async function main() {
    const { mul } = await modEsm;
    console.log('app-cjs');
    console.log(adder(1, 2));
    console.log(mul(2, 3));
}

main();
