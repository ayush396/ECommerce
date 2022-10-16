import Landing from '../../components/landing/landing.component';
import Chat from '../../components/chat/chat.component';

const itemDictionary = [
    {id:1,title:'Electronics', imageUrl: "https://media.istockphoto.com/photos/set-of-home-kitchen-appliances-in-the-room-on-the-wall-background-picture-id1196974664?k=20&m=1196974664&s=612x612&w=0&h=9PNuGOYbsj7J2DTPA8J6kTJUoRHKHLAyUmhRgCdYXVE="},
    
    {id:2,title:'Sneakers',imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"},
    {id:3,title:'Men', imageUrl: "https://i.ibb.co/R70vBrQ/men.png"},
  
    {id:4,title:'Women',imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"},
    {id:5,title:'Jackets',imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"},
    {id:6,title:'Hats',imageUrl: "https://i.ibb.co/cvpntL1/hats.png"}
    
  ];
const Home =()=>{
    return (
        <div>
            <Landing directories = {itemDictionary }/>
            <Chat/>
        </div>
    )
}
export default Home;