import db from '../Firebase';
import { updateDoc, doc, arrayUnion } from "firebase/firestore";
async function likesCount(e,likesUsers,uniqueId,likes,userId) {
    e.preventDefault();
    const querySnapshot1 = likesUsers
    const querySnapshot2 = uniqueId
    const querySnapshot3 = likes
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