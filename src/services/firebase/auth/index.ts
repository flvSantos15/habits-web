import { User, signInWithPopup, GoogleAuthProvider, CustomParameters } from 'firebase/auth'
// import {
//   doc,
//   setDoc,
//   getDocs,
//   getDoc,
//   query,
//   collection,
//   where,
//   updateDoc,
//   serverTimestamp,
//   onSnapshot
// } from 'firebase/firestore'
import { db, auth, googleProvider } from '@/config/firebase'

// const createGoogleAuthProvider = (scopes?: string[], customOAuthParameters?: CustomParameters) => {
//   const provider = new GoogleAuthProvider();
//   // if (scopes) {
//   //   scopes.forEach((scope) => provider.addScope(scope));
//   // }
//   // if (customOAuthParameters) {
//   //   provider.setCustomParameters(customOAuthParameters);
//   // }
  
//   return provider;
// }

export async function signIn() {

  // TODO: preciso redirecionar o usuario no caso de sucesso.
  // TODO: preciso capturar o erro e guardar caso haja.

  return await signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      console.log('user', {
        token,
        user
      })
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log('errors', {
        errorCode,
        errorMessage,
        email,
        credential
      })
      // ...
    });
}
