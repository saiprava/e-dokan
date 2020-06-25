import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyASOFW8Q81gyMcs5IQPTPsJb1ubCj6VGOo",
    authDomain: "e-dokan-8feee.firebaseapp.com",
    databaseURL: "https://e-dokan-8feee.firebaseio.com",
    projectId: "e-dokan-8feee",
    storageBucket: "e-dokan-8feee.appspot.com",
    messagingSenderId: "472611804800",
    appId: "1:472611804800:web:1f1599108c5e066f407865",
    measurementId: "G-LLX1YE1E9V"
};

export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName , email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;