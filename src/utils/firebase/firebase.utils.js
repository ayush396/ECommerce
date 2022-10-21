import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,signInWithPopup,getAuth,createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc,collection, query, getDocs} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBrCsaQnQJUGyFMaMaT4_3TtcMO7wS44iw",
  authDomain: "newecommerce-25c67.firebaseapp.com",
  projectId: "newecommerce-25c67",
  storageBucket: "newecommerce-25c67.appspot.com",
  messagingSenderId: "586995341457",
  appId: "1:586995341457:web:1067a7163338f1d3ca8730"
};


export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth()
const db = getFirestore();
export const GoogleSignIn=()=>signInWithPopup(auth,provider);

export const createUserInDb = async (response)=>{
    const collectionRef = collection(db,'users');
    const docRef = doc(collectionRef,response.uid)
    const userSnapshot = await getDoc(docRef)
    if(!userSnapshot.exists()){
        const {displayName,email} = response
        const createdAt = new Date();
        try{
            await setDoc(docRef,{displayName,email,createdAt});
        }catch(error){
            console.log('error occured due to',error.message);
        }
        
    }
    return docRef;
}
export const handleEmailPass = async (email,password)=>{
    return await createUserWithEmailAndPassword(auth,email,password);
}
export const signinCred = async(email,pass)=>{
    if(!email || !pass)return 
    return await signInWithEmailAndPassword(auth,email,pass);
}
export const UserSignOut = async()=>{
    await signOut(auth);
}

export const authStateListener = (callback) =>{
    return onAuthStateChanged(auth,callback)
}

export const addCollections = async(collectionName,objectToAdd)=>{
    const collectionRef=collection(db,collectionName);
    // const batch = writeBatch(db);
    console.log("In Database")
    objectToAdd.forEach(async(object)=>{
        const docRef = doc(collectionRef,object.title.toLowerCase())
        console.log(object.items);
        try{
            await setDoc(docRef,object)
            // await setDoc(docRef,{items:object.items})
        }catch(err){
            console.log("Error Occured!!!")
        };
    })
    // await batch.commit()
}

export const getCollections = async()=>{
    const collectionRef = collection(db,'categories');
    const Query=query(collectionRef)
    // console.log(Query);
    const Documents = await getDocs(Query)
    const categoryMap={}
    Documents.forEach((Doc)=>{
        categoryMap[Doc.data().title.toLowerCase()]=Doc.data().items
        
    })
    return categoryMap
    
}