import { AiTwotoneDislike, AiFillLike } from 'react-icons/ai'
import likesCount from '../../EventHandler/Like'
import dislikesCount from '../../EventHandler/Dislike'


function LikeDislikeButton({likesUsers,uniqueId,likesNumber,userId}) {
    return (
        <div>
            <div className="flex gap-x-5 justify-content-center my-4">
                <div className="w-full mb-4 sm:w-auto inline-flex items-center justify-center">
                    <div className="text-left">
                        <button onClick={(event) => {
                            setTimeout(() => {
                                window.location.reload();
                            }, 1200);
                            likesCount(event,likesUsers,uniqueId,likesNumber, userId)
                        }} className="ring-1 ring-cyan-400 p-1 rounded-lg">
                            <AiFillLike color="cyan" size="1.7rem" />
                        </button>
                    </div>
                </div>
                <div className="w-full mb-4 sm:w-auto inline-flex items-center justify-center">
                    <div className="text-left">
                        <button onClick={(event) => {
                            dislikesCount(event, likesUsers,uniqueId,likesNumber, userId)
                            setTimeout(() => {
                                window.location.reload();
                            }, 1200);

                        }} className="ring-1 ring-red-400 p-1 rounded-lg">
                            <AiTwotoneDislike color="crimson" size="1.7rem" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LikeDislikeButton