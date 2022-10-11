class Usuario{
    constructor(name, lastName, books, pets){
        this.name = name
        this.lastName = lastName
        this.books = books
        this.pets = pets
    }

    getFullName(){
        console.log (`Nombre y apellido: ${this.name} ${this.lastName}`)
    }

    countMascotas(){ 
        console.log(`Cantidad de mascotas: ${ this.pets.length}`)
    }

    addMascota(pet){
        this.pets.push(pet)
    }

    addBook(nombre, author){
        this.books.push({nombre:nombre, autor: author})
    }

    getBooksName(){
        this.books.map((libro)=> console.log(`Nombre de libro: ${libro.nombre}`))
    }

}

let personita = new Usuario('Lau', 'Acunia', [{nombre: 'pinocho', autor: 'Nicolas'}] , ['pluto',  'nala'])

personita.getFullName()

personita.addMascota('perro')

personita.countMascotas()

personita.addBook('El zorro', 'j-blavin')

personita.getBooksName()

console.log(personita)
