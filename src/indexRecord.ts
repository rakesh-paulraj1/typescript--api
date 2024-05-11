/*type objects={
    [key:string]:{
        name:string;
        age:number;
    }
}*/
type objects=Record<string,{
    age:number,email:string
}>;


const users:objects = {
    "employee1":{
        age:27,
        email:"employee1@company.com"
    },
    "employee2":{
        age:32,
        email:"employee2@company.com"
    }
}