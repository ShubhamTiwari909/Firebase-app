import db from '../Firebase';
import { updateDoc, doc, arrayUnion } from "firebase/firestore";

const Characters = ['Aa27', 'Bb28', 'Cc29', 'Dd30', 'Ee31', 'Ff31', 'Gg33', 'Hh34', 'Ii35', 'Jj36',
    'Kk37', 'Ll38', 'Mm39', 'Nn40', 'Oo41', 'Pp42', 'Qq42', 'Rr44', 'Ss45', 'Tt46', 'Uu47', 'Vv48', 'Ww49', 'Xx50', 'Yy51', 'Zz52']
const uniqueNumber = Math.floor(Math.random() * 99999999999999)
const uniqueCharacter = Characters[Math.floor(Math.random() * 25)]
const replyId = uniqueCharacter + uniqueNumber

async function commentsReply(e, commentId, replyInput, username,uniqueId,userId) {
    e.preventDefault();
    const querySnapshot2 = uniqueId;
    const newReply = {
        reply: replyInput,
        replyId: replyId,
        commentId: commentId,
        username: username,
        userId: userId
    }
    const userRef = doc(db, "data", querySnapshot2);

    await updateDoc(userRef, {
        replies: arrayUnion(newReply)
    });
}

export default commentsReply