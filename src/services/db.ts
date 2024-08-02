import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import FIREBASE_CONFIG from "../utils/firebase-config";

const app = initializeApp(FIREBASE_CONFIG);
const db = getFirestore(app);

export default db;
export * from "firebase/firestore";
