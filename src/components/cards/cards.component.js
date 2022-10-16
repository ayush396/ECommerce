import './cards.styles.css'
const Card = (props) =>{
  const item = props.itemDesc;
    return(
    <div className="itemCard">
      <img src ={item.imageUrl} className="pic" alt=""/>
        <div className='inner'>
          <h2>{item.title}</h2>
          <p style = {{color:'black'}}>Show Now</p>
        </div>
  </div>
  )
}
export default Card;