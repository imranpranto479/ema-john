import { useState,useEffect } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase=()=>{
  //ekhane jodi amra log in kori firebase er maddhome, tahole amake jante hobe je ke login hoise na hoise. E jonno amra ekta state declare kore felbo.karon user log in hoite pare nao hoite pare. Mane at least eitar state ta kintu change hocche tai amra ekta useState ke niye ashbo.

  const [user,setUser]=useState({});
  const auth= getAuth();
  const googleProvider=new GoogleAuthProvider();
  const signInUsingGoogle=()=>{
    return signInWithPopup(auth,googleProvider)
  
  }
  const logOut=()=>{
    signOut(auth)
    .then(()=>{
      //er vitore kichu chaile korte pari na korleo chole, but state ta update hoye jawar kotha arki.
      setUser({})

    })
  }
  //observe whether user auth state changed or not
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //jokhon amader state ta change hobe tokhon amra jeta korbo sheta hocche setUser diye user ke set kore dibo.
        setUser(user)
        // ...
      } 
    });
  },[])
  //useFirebase() theke ami kichu jinish return korte chai. Jehetu amra onek jinish return korte chai, tai amra ekta object delcare korbo.

  return {
    //ekhane amader return korte hobe user take. Jodi ami user take pete chai.
   user,
   //signInUsingGoogle ke toh ami login er jayga theke use korte chai tai eita keo ami return korbo.
   signInUsingGoogle,
   logOut,

  }
}
//export korar time e kintu function ke call korbo na, just function er name ta dibo.
export default useFirebase;