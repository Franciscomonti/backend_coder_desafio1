class Usuario{
    constructor(name, lastName, books, pets){
        this.name = name
        this.lastName = lastName
        this.books = books
        this.pets = pets
    }

    getFullName(){
        return `Nombre y apellido: ${this.name} ${this.lastName}`
    }

    addMascota(pet){
        this.pets.push({nombre: pet})
    }

    countMascotas(){
        let cantidad = this.pets.length
        return `Cantidad de mascotas: ${cantidad}`
    }

    addBook(nombre, author){
        this.books.push({nombre:nombre, autor: author})
    }

    getBooksName(){
        this.books.map((libro)=> console.log(`Nombre de libro: ${libro.nombre}`))
    }

    getPetsNames(){
        this.pets.map((mascota)=> console.log(`Nombre de mascota: ${mascota.nombre}`))
    }
}

let personita = new Usuario('Lau', 'Acunia', [{nombre: 'pinocho', autor: 'Nicolas'}] , [{nombre: 'pluto'}, {nombre: 'nala'}])

let nombreCompletoPersonita = personita.getFullName()
console.log(nombreCompletoPersonita)

let agregarMascotaPersonita = personita.addMascota('perro')

let cantidadMascotasPersonita = personita.countMascotas()
console.log(cantidadMascotasPersonita)

let nombreDeMascotas = personita.getPetsNames()

let agregarNvoLibroPersonita = personita.addBook('El zorro', 'j-blavin')

let obtenerNombreLibrosPersonita = personita.getBooksName()

console.log(personita)