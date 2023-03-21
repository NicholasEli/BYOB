import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
export const firebaseConfig = {
	apiKey: 'AIzaSyDtNKCzz4ZI4nfXCrg4QRfPBZhIdDQCh20',
	authDomain: 'besace-f12e3.firebaseapp.com',
	projectId: 'besace-f12e3',
	storageBucket: 'besace-f12e3.appspot.com',
	messagingSenderId: '785162609910',
	appId: '1:785162609910:web:0b30aa393af60265cb38d7',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
