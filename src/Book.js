import './Book.css';

export const Book = () =>{

    return (<div className='book2'>
        <div className='book2-img'>
        <img src={require('./templates/book/liv/'+localStorage.getItem("image"))} alt='capa do livro'/>
        <div>
        <h1>{localStorage.getItem("title")}</h1>
        <button onClick={()=>{
            window.open(localStorage.getItem('link'))
        }}>Ler</button>
        </div>
        </div>
        <div className='book2-desc'>
            <p>{localStorage.getItem("description")}</p>
        </div>
    </div>)


    
    
}