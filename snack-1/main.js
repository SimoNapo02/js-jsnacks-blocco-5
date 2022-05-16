// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
const zucchina = [
    {
        lunghezza:" 10",
        peso: "30",
    },
    {
        lunghezza:" 13",
        peso: "55",
    },
    {
        lunghezza:" 12",
        peso: "21",
    },
    {
        lunghezza:" 14",
        peso: "35",
    },
    {
        lunghezza:" 10",
        peso: "25",
    },
    {
        lunghezza:" 7",
        peso: "30",
    },
    {
        lunghezza:" 11",
        peso: "50",
    },
    {
        lunghezza:" 13",
        peso: "33",
    },
    {
        lunghezza:" 15",
        peso: "12",
    },
    {
        lunghezza:" 16",
        peso: "45",
    },
]

let totPeso = 0;
for (let i = 0; i < zucchina.length; i++) {
    totPeso += zucchina[i].peso;
}

console.log(totPeso);
