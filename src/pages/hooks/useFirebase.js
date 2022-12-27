// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { useEffect, useState } from "react";
// import app from "../Firebase.config";

// const useFirebase = () => {
//   const [user, setUser] = useState({});
//   const auth = getAuth(app);
//   const googleProvider = new GoogleAuthProvider();

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uid = user.uid;
//       } else {
//       }
//     });
//   }, []);

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         // Sign-out successful.
//       })
//       .catch((error) => {
//         // An error happened.
//       });
//   };

//   const signInGoogle = () => {
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//   };
//   return { signInGoogle, user, handleSignOut };
// };
// export default useFirebase;
