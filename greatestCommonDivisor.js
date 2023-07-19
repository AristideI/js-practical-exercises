function greatestCommonDivisor(a, b) {
    let small = Math.min(a, b);
    for (let i = small; i >= 1; i--) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }
}