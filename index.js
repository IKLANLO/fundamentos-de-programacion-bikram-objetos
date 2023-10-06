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


Noticia = {
    titular: 'Noticia',
    cuerpo: 'cuerpo de noticia',
}

Persona = {
    nombre: 'Iker',
    apellidos: 'Larreategui',
    edad: '35',
}

Avion = {
    numPasajeros:600,
    despegar: function(){
        console.log('despegando')
    },
    volar: function(){
        console.log('llegando al destino')
    },
    aterrizar: function(){
        console.log('aterrizando')
    },
}
Paquete = {
    contenido: ['camara'],
}
Pais = {
    numHabitantes: 3,
    continente: 'Europa',
    gentilicio: 'tresense',
}
const codError = O_Error.codigo
const integrantes = Grupo.integrantes
const  nivelesTinta = Impresora.tinta
const pixeles = Pantalla.pixeles
const especificaciones = Movil['especificaciones']
Grupo.numIntegrantes = 5
Pantalla.dimensiones ="1920x1080"

if (Led.encendido === true) {
    Led.encendido = false
} else{
    Led.encendido = true
}


Movil.temperatura ='20º'

