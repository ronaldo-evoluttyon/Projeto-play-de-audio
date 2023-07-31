import './style.css';

import btostop from '../../assets/stop.svg';
import btoprevious from '../../assets/previous.svg';
import btopause from '../../assets/pause.svg';
import btonext from '../../assets/next.svg';

                            
export default function Controle({title, artist, url, audioRef, musics,musicaAtual,setMusicaatual}){
    
    function handlesTop (){
        audioRef.current.currentTime=0;
        audioRef.current.pause();
    }
    
    
    
    function Pause (){
        if(musicaAtual){
            audioRef.current.play()
        }else{
            audioRef.current.pause()
        }
       
    

    }
    function Play (){
        audioRef.current.pause()
    }
    


    
    return (
        <div className='menu'>
        
            <div className='musica-no-player'>
                <h3>{title}</h3>
                <h5>{artist}</h5>
            </div> 

            <div className='controle'>
                <div className='bto stop'>
                    
                        <img src ={btostop} alt='botao stop' onClick={()=>handlesTop()}/>
                    
                </div>

                <div className='bto previous' >
                    
                        <img src={btoprevious} alt='botao previous'/>
                    
                </div>

                <div className='bto-pause'>
                    
                        {musicaAtual ? <img src={btopause} alt='botao pause'onClick={()=>Pause()}/>:
                        <img src={btopause} alt='botao pause'onClick={()=>Play()}/>}
                    
                </div>

                <div className='bto next' >
                    
                        <img src={btonext} alt='botao next'/>
                    
                </div>
                <div className='progresso'>
                <audio 
                ref={audioRef}>
	                Seu navegador não suporta áudio tag.
                </audio>
                </div>

            </div>


        </div>
    )

}