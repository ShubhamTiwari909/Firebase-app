import db from '../Firebase';
import { updateDoc, doc } from "firebase/firestore";
import { toPng } from 'html-to-image';
//image download section
const onButtonClick = async (ref, quotes) => {
    console.log(quotes)
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

    const querySnapshot1 = quotes[0]._document.data.value.mapValue.fields.downloads.integerValue;
    const querySnapshot2 = quotes[0]._document.data.value.mapValue.fields.uniqueId.stringValue;
    const userRef = doc(db, "data", querySnapshot2);
    await updateDoc(userRef, {
        downloads: parseInt(querySnapshot1) + 1
    });
}


export default onButtonClick