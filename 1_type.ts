const isLoading: boolean = true;

//isLoading = false;
// isLoading = 1; // Error

const int: number = 1000;
const float: number = 10.10;
const hex: number = 0xf00d;
const octal: number = 0o744;
const num: number = 1e123;
// const x: number = "123"; // Error

const msg: string = "Hello World";

const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

console.log(arr);

const tuple: [string, number] = ["hello", 10];

const contact: [string, number] = ["Alex", 987654321];

type Tuple = [ string, number, boolean, ...string[] ];

const tuple2: Tuple = ["Alex", 987654321, true];

let variable: any = 10;
variable = "Hello";
variable = true;


// void
function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}

sayHello("Alex");

// return string
function returnHello(name: string): string {
  return `Hello ${name}`;
}

returnHello("Alex");


// type

type ID = string | number;

type User = {
  id: ID;
  name: string;
  age: number;
};


const id1: ID = "123";
const id2: ID = 321;

type SomeType = string | null | undefined;


let usr: User = {
  id: 1,
  name: "Alex",
  age: 29
};


type TypeUser = {
  name: string;
  age: number;
};

const user: TypeUser = {
  name: "Marcus",
  age: 29
};

type TypeAddress = {
  street: string;
  city: string;
  country: string;
};

let addr: TypeAddress = {
  street: "Rua 1",
  city: "São Paulo",
  country: "Brasil"
};

let common: TypeUser & TypeAddress;

common = {
  ...user,
  ...addr
}

common = {
  name: "Igor",
  age: 29,
  street: "Rua 1",
  city: "Porto",
  country: "Portugal"
};

console.log(common);









