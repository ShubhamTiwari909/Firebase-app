import db from '../Firebase';
import { updateDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify';


const UpdateData = async (e,objectId,name,title,description,date,quoteCategory,navigation) => {
    e.preventDefault()
    try {
        const userRef = doc(db, "data", objectId.id);
        await updateDoc(userRef, {
            Name: name,
            Title: title.toUpperCase(),
            Description: description,
            date: date,
            QuoteCategory: quoteCategory
        });
        toast.success("Task Updated successfully", { theme: "dark" })
        navigation('/profile')
    }
    catch (err) {
        console.log(err);
    }
}


export default UpdateData