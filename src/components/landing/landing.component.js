import Card from '../cards/cards.component';
const Landing = (props) =>{
    const items = props.directories;
    return (
    <div>
        {
           items.map((item) => {
             return (<Card itemDesc={item}/>)
           })
        }
    </div>
    )
}
export default Landing;