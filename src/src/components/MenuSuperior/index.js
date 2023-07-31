
import btostp from '../../assets/stop.svg';
import btonxt from '../../assets/next.svg';
import btoplay from '../../assets/play.svg';
import btopreviw from '../../assets/previous.svg';
import btopause from '../../assets/pause.svg';
import './style.css';

export default function MenuSuperior (){
    return (
    <div className='todoconteudo'>
        <div className='container'>
            <header className= 'top-menu'>
                <div className='menu'>
                    <div className='botoes'><img src={btonxt} alt='botao next'/></div>
                    <div className='botoes'> <img src={btostp} alt='botao stop'/></div>
                    <div className='botoes'><img src={btoplay} alt='play'/></div>
                    <div className='botoes'><img src={btopreviw} alt='previw'/></div>
                    <div className='botoes'><img src={btopause} alt='pause'/></div>
                </div>
            </header>
            
        </div>
    </div>
    );
}
