import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCh7FSBE3TZuF9WI0kgBBtpIIVTPTuJxFg",
  authDomain: "my-aio94382.firebaseapp.com",
  projectId: "my-aio94382",
  storageBucket: "my-aio94382.appspot.com",
  messagingSenderId: "762188311827",
  appId: "1:762188311827:web:631c310cda3b5db5e2fee6",
  measurementId: "G-LCEWQZ49TZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
