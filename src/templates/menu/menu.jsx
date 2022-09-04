import './style.css'

export const MyMenu = () => {
    return (
        <div>
        <aside className="menu">
            <div>
                <h1>
                    <img src={require('./logo/logo.png')} alt='logo do site'/>
                    <p>Book-Free</p>
                </h1>

                <nav>
                    <ul>
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#genders">Gêneros</a></li>
                        <li><a href="/books">Livros</a></li>
                        <li><a href='/about'>Sobre</a></li>
                        {
                            localStorage.getItem('logado') === 'true' && (<li><a href='/logado'>Logado</a></li>)
                        }
                        {
                            localStorage.getItem('logado') === 'false' && (<li><a href='/login'>Login</a></li>)
                        }
                        
                    </ul>
                </nav>
            </div>
        </aside>
        </div>
    );
}