import { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './style.css'

const logado = localStorage.getItem('logado')


class Editar extends Component{

    constructor(props){
        super(props)
        this.state = {
           books: [],
           id: '',
           value: localStorage.getItem("titulo"),
           value2: localStorage.getItem("link")
          }

          this.handlechange = this.handlechange.bind(this)
          this.handlechange2 = this.handlechange2.bind(this)
    }
    
  componentDidMount(){
    const id = this.props.match.params.id
    this.setState({id: id})
  }

  componentDidUpdate(){
      
  }

  handlechange(event){
      this.setState({value: event.target.value})
  }

  handlechange2(event){
    this.setState({value2: event.target.value})
}
  
  render(){

    if(logado !== 'true'){
      
      this.props.history.push('/')
      
    }

    return(
    <div className='adicionar2'>
        
            <form action='http://localhost:21262/books/' method='POST'>

            <input type='hidden' name='id' value={this.state.id}/>
            <label>Título:</label><br/>
            <input id='ti' type="text" name='titulo' value={this.state.value} onChange={this.handlechange} required/><br/>

            <label>Descricao:</label><br/>
            <textarea id='desc' name='descricao' required>
                {localStorage.getItem('descricao')}
            </textarea><br/>

            <label>Pdf:</label><br/>
            <input name='pdf' id='pdf' type="text" value={this.state.value2} onChange={this.handlechange2} required/><br/>

            <label>Capa:</label><br/>
            <input name='capa' id='capa' type="file" accept='image/*' required/><br/>

            <label>Gênero:</label><br/>
            <select name='genero' required>
              <option selected disabled>Escolher</option>
              <option value='1' selected={localStorage.getItem('genero') == '1'}>Fantasia/Ficção</option>
              <option value='2' selected={localStorage.getItem('genero') == '2'}>Mistério</option>
              <option value='3' selected={localStorage.getItem('genero') == '3'}>Romance</option>
              <option value='4' selected={localStorage.getItem('genero') == '4'}>Terror</option>
            </select>

            <div className='botao'>
            <button type='submit' onClick={()=>{
              setTimeout(()=>{
                this.props.history.push('/logado')
                window.location.reload()
              }, 2000)
            }}>Editar</button>
            </div>

            </form>

    </div>
    )
  }
  }
  
  export default Editar;
