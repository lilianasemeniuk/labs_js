const inc   = x => x + 1;
const twice = x => x * 2;
const cube  = x => x ** 3;

function pipe(...funcs) {
    return function(value) {
        let result = value;
        for (let i = 0; i < funcs.length; i++) {
            if (typeof funcs[i] !== "function") {
                throw new Error("pipe(): один з аргументів не є функцією!");
            }
            result = funcs[i](result);
        }
        return result;
    };
}

console.log("Завдання 1 – pipe() (зліва направо)");

const test1 = pipe(inc, twice, cube);
console.log("test1(3)  →", test1(3));
const test2 = pipe(twice, inc, twice);
console.log("test2(7)  →", test2(7));
const test3 = pipe(cube, inc, twice);
console.log("test3(4)  →", test3(4));


try {
    pipe(inc, "не функція", cube)(10);
} catch (e) {
    console.log("Очікувана помилка:", e.message);
}

function compose(...funcs) {
    return function(value) {
        let result = value;
        for (let i = funcs.length - 1; i >= 0; i--) {
            if (typeof funcs[i] !== "function") {
                throw new Error("compose(): один з аргументів не є функцією!");
            }
            result = funcs[i](result);
        }
        return result;
    };
}

console.log("\nЗавдання 2 – compose() (справа наліво)");

const demo1 = compose(cube, twice, inc);
console.log("demo1(6)  →", demo1(6));
const demo2 = compose(twice, inc, cube);
console.log("demo2(2)  →", demo2(2));

const demo3 = compose(inc, cube, twice);
console.log("demo3 → 27 → 28 → 56 =", demo3(3)); 

try {
    compose(cube, null, inc);
} catch (e) {
    console.log("Очікувана помилка:", e.message);
