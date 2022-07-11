import db from '../Firebase';
import { updateDoc, doc, arrayUnion } from "firebase/firestore";

const Characters = ['Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj', 
'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr', 'Ss', 'Tt', 'Uu', 'Vv', 'Ww', 'Xx', 'Yy', 'Zz']
const uniqueNumber = Math.floor(Math.random() * 99999999999999)
const uniqueCharacter = Characters[Math.floor(Math.random() * 25)]
const commentId = uniqueCharacter + uniqueNumber

async function commentsEvent(e,commmentInput, uniqueId,username) {
  e.preventDefault();
  const querySnapshot2 = uniqueId

  const newComment = {
    uniqueId:uniqueId,
    comment: commmentInput,
    commentId: commentId,
    username:username,
  }
  const userRef = doc(db, "data", querySnapshot2);
  
  await updateDoc(userRef, {
    comments:arrayUnion(newComment)
  });

}

export default commentsEvent