function array() {
    const data = [];

    return {
        push(value) {
            data.push(value);
            return this; 
        },
        pop() {
            return data.pop();
        },
        get(index) {
            return data[index];
        },
        print() {
            console.log("Масив:", data);
            return this;
        },
        get length() {
            return data.length;
        }
    };
}


array()
    .push(10)
    .push(20)
    .push("hello")
    .push(true)
    .print();
