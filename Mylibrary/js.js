function Book(name, pages, read) {
    this.name = name
    this.pages = pages
    this.read = read
    this.info = function(){
        return (name +','+ pages +','+ read)
    }
}

const book1 = new Book ('Kings', ' 289 pages', ' not read yet')
const book2 = new Book ('Lords', ' 120 pages', ' already read')

console.log(book1.info())
console.log(book2.info())

Book.prototype.sayHello = function() {
    console.log("Hello, I'm a Book!");
 }
 
 book1.sayHello() // logs "Hello, I'm a player!"
 book2.sayHello()
 console.log(book1.valueOf())