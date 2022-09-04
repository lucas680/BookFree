import { Component } from 'react';
import './style.css'

const logado = localStorage.getItem('logado')


class Adicionar extends Component{

    constructor(props){
        super(props)
        this.state = {
           books: []
          }
    }
    
  
  
  render(){

    if(logado !== 'true'){
      
      this.props.history.push('/')
      
    }

    return(
    <div className='adicionar2'>
        
            <form action='http://localhost:21262/cadastrar' method='POST'encType='multipart/form-data'>
            <label>Título:</label><br/>
            <input id='ti' type="text" name='titulo' required/><br/>

            <label>Descricao:</label><br/>
            <textarea id='desc' name='descricao' required>
                
            </textarea><br/>

            <label>Pdf:</label><br/>
            <input name='pdf' id='pdf' type="text" required/><br/>

            <label>Capa:</label><br/>
            <input name='capa' id='capa' type="file" accept='image/*' required/><br/>

            <label>Gênero:</label><br/>
            <select name='genero' required>
              <option selected disabled>Escolher</option>
              <option value='1'>Fantasia/Ficção</option>
              <option value='2'>Mistério</option>
              <option value='3'>Romance</option>
              <option value='4'>Terror</option>
            </select>

            <div className='botao'>
            <button type='submit' onClick={()=>{
              setTimeout(()=>{
                this.props.history.push('/books')
                window.location.reload()
              }, 2000)
            }}>Salvar</button>
            </div>

            </form><div></div>

    </div>
    )
  }
  }
  
  export default Adicionar;
