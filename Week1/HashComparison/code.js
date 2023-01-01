const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    for (let i = 0; i < COLORS.length; i++) {
        let color = COLORS[i];
        // translate string to bytes
        let colorBytes = utf8ToBytes(color);
        // hash string
        let colorHash = sha256(colorBytes);
        // compare hashes
        if (toHex(hash) === toHex(colorHash)) {
            return color;
        }
    }
}

module.exports = findColor;