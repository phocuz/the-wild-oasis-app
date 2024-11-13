
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAAcchAlS2To6xfgMp0s5SrXUPpgpgrsgI",
  authDomain: "the-wild-oasis-b1493.firebaseapp.com",
  projectId: "the-wild-oasis-b1493",
  databaseURL: "https://the-wild-oasis-b1493-default-rtdb.firebaseio.com",
  storageBucket: "the-wild-oasis-b1493.firebasestorage.app",
  messagingSenderId: "350942758951",
  appId: "1:350942758951:web:2af2e740cb4c78e9122602"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };