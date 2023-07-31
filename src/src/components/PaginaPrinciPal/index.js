import './style.css'
import play from '../../assets/play.svg';
import perfil from '../../assets/perfil.jpg';
import card from '../Cards'


export default function PaginaPrinciPal (){
    return (
        <div className='texto'>
                <div className='player'><h3>Cubos Player</h3></div>
                <div className='pagina-principal' >
            
                    <header>
                    
                        <h3 id='texto1'>CUBOS</h3>
                        <img id='play'src={play} alt='simbolo play'/>
                        <h3 id='texto2'>PLAY</h3>
                    
                    <div className='perfil'>
                        <img src={perfil} alt='foto de perfil'/>
                        <h5>Bem Vindo, Ronaldo Costa.</h5>
                    </div>
                    
                    </header>
            
                    <div className='linha-horizontal'>

                    </div>
       
                    <main>
                    {card}
                    </main>
            
                     <div className='barra-controle'>

                     </div>
                </div>
        </div>
    );
    
}
;