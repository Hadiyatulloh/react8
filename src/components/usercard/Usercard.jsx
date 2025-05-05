import './usercard.css'
import oka from "../../assets/oka.png"
import korzina from "../../assets/korzinka.png"

function Usercard(props) {
   
  return (
    <div className='usercard' style={{backgroundColor:props.props.bg}}>
        <img className='t' src={oka} alt="" />
        <h2>{props.props.ism}</h2>
        <h3>{props.props.lavozim}</h3>
        <p>{props.props.kasbi}</p>
        <p>{props.props.plaese}</p>
        <button style={{backgroundColor:props.props.btnbg}}><img src={korzina} alt=""/>Add to cart</button>
        </div>
  )
}

export default Usercard
