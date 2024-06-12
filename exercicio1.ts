// Create a interface called IPerson with the following properties:
// name (string): representing the person's name
// age (number): representing the person's age
// address (string): representing the person's address
/*Write a function called updatePersonName that takes in a person object 
(of type Person) and a newName string. The function should create a new object 
with the same properties as the original person object, except the name 
property should be updated with the newName value. The original person object should remain unchanged.
*/

interface IPerson{
    name:string;
    age:number;
    address:string;
}


const person: IPerson ={
    name : 'gonçalo',
    age : 25,
    address : 'valongo'
}
console.log(person);

const updatePersonName= (newName:string):IPerson =>{
    person.name=newName;
    return person
} //inicialmente fiz void em vez de IPerson e fiz console.log lá dentro

console.log(updatePersonName('sabi'))


//solução prof

// interface IPerson {
//     name: string,
//     age: number,
//     address: string
//   }
  
//   const person: IPerson = {
//     name: 'Ivan',
//     age: 22,
//     address: 'Berlin, Germany'
//   }
  
//   function updateName(person: IPerson, newName: string): IPerson {
//     return {
//       ...person,
//       name: newName
//     }
//   }
  
//   const updatedPerson = updateName(person, 'Marcus');
  
//   console.log(person)
//   console.log(updatedPerson)
  
  
  
  
  
  
  
  
  
  