import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCTj1TA2lUQJUw20b7yfKjyqh2c5zgfrmY",
  authDomain: "auth-a1122.firebaseapp.com",
  projectId: "auth-a1122",
  storageBucket: "auth-a1122.appspot.com",
  messagingSenderId: "254457770829",
  appId: "1:254457770829:web:c352bfe4c2bca54261bd04"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider();
export {auth,provider};