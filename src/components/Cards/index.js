import './style.css';
import {musics} from '../../musics'
import Controle from '../BarradeControle';





  

export default function Cards ({title, artist, description, cover, setMusicaatual,url,audioRef,music}) {
   function alTerandonomeArtista (){
    
    setMusicaatual({title,artist,url})
    audioRef.current.src=music.url
    audioRef.current.play()
    
   }
  
  return (
       
            <div className='cards' onClick={()=>alTerandonomeArtista()}>
            
              
                <div className='user-card'>
                  <img className='capa-album'src={cover}alt='Capa album musical'/>
                  <strong>{title}</strong>
                  <span>{description}</span>
              
                </div> 

                
                

            </div>   

            


           
        
    )
}