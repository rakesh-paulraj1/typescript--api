interface User{
    name:string;
    age:number;
    number:number;
    email:string;
    password:string;
}
type Updatedprops = Pick<User,"name"|"age">

function sumofAge (user1:Updatedprops,user2:Updatedprops){
    return user1.age+user2.age;
}

const age=sumofAge({name:"Rakesh",age:20},{name:"Mukesh",age:28});
console.log (age);

