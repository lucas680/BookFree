const express = require('express')
const routes = express.Router()


const multer = require('multer')
const upload = multer({dest: '../templates/book/liv/'})

const mongoose = require("mongoose")

require('./book')
const Book = mongoose.model("Book")

mongoose.connect('mongodb://localhost/bookfree').then(()=>{
    console.log("conexao realizada com sucesso")
}).catch((e)=>{
    console.log("erro na conexao com o banco")
})


let dados = [
    {
        id: 1,
        nome: 'Lucas Pereira',
        email: 'lucas@gmail.com',
        senha: 'lucas'
    }
]


routes.get('/dados', (req, res) => {
    return res.json(dados)
})

routes.get('/livros2', (req, res)=>{
    Book.find().then((book)=>{
        return res.json(book)
    }).catch((error) =>{
        return res.status(400).json({
            error: true,
            message: "Nenhum livro encontrado"
        })
    })
})

routes.get('/livros2/:id', (req, res)=>{
    Book.find({genero: req.params.id}).then((book)=>{
        return res.json(book)
    }).catch((error) =>{
        return res.status(400).json({
            error: true,
            message: "Nenhum livro encontrado"
        })
    })
})

routes.post('/cadastrar', upload.single("capa"), (req, res) =>{
    if(!req.body){
        return res.status(400).end()

    }else{
        const {file} = req
        const book = Book.create({capa: file.filename, ... req.body}, (err)=>{
            if(err) return res.status(400).json({
                error: true,
                message: "erro ao salvar os livros"
            })

        })
    }

})

routes.delete("/livrosDelete/:id", (req, res)=>{
    console.log(req.params.id)
    const book = Book.deleteOne({_id: req.params.id}, (err)=>{
        if(err) return res.status(400).json({
            error: true,
            message: 'livro não apagado com sucesso'
        })

        return res.status(200).json({
            error: false,
            message: 'livro apagado com sucesso'
        })
    })
})

routes.post("/books", (req, res)=>{
    const book = Book.updateOne({_id: req.body.id}, req.body, (err)=>{
        if(err) return res.status(400).json({
            error: true,
            message: "livro não foi editado com sucesso"
        })
    })
})

/*routes.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()
    
        db.push(body)
        return res.json(body)
})

routes.delete('/:id', (req, res) =>{
    const id = req.params.id

    let newDB = db.filter(item =>{
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})*/

module.exports = routes