import Buttons from "../../components/signup form/button.component";
import SignInForm from "../../components/signup form/form.component";
import { GoogleSignIn,createUserInDb, signinCred } from "../../utils/firebase/firebase.utils" 
import '../signin/sigin.style.css'
import {useState} from 'react'

const credentials={
    customEmail:'',
    customPassword:''
}

const SignIn = ()=>{
   
    
    const googleSignIn=async()=>{
       await GoogleSignIn()
        resetFormFiels();      
    }
    
    const [credential,setCredentials]=useState(credentials);
   
    const customHandleSignIn = (event) =>{
        const req=event.target.name;
        console.log(req);
        const reqValue=event.target.value;

        setCredentials({...credential, [req]:reqValue})
    }
    const resetFormFiels = () =>{
        setCredentials(credentials);
    }
    const SubmitCredentials = async(event)=>{
  
        try{
            console.log(credential.customEmail);
            console.log(credential.customPassword);
            const {user} = await signinCred(credential.customEmail,credential.customPassword)
            
            // setCurrentUser(user)
            resetFormFiels();

            const ref=await createUserInDb(user)
            console.log(ref);
           
        }catch(error){
            console.log("Unsuccessful Login");
        }
        
    }
    return(
        <div >
            <div className="boxlayout">
                <p className='form-heading'>I Already Have An Account</p>
                <p className='sub-heading'>Sign in with your email & password</p>
                <div>
                <form onSubmit={SubmitCredentials}>
                    <div>
                        <input type="email" name ="customEmail" required onChange={customHandleSignIn}></input>
                        <label className="labelAdjust">Enter Email</label>
                    </div>
                    <div>
                        <input type="password" name="customPassword"required onChange={customHandleSignIn}></input>
                        <label className="labelAdjust">Enter Password</label>
                    </div>
                </form>
                    <Buttons types="submit" design="but" valueName="Sign In" onClick={SubmitCredentials}/>
                    <Buttons types="button" design=" inverted" valueName="Google Sign In" onClick={googleSignIn}/>
                </div>
               
            </div>
            <div className="boxlayout1">
                <SignInForm/>
            </div>
            
        </div>
        
    );
}
export default SignIn