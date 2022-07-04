import { toPng } from 'html-to-image';

//image download section
const onButtonClick = (ref) => {
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
}


export default onButtonClick