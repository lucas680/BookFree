const mongoose = require("mongoose")

const Book = new mongoose.Schema({
    titulo: {
        type: String,
        require: true
    },
    descricao: {
        type: String,
        require: true
    },
    capa: {
        type: String,
        require: true
    },
    pdf:{
        type: String,
        require: true
    },
    genero: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

mongoose.model("Book", Book)