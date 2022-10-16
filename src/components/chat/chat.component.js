import './chat.styles.css'

const Chat = () =>{
    const myOverFunction=(event)=>{
        let shad=document.getElementById('shad2')
        shad.style.visibility='visible';
        // shad.style.transitionProperty("visibility");
        // shad.style.transitionDuration = "1s";
    }
    const myOverFunction2=(event)=>{
        let shad=document.getElementById('shad2')
        shad.style.visibility='hidden';

    }
    return (
        <div>
            <div className='borders' onMouseOver={myOverFunction} onMouseOut={myOverFunction2}>
                <img src = "chat.jpg" className="set" alt=""/>
            </div>
            <div className="shad" >
                <div className="shadowBox" id='shad2'></div>
            </div>
            
        </div>
        
    )
}
export default Chat