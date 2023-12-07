const fs = require('fs')
const path = require('path')
const { text } = require('stream/consumers')

const filepath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo(){
    const arquivo = await fs.promises.readFile(filepath)
    const textoDoArquivo = arquivo.toString('utf8')
    console.log(textoDoArquivo)
}

buscarArquivo()

// const promessaDeLeitura = fs.promises.readFile(filepath)

// promessaDeLeitura
//     .then((arquivo) => arquivo.toString('utf8'))
//     .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
//     .then((linhasSemOCabecalho) => linhasSemOCabecalho.map((linha) => {
//        const [nome, feito] = linha.split(';')
//        return {
//         nome,
//         feito: feito === 'true'
//        }
//     }))
//     .then((listaDeTarefas) => console.log(listaDeTarefas))
//     .catch((error) => console.log('deu ruim', error))