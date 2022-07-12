import db from '../Firebase';
import { updateDoc, doc, arrayRemove } from "firebase/firestore";

async function CommentDelete(e, comments, uniqueId,commentId) {
    e.preventDefault();
    const querySnapshot1 = comments
    const querySnapshot2 = uniqueId
    const filtered = querySnapshot1.filter(item => item.mapValue.fields.commentId.stringValue === commentId);

    const removeComment = {
        uniqueId:filtered[0].mapValue.fields.uniqueId.stringValue,
        comment:filtered[0].mapValue.fields.comment.stringValue,
        commentId:filtered[0].mapValue.fields.commentId.stringValue,
        username: filtered[0].mapValue.fields.username.stringValue,
        userId: filtered[0].mapValue.fields.userId.stringValue
    }
    if (filtered.length > 0) {
        const userRef = doc(db, "data", querySnapshot2);
        await updateDoc(userRef, {
            comments: arrayRemove(removeComment)
        });
    }
    else {
        console.log("existing")
    }

}


export default CommentDelete