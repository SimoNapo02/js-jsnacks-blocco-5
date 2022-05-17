// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// Infine stampa separatamente i 3 array.v
const car = [
    {
       marca:" Toyota",
       modello: "30",
       alimentazione: "benzina",
    },
    {
       marca:" jeep",
       modello: "55",
       alimentazione:"diesel",
    },
    {
       marca:" Audi",
       modello: "21",
       alimentazione:"elettrica",
    },
    {
       marca:" Toyota",
       modello: "35",
       alimentazione:"metano",
    },
    {
       marca:" Toyota",
       modello: "25",
       alimentazione:"diesel",
    },
    {
       marca:"fiat",
       modello: "30",
       alimentazione:"benzina",
    },
    {
       marca:"jeep",
       modello: "50",
       alimentazione:"diesel",
    },
    {
       marca:" jeep",
       modello: "33",
       alimentazione:"metano",
    },
    {
       marca:"audi",
       modello: "12",
       alimentazione:"benzina",
    },
    {
       marca:"fiat",
       modello: "45",
       alimentazione:"elettrica",
    },
]

// creo array vuoti in base all'alimentazione dell'auto

const benzina = [];

const diesel = [];

const other = [];