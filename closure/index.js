// Given: data (variables start with n) comes from external sources.
// For each new data, you have to calculate something like (((n * 3) + 100) / 3 - 20) * n

function average() {
    function calc(n) {
        return (((n * 3) + 100) / 3 - 20) * n;
    }

    const n1 = calc(100);
    const n2 = calc(50);
    const n3 = calc(75);
    const n4 = calc(190);
    const n5 = calc(110);
    const n6 = calc(200);
    const n7 = calc(60);

    return (n1 + n2 + n3 + n4 + n5 + n6 + n7) / 7;
}

console.log(average());