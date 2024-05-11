interface User{
    name:string;
    age:number;
    number:number;
    email:string;
    password:string;
}
type updatedprops=Pick<User,"name"|"age">
type Updatedprops2=Partial<updatedprops>


function sumofAge(user1: Updatedprops2, user2: Updatedprops2) {
  if (user1.age && user2.age) {
    return user1.age + user2.age;
  }
  return 0;
}

let sumAge = sumofAge({ name: "Rakesh", age: 20 }, { name: "Mukesh", age: 28 });

console.log (sumAge);