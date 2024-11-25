import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = () => {
    return auth.signOut();
};
//export const doPasswordReset = (email) => {
 //   return sendPasswordResetEmail(auth, email);
//};
//export const doPasswordChange = (password) => {
 //   return updatePassword(auth,updateCurrentUser, password);
//};
//export const doSendEmailVerification = () => {
//    return sendEmailVerification(auth.currentUser, {
//        url: ${window.location.origin}/home ,
//    });
//} 