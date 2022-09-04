import './style.css'
import fantasy from './img/fantasy.jpg'
import mistery from './img/mistery.jpg'
import romance from './img/romance.jpg'
import terror from './img/terror.jpg'

export const MyGenrs = () =>{
    
   const click = '/books'
    return (
    <section id="genders" className="genrs">
      
      <a href={click+'/1'}>
        <div>
          <img src={fantasy}/>
           
          <h1>Fantasia/Ficção</h1>
           
        </div></a>

        <a href={click+'/2'}>
        <div>
          <img src={mistery}/>
          
           <h1>Mistério</h1>
           
        </div></a>

        <a href={click+'/3'}>
        <div>
          <img src={romance}/>
          
           <h1>Romance</h1>
          
        </div></a>

        <a href={click+'/4'}>
        <div>
          <img src={terror}/>
          
           <h1>Terror</h1>
           
        </div></a><br/><br/>
    </section>)
}