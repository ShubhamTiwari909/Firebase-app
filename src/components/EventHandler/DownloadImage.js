import db from '../Firebase';
import { updateDoc, doc } from "firebase/firestore";
import { toPng } from 'html-to-image';
//image download section
const onButtonClick = async (ref, downloads,uniqueId) => {
    if (ref.current === null) {
        return
    }
    toPng(ref.current)
        .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = 'Quotes.png'
            link.href = dataUrl
            link.click()
        })
        .catch((err) => {
            console.log(err)
        })
    
    const userRef = doc(db, "data", uniqueId);
    await updateDoc(userRef, {
        downloads: parseInt(downloads) + 1
    });
}


export default onButtonClick