const Coche = {
    marca: 'seat',
    modelo: 'ibiza',
    matricula: '1234ASD',
}

const Casa = {
    codPostal: 48900,
    calle: 'Ronda',
    portal: 'S/N',
    piso: 1,
}

const FullStackDeveloper = {
    lenguajes: [],
    proyectos: [],
}

const Perro = {
    nombre: 'Toby',
    raza: 'Mastín',
    color: 'negro',
    edad: 7,
    ladrar: function () {
        console.log('guau guau')
    },
    popo: function () {
        return Math.random() * 3
    },
}

const marcaPortatil = Portatil.marca

const marcaPortatil2 = Portatil['marca']

const grupos = Concierto.grupos

let RGB = []
RGB.push(Led.rojo)
RGB.push(Led.verde)
RGB.push(Led.azul)

Portatil.modelo = 'P345'

Concierto.cartelera.push(`Guns N' Roses`)

Concierto.fecha = new Date(["2023-10-06", "19:35"])

Impresora.imprimiendo = {
    nombreArchivo: `Guns N' Roses`,
    copias: 2,
    numPaginas: 1,
}

