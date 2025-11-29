function add(a: number, b: number): number {
    return a + b;
}

// Function with no return value
function log(message: string): void {
    console.log(message);
}

// Function that never returns
function logAndThrow(message: string): never {
    console.log(message);
    throw new Error(message);
}

// Function with a defined callback as a parameter
function performJob(cb: (m: string) => void): void {
    // do something

    cb('Job done!');
}

performJob(log);