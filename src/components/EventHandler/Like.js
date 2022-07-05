import db from '../Firebase';
import { updateDoc, doc, arrayUnion } from "firebase/firestore";
async function likesCount(e,quotes,userId) {
    e.preventDefault();
    const querySnapshot1 = quotes[0]._document.data.value.mapValue.fields.likesUsers.arrayValue.values;
    const querySnapshot2 = quotes[0]._document.data.value.mapValue.fields.uniqueId.stringValue;
    const querySnapshot3 = quotes[0]._document.data.value.mapValue.fields.likes.integerValue;
    const filtered = querySnapshot1.filter(item => item.stringValue === userId)
    if (filtered.length <= 0) {
        const userRef = doc(db, "data", querySnapshot2);
        await updateDoc(userRef, {
            likesUsers: arrayUnion(userId),
            likes: parseInt(querySnapshot3) + 1
        });
    }
    else {
        console.log("existing")
    }

}

export default likesCount