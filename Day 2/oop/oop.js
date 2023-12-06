// // declaration class
// class DeclarationClass {}

// // expression class
// const ExpressionClass = class {}

// // object instance
// new DeclarationClass()

// // hoisting

// class HoistingClass {
//     constructor() {
//         console.log("hoisting")
//     }
// }    
// new HoistingClass()

// constructor
// class ConstructorClass {
//     constructor() {
//         console.log("anda sudah berhasil memanggil constructor class")
//     }
// }

// new ConstructorClass()

// static initializer
// class StaticInitializerClass {
//     static {
//         console.log("Saya membuat class static")
//     }
// }

// new StaticInitializerClass()



// methods
// class MethodsClass {
//     firstField = "first field"

//     firstMethod() {
//         console.log(`ini method dari ${MethodsClass.name}`)
//     }
//     // getter
//     get getFirstField() {     
//         return this.firstField
//     }
//     // setter
//     set setFirstField(value) {
//         this.firstField = value
//     }

// }

// const methodsClass = new MethodsClass()
// methodsClass.firstMethod()

// // getter and setter
// console.log(methodsClass.getFirstField)
// methodsClass.setFirstField = "nilai first field diubah"
// console.log(methodsClass.getFirstField)

// static methods & property
class StaticMethodsClass {
    static firstStaticField = "first static field"
    static secondStaticField
    static{
        this.secondStaticField = "second static field"
    }

    static firstStaticMethod() {
        return `ini static method dari ${StaticMethodsClass.name}`
    }
}

console.log(StaticMethodsClass.firstStaticField)
console.log(StaticMethodsClass.secondStaticField)
console.log(StaticMethodsClass.firstStaticMethod())

// // this keyword
// class ThisKeywordClass {
//     firstField = "first field"

//     get getFirstField() {
//         return this.firstField
//     }

//     set setFirstField(value) {
//         this.firstField = value
//     }
// }

// const thisKeywordClass = new ThisKeywordClass()
// console.log(thisKeywordClass.getFirstField)
// thisKeywordClass.setFirstField = "nilai first field diubah"

// property
// class PropertyClass {
//     constructor(param1 = "kucing", param2 = "meong") {
//         this.param1 = param1
//         this.param2 = param2
//     }
// }

// const propertyClass = new PropertyClass()
// console.log(propertyClass.param1)
// console.log(propertyClass.param2)

// field
// class FieldClass {
//     field1 = "field 1"
//     field2 = "field 2"

//     #privateField = "private field"
//     #privateField2 = "private field 2"

//     get getPrivateField() {
//         return this.#privateField
//     }
// }

// const fieldClass = new FieldClass()
// console.log(fieldClass.field1)
// console.log(fieldClass.field2)
// // console.log(fieldClass.#privateField)
// console.log(fieldClass.getPrivateField)

// inheritance
// class Kucing {
//     #alive = true
//     #datang = false

//     name = "kucing"
//     color = "hitam"
//     weight = 5
//     age = 1

//     callCat() {
//         console.log(`hai ${this.name}!`)
//         this.#datang = true
//     }

//     giveFood() {
//         if (this.#datang) {
//             console.log(`sedang memberi ${this.name} makan`)
//         } else {
//             console.log(`${this.name} tidak datang`)
//         }
//     }

//     get checkWeight() {
//         return this.weight
//     }
// }

// class Anggora extends Kucing {
//     name = "anggora"
//     color = "putih"
//     weight = 10 
//     get checkWeight() {
//         return this.weight
//     }
// }

// const anggoraRumah = new Anggora()
// const anggoraLiar = new Anggora()

// console.log(anggoraRumah.color)
// console.log(anggoraLiar.field )



// super
// class Kucing {
//     #alive = true
//     #datang = false

//     name = "kucing"
//     color = "hitam"

//     constructor(weight = 5, age = 1) {
//         this.weight = weight
//         this.age = age
//     }

//     callCat() {
//         console.log(`hai ${this.name}!`)
//         this.#datang = true
//     }

//     giveFood() {
//         if (this.#datang) {
//             console.log(`sedang memberi ${this.name} makan`)
//         } else {
//             console.log(`${this.name} tidak datang`)
//         }
//     }

//     get checkWeight() {
//         return this.weight
//     }
// }

// class Anggora extends Kucing {
//     name = "anggora"
//     color = "putih"
//     constructor(name = "anggora", weight = 10, age = 2) {
//         super(weight, age)
//         this.name = name
//     }
//     callCat() {
//         if (super.callCat()) return 
//             console.log(`${this.name} datang`)
//     }
//     get checkWeight() {
//         return super.checkWeight
//     }
// }

// const anggoraRumah = new Anggora("anggora rumah", 10, 2)
// const anggoraLiar = new Anggora("anggora liar", 20, 3);

// anggoraLiar.giveFood();
// anggoraLiar.callCat();
// anggoraLiar.giveFood();


