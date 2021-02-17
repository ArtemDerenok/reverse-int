module.exports = function reverse(n) {
    n = Math.abs(n);
    let number = "";
    n = String(n);
    for (let i = n.length - 1; i >= 0; i--) {
        number += n[i];
    }
    return number;
};
