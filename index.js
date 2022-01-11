import axios from "axios";

let fecha 
let magnitud 
let refGeografica

async function getData (){
    const {data} = await axios.get("https://api.gael.cloud/general/public/sismos")
    fecha = data[0].Fecha
    magnitud = data[0].Magnitud
    refGeografica = data[0].RefGeografica
}

function imprimir(){
    console.log(`El último sismo fue el ${fecha}, tuvo una magnitud de ${magnitud} y fue a ${refGeografica}`)
}

getData().then(()=>{
    imprimir()
})