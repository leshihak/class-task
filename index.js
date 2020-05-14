// Task 1

// class Worker {
//   constructor(options) {
//     this.firstName = options.firstName,
//     this.secondName = options.secondName,
//     this.rate = options.rate,
//     this.days = options.days
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }
// }

// const worker = new Worker({firstName: 'Ivan', secondName: 'Ivanov', rate: 10, days: 31});
// console.log(worker.firstName);
// console.log(worker.secondName);
// console.log(worker.days);
// console.log(worker.rate);
// console.log(worker.getSalary());

// const secondWorker = new Worker({firstName: 'Nat', secondName: 'Les', rate: 100, days: 16});
// console.log(secondWorker.getSalary());

// const thirdWorker = new Worker({firstName: 'Vit', secondName: 'Ol', rate: 55, days: 4});
// console.log(thirdWorker.getSalary());



// Task 2

// class MyString {
//   constructor(string) {
//     this.string = string;
//   }
//   reverse(str) {
//     return str.split('').reverse().join('');
//   }
//   ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
//   ucWords(str) {
//    const toLowerStr = str.toLowerCase().split(' ');
//    const upWords = toLowerStr.map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
//    return upWords.join(' ');
//   }
// }

// const str = new MyString();
// console.log(str.reverse('Natka'))
// console.log(str.ucFirst('natka'))
// console.log(str.ucWords('Natka arsenal Natka world'))