import './style.css'
import play from '../../assets/play.svg';
import perfil from '../../assets/perfil.jpg';
import Cards from '../Cards';
import Controle from '../BarradeControle';
import { musics } from '../../musics';
import {useRef, useState, } from 'react'





export default function PaginaPrinciPal (){
    const [musicaAtual, setMusicaatual]=useState({title:'',artist:'' ,},musics[0])
    
    
    const audioRef= useRef(null)
    
   
    return (
        <div className='texto'>
                
                <div className='pagina-principal' >
            
                    <header>
                    
                        <div className='cubos-play'>
                             <h3 id='texto1'>CUBOS</h3>
                             <img id='play'src={play} alt='simbolo play'/>
                             <h3 id='texto2'>PLAY</h3>
                        </div>
                    
                        <div className='perfil'>
                            <img src={perfil} alt='foto de perfil'/>
                            <h5>Bem Vindo, Ronaldo Costa.</h5>
                        </div>
                    
                    </header>
                    <div className='titulo'>
                        <h3>The best play list</h3>
                    <div className='linha-horizontal'>
                 

                    </div>

                    </div>
                    
                    
                    
                    
                    
                    <main>

                   
                        <div className='card'>
                            {musics.map((music,index)=>
                            <Cards 
                            setMusicaatual={setMusicaatual}
                            key={index}
                            title={music.title}
                            artist={music.artist}
                            description={music.description}
                            url={music.url}
                            cover={music.cover}
                            audioRef={audioRef}
                            music={music}/>)}
                            

                            
                        </div>
                       
                    </main>
            
                     <footer className='footer'>
                        <div className='musica-no-play'>
                            <Controle
                            title= {musicaAtual.title}
                            artist={musicaAtual.artist}
                            url={musicaAtual.url}
                            audioRef={audioRef}
                            musics={musics}
                            musicaAtual={musicaAtual}
                            setMusicaatual={setMusicaatual}
                            >
                            </Controle>
                        </div>
                        
                        

                     </footer>
                </div>
        </div>
    );
    
}
;