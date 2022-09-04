import { Component } from 'react';
import './style.css'

const logado = localStorage.getItem('logado')


class Logado extends Component{

    constructor(props){
        super(props)
        this.state = {
           books: []
          }
    }
    
  
    componentDidMount(){
      const LoadBooks = fetch("http://localhost:21262/livros2");
    LoadBooks.then(res => res.json()).then(res =>{
        this.setState({books: res})
    })
    }
  
  render(){

    if(logado !== 'true'){
      
      this.props.history.push('/')
      
    }

    return(
    <div className='logado'>
        {this.state.books.map(res=>{
        return (
            <div key={res._id}>
                <h1>{res.titulo}</h1>
                <p>
                <button onClick={()=>{
                  localStorage.setItem("titulo", res.titulo)
                  localStorage.setItem("descricao", res.descricao)
                  localStorage.setItem("genero", res.genero)

                  this.props.history.push('/logado/books/'+res._id)
                  window.location.reload()
                }}>Editar</button>
                
                <button onClick={()=>{
                  fetch("http://localhost:21262/livrosDelete/"+res._id, {
                    method: "DELETE"
                  })
                  window.location.reload()

                }}>Excluir</button></p>
            </div>
        
       )
    })}

    <h2>
    <button className='adicionar' onClick={()=>{
      this.props.history.push('/adicionar')
      window.location.reload()
    }}>Adicionar</button>
    <button className='adicionar' onClick={()=>{
      localStorage.setItem('logado', 'false')
      window.location.reload()
    }}>Sair</button>
    </h2>
    </div>
    )
  }
  }
  
  export default Logado;
