import { createContext,useEffect,useState} from "react";
import { authStateListener, createUserInDb } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null,
});

export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    const val ={currentUser,setCurrentUser}
    
    useEffect(()=>{
        const unsubscribe=authStateListener((user)=>{
            console.log(user);
            if(user){
                const ref=createUserInDb(user);
                console.log(ref);
            }
            setCurrentUser(user);
        })
        return unsubscribe;
    },[])
    
    return <UserContext.Provider value={val}>{children}</UserContext.Provider>
}