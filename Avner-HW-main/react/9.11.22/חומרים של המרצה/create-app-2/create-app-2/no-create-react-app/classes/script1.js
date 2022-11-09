const obj = {
   name: "Avi",
   age: 23,
   showAge: function () {
      console.log(this.age)
   },
   showName: function () {
      console.log(this.name)
   },
   hobbies: ['a', 'b'],
   address: {
      street: "123"
   }
}

const obj2 = {
   name: "Pini",
   age: 20,
   showAge: function () {
      console.log(this.age)
   },
   showName: function () {
      console.log(this.name)
   },
   hobbies: ['a', 'b'],
   address: {
      street: "123"
   }
}

// console.log(obj)



class Person {
   constructor(name, age) {
      this.name = name
      this.age = age
   }

   _showBirthday() {
      const year = 2022
      return year - this.age
   }


   doSomething() {
      // this.#showBirthday()
   }
}

const p1 = new Person("Avi", 30)
const p2 = new Person("Pini", 36)


console.log(p1.showBirthday())
console.log(p2.showBirthday())

class Worker extends Person {
   constructor(name, age) {
      super(name, age)
   }

   doSomething() {
      console.log("DO SOMETHING")
   }
}


const w1 = new Worker("David", 50)

console.log(w1.showBirthday())