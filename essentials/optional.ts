// function with optional parameter
function generateError(msg?: string) {
    throw new Error(msg || 'An error occurred!');
}

type User2 = {
    name: string;
    age: number;
    role?: 'admin' | 'user' | 'guest'; // optional property
};

let input = null;

const didProvideInput = input ?? 'DEFAULT'; // nullish coalescing operator