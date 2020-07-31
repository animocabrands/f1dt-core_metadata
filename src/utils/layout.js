function validateBitsLayout(layout) {
    const totalBits = layout.reduce((prev, curr) => {
        return { bits: prev.bits + curr.bits }
    }, {bits: 0}).bits;
    if (totalBits != 256) {
        throw Error(`Bits layout contains ${totalBits} bits instead of 256`);
    }
}

module.exports = {
    validateBitsLayout,
}
