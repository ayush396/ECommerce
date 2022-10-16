import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/Home/home.component';
import SignIn from './routes/signin/signin.component';
function Shop(){
  return(<h1>This is Shop Page</h1>)
}

function Contact(){
  return(<h1>This is Contact Page</h1>)
}
function App() {
  return (
    <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}></Route> 
          <Route path="shop" element={<Shop/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="signIn" element={<SignIn/>}></Route>
        </Route>
    </Routes>
  );
}

export default App;
