import axios from "axios";
import http from "http";

let fecha 
let magnitud 
let refGeografica

const server = http.createServer( (req,res) => {
    async function getData (){
        const {data} = await axios.get("https://api.gael.cloud/general/public/sismos")
        fecha = data[0].Fecha
        magnitud = data[0].Magnitud
        refGeografica = data[0].RefGeografica
    }
    
    function imprimir(){
        res.end(`El último sismo fue el ${fecha}, tuvo una magnitud de ${magnitud} y fue a ${refGeografica}`)
    }
    
    getData().then(()=>{
        imprimir()
        console.log(`El último sismo fue el ${fecha}, tuvo una magnitud de ${magnitud} y fue a ${refGeografica}`)
    })

})
server.listen(3000, () => console.log("servidor activo"))