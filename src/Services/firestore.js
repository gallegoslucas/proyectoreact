
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, orderBy, limit} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDDWwXUBPI8dDdpCChrJT6Z4luzqJWQdDE",
    authDomain: "cornicione-c5229.firebaseapp.com",
    projectId: "cornicione-c5229",
    storageBucket: "cornicione-c5229.appspot.com",
    messagingSenderId: "812206777774",
    appId: "1:812206777774:web:b8510dab88b3c40101143f"
};


const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)



export default async function getItems() {
    const colectionProductsRef = collection(DB, "products");

    const documentSnapshot = await getDocs(colectionProductsRef);

    const documentsData = documentSnapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        }
    })
    return documentsData;
}

export  async function getItemsOrdered() {
    const colectionProductsRef = collection(DB, "products");

    const q = query(colectionProductsRef, orderBy("index"), limit(10));


    const documentSnapshot = await getDocs(q);

    const documentsData = documentSnapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        }
    })
    return documentsData;
}

export async function getSingleItem(idParams) {
    
    const docRef = doc(DB, "products", idParams);

    const docSnaphot = await getDoc(docRef);

    return {
        ...docSnaphot.data(),
        id: docSnaphot.id
    }
}

export async function getItemsByCategory(categoryParams) {
    const collectionRef = collection(DB, "products");

    const queryCat = query(collectionRef, where("category", "==", categoryParams))

    const documentSnapshot = await getDocs(queryCat);

    const documentsData = documentSnapshot.docs.map((doc) => {
       
        return {
            ...doc.data(),
            id: doc.id,
        };
    });
    
    return documentsData;
}

export async function createOrder(order) {
    const collectionRef = collection(DB, "orders");
    const docOrder = await addDoc(collectionRef, order);
    return docOrder.id;
}