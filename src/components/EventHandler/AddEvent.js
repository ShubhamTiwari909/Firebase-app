import db from '../Firebase';
import { setDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify';


const SaveData = async (e,username,uniqueId,userId,name,title,description,quoteCategory,date,navigation,likes,likesUsers,downloads,comments,replies) => {
    e.preventDefault();
    try {
        // Add data to the store
        const docRef = doc(db, "data", uniqueId)
        await setDoc(docRef, {
            username:username,
            userId: userId,
            Name: name,
            Title: title.toUpperCase(),
            Description: description,
            QuoteCategory: quoteCategory,
            date: date,
            likes:likes,
            likesUsers:likesUsers,
            downloads:downloads,
            comments:comments,
            replies:replies,
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