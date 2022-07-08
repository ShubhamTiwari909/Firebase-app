import db from '../Firebase';
import { updateDoc, doc, arrayRemove } from "firebase/firestore";

async function dislikesCount(e, likesUsers, uniqueId, likes, userId) {
    e.preventDefault();
    const querySnapshot1 = likesUsers
    const querySnapshot2 = uniqueId
    const querySnapshot3 = likes
    const filtered = querySnapshot1.filter(item => item.stringValue === userId);

    if (filtered.length > 0) {
        const userRef = doc(db, "data", querySnapshot2);
        await updateDoc(userRef, {
            likesUsers: arrayRemove(userId),
            likes: parseInt(querySnapshot3) - 1
        });
    }
    else {
        console.log("existing")
    }

}


export default dislikesCount