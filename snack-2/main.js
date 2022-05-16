// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
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

const short = [];
const long = [];

for (let i = 0; i < zucchina.length; i++) {
    if (zucchina[i].lunghezza < 15) {
        short.push(zucchina[i]);
    } else {
        long.push(zucchina[i]);
    }
}

console.log(short, long);
