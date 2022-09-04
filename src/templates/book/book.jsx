import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css'

class Books extends Component{

    state = {
        books: []
      }
  
    componentDidMount(){
        const id = this.props.match.params.id

        if(id != undefined){

            const LoadBooks = fetch("http://localhost:21262/livros2/"+id);
    LoadBooks.then(res => res.json()).then(res =>{
        this.setState({books: res})
        
    })

        }else{

      const LoadBooks = fetch("http://localhost:21262/livros2");
    LoadBooks.then(res => res.json()).then(res =>{
        this.setState({books: res})
        
    })

        }
    }
  
  render(){
    
    /*if(this.state.books.length === 0){
        return(<div className='span'>
            <h1>Carregando...</h1>
        </div>)
    }*/

    if(this.state.books.length == 0){

            return (<div className='span'><br/><br/><br/><br/>
            <h1 className='opacidadegradativa'>Nunhum livro encontrado</h1>
        </div>)

        
    }

    return(
        <div className='book'>
    {this.state.books.map(res=>{

        return (
        <a key={res._id} onClick={() =>{
            localStorage.setItem("image", res.capa);
            localStorage.setItem("title", res.titulo);
            localStorage.setItem("description", res.descricao);
            localStorage.setItem("link", res.pdf);
            window.location="/book"
        }}>
            <img src={require('./liv/'+res.capa)}/>
            <div>
                <h1>{res.titulo}</h1>
                <p>{res.descricao.length > 140 &&
                res.descricao.substring(0, 140)+'...'}{
                    res.descricao.length <= 140 && res.descricao
                }</p>
            </div>
        </a>
        
       )

    })}
    </div>
    )}

  }
  
  export default Books;
