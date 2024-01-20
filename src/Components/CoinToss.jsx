import { useState } from "react"
import headImg from '../Assets/head.jpg'
import tailImg from '../Assets/tail.jpg'
import '../Styles/CoinToss.css'
function CoinToss(){
    const [head, setHead] = useState(false)
    const [tossing, setTossing] = useState(false)
    
    function handleClick() {
        setTossing(true)
        const num = Math.floor(Math.random()*2)
        if(num === 0) setHead(false)
        else setHead(true)

        setTimeout(() => {
            setTossing(false)
        }, 1000)


    }

    return(
        <div className="CoinToss">
            <img src={ head === true ?  headImg : tailImg } className={tossing ? 'tossing' : ''} alt="coin"  />
            <button onClick={handleClick} disabled={tossing}>{tossing === true ? 'Tossing...' : 'Toss'}</button>
        </div>
    )
}

export default CoinToss