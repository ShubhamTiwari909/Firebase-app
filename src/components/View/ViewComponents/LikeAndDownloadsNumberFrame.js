import { FcLike } from 'react-icons/fc'
import { AiOutlineCloudDownload } from 'react-icons/ai'

function LikeAndDownloadsNumberFrame({likesNumber,downloadsNumber}) {
  console.log(likesNumber,downloadsNumber)
  return (
    <div>
      <div className="flex justify-between mx-3">
        <div className="flex space-x-2 md:space-x-3">
          <FcLike size="1.5rem" />
          <p className="text-slate-200">{likesNumber}</p>
        </div>
        <div className="flex space-x-2 md:space-x-3">
          <AiOutlineCloudDownload size="1.5rem" color="white" />
          <p className="text-slate-200">{downloadsNumber}</p>
        </div>
      </div>
    </div>
  )
}

export default LikeAndDownloadsNumberFrame