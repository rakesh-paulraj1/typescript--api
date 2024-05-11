"use strict";
function sumofAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumofAge({ name: "Rakesh", age: 20 }, { name: "Mukesh", age: 28 });
console.log(age);
