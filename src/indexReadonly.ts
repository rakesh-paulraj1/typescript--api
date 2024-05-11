
type Partialf = {
    name: string;
    age: number; 
    number: number;
    email: string;
    password: string;
}
const obj :Readonly<Partialf>={
    name:"Rakesh",
    age:20,
    number:1234567890,
    email:"<EMAIL>",
    password:"<PASSWORD>"
}


