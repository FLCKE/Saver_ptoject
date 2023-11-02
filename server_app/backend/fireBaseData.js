import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'
const firebaseconf = {
    apiKey: "AIzaSyAuCJLoKxAeDkm77LCbC9yfauz61YWS58c",
    authDomain: "saver-576fc.firebaseapp.com",
    projectId: "saver-576fc",
    storageBucket: "saver-576fc.appspot.com",
};
const app = initializeApp(firebaseconf);
const storage = getStorage(app);