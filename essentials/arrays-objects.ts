// Array type
let hobbies = [];
hobbies = ["Sports", "Cooking"];

// Flexible array type
let users: Array<string|number>;
users = [1, 'max'];

// Tuple type
let possibleResults: [number, number];
possibleResults = [10, 20];

// Type {} means any non-null and non-undefined value
let val: {} = 'some text';

// Flexible object type with Record
let data: Record<string, number | string>;
data = {
    entry1: 1,
    entry2: 'some text'
};

// Enum type
enum Role {
    ADMIN,
    EDITOR,
    GUEST
}
let userRole: Role = Role.ADMIN;

// Literal types
type UserRole = 'ADMIN' | 'EDITOR' | 'GUEST';
let userRole2: UserRole = 'EDITOR';

// Structured object type definition
type User = {
    name: string;
    age: number | string;
    hobbies: string[];
    role: Role;
};

let user = {
    name: 'Max',
    age: 38,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};