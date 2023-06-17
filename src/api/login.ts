
import { auth } from "../firebase/client.tsx";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const goolgeLogin = function () {

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then(user => {
            alert("success : " + user.user.displayName + "さんでログインしました");
            console.table(user);
        })
        .catch(error => {
            alert(error.message);
        });
}

export default goolgeLogin;
