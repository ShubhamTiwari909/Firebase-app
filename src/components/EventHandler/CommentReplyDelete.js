import db from '../Firebase';
import { updateDoc, doc, arrayRemove } from "firebase/firestore";

async function CommentReplyDelete(e, replies, uniqueId,replyId) {
    e.preventDefault();
    const querySnapshot1 = replies
    const querySnapshot2 = uniqueId
    const filtered = querySnapshot1.filter(item => item.mapValue.fields.replyId.stringValue === replyId);

    const removeComment = {
        reply:filtered[0].mapValue.fields.reply.stringValue,
        commentId:filtered[0].mapValue.fields.commentId.stringValue,
        replyId:filtered[0].mapValue.fields.replyId.stringValue,
        username: filtered[0].mapValue.fields.username.stringValue,
    }
    if (filtered.length > 0) {
        const userRef = doc(db, "data", querySnapshot2);
        await updateDoc(userRef, {
            replies: arrayRemove(removeComment)
        });
    }
    else {
        console.log("existing")
    }

}


export default CommentReplyDelete