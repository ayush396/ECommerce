import './form.style.css'
import {useState} from 'react'
import { handleEmailPass } from '../../utils/firebase/firebase.utils';
import Buttons from './button.component';

const SignInForm = () => {
    const records = {
        names:'',
        emails:'',
        passs:'',
        cnfPass:''
    }
const [record,setRecord] = useState(records) ;
const handleChange = (event) =>{
    const displayName=event.target.name;
    const displayValue=event.target.value;
    console.log(displayValue);
    setRecord({...record,[displayName]:displayValue})
    
} 
const handleSubmit = async(event) => {
    console.log(record);
    if (record.cnfPass !== record.passs){
        console.log("Passwords Does'nt Match");
    }

    console.log(record.emails);
    console.log(record.passs);
    try{
        const response1 = await handleEmailPass(record.emails,record.passs)
        console.log(response1);
    }
    catch(err){
        console.log("Error crating the user ",err.message);
    }
 
   
    
}
    return (
        <div>
            <p className='form-heading'>Don't Have An Account</p>
            <p className='sub-heading'>Sign Up with Email & Password</p>
            <form>
               <div>
                    <input id="hi1" type="text" name="names"  required onChange={handleChange}></input><br/>
                    <label for="hi1">Enter Name</label> 
               </div>
               
                <div>
                    <input id="hi2" type="email" name="emails"  required  onChange={handleChange}></input><br/>
                    <label for="hi2">Enter Email</label>
               </div>
               
                <div>
                    <input id="hi3" type="password" name="passs"  onChange={handleChange} required></input><br/>
                    <label for="hi3">Create Password</label>
               </div>
                
                <div>
                    <input id="hi4" type="password" name="cnfPass" onChange={handleChange} required ></input><br/>
                    <label for="hi4">Confirm Password</label>
               </div>
                
                <Buttons types="button" design="but1" valueName="SIGN UP" onClick={handleSubmit}/>
            </form>
        </div>
    )
}
export default SignInForm