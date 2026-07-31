class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log("Box contains:", this.value);
    }
}

let numberBox = new Box<number>(100);
numberBox.display();

let stringBox = new Box<string>("Hello TypeScript");
stringBox.display();

let booleanBox = new Box<boolean>(true);
booleanBox.display();