import db from '../Firebase';
import { setDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify';

const SaveData = async (e,uniqueId,userId,name,title,description,quoteCategory,date,navigation) => {
    e.preventDefault();
    try {
        // Add data to the store
        const docRef = doc(db, "data", uniqueId)
        await setDoc(docRef, {
            userId: userId,
            Name: name,
            Title: title.toUpperCase(),
            Description: description,
            QuoteCategory: quoteCategory,
            date: date,
            uniqueId: uniqueId
        });
        toast.success("Task added successfully", { theme: "dark" })
        navigation('/home')
    }
    catch (err) {
        console.log(err);
    }
}

export default SaveData