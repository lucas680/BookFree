import { Component } from 'react';
import './style.css'

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            dados: []
          }
    }
    
  
    componentDidMount(){
      const LoadDados = fetch("http://localhost:21262/dados");
    LoadDados.then(res => res.json()).then(res =>{
        this.setState({dados: res})
    })
    }

  
  render(){
    
    return(
        <div className='form'>
        <form>
            <label>Email:</label>
            <input id='in1' type="email" required/><br/>

            <label>Senha:</label>
            <input id='in2' type="password" required/>

            <button onClick={()=>{
                var in1 = document.getElementById('in1')
                var in2 = document.getElementById('in2')
                if(in1.value !== '' && in2.value !== ''){
                    if(in1.value == this.state.dados[0].email && in2.value == this.state.dados[0].senha){
                        localStorage.setItem('logado', 'true')
                        this.props.history.push('/logado')
                    }else{
                        alert('email e ou senha inválidos!')
                    }
                }
                
            }}>Logar</button>
        </form>
    </div>
    )
  }
  }
  
  export default Login;