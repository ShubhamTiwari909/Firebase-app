import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaComments } from 'react-icons/fa'
import { AiOutlineSend } from 'react-icons/ai'
import commentsEvent from '../EventHandler/Comments'
import commentsReply from '../EventHandler/CommentReply'
import './CommentsView.css'
function CommentsView({ uniqueId, username }) {
  const [commentInput, setCommentInput] = useState("")
  const [replyInput, setReplyInput] = useState("")
  const [openComments, setOpenComments] = useState(false)
  const isOpenComments = () => setOpenComments(!openComments)
  const quotes = useSelector(state => state)

  return (
    <div>
      <button onClick={isOpenComments}>
        <FaComments size="1.4rem" color="gray" />
      </button>
      <div className={`${openComments ? 'block' : 'hidden'} bg-white p-3 rounded-md h-52 overflow-auto commentSection space-y-2`}>
        <div className="flex space-x-3">
          <input type="text" className="p-1 rounded-md border-indigo-100 bg-indigo-700 text-white 
          w-32 md:w-52"
            value={commentInput} onChange={e =>
              setCommentInput(e.target.value)
            } />
          <button><AiOutlineSend size="1rem" color="indigo" onClick={(event) => {
            commentsEvent(event, commentInput, uniqueId, username)
            setTimeout(() => {
              window.location.reload();
            }, 1200);
          }} /></button>
        </div>
        {
          quotes && quotes?.map((comment) => {
            return (
              <div key={comment._document.data.value.mapValue.fields.uniqueId.stringValue} className="bg-white p-1.5 text-slate-800 rounded-md break-words">
                <div>{comment._document.data.value.mapValue.fields.comments.arrayValue.values && 
                comment._document.data.value.mapValue.fields.comments.arrayValue.values?.map(value => {
                  return (
                    <div key={value.mapValue.fields.commentId.stringValue} className="my-3 bg-slate-200 rounded-md p-2">
                      <p className="text-left font-bold text-xs pl-2 mb-2">{value.mapValue.fields.username.stringValue}</p>
                      <p className="text-left text-md pl-2">{value.mapValue.fields.comment.stringValue}</p>

                      <div className="collapse space-y-2 my-3" id={`replies${value.mapValue.fields.commentId.stringValue}`}>
                        { comment._document.data.value.mapValue.fields.replies.arrayValue.values
                         && comment._document.data.value.mapValue.fields.replies.arrayValue.values?.filter(item => {
                          return value.mapValue.fields.commentId.stringValue === item.mapValue.fields.commentId.stringValue
                         }).map(item => {
                          return (
                            <div className="bg-slate-700 text-slate-100 text-md text-center p-1 rounded-md"
                              key={item.mapValue.fields.replyId.stringValue}>
                              <p className="text-xs text-left px-2 mb-2">
                                {item.mapValue.fields.username.stringValue !== "" ? item.mapValue.fields.username.stringValue : ""}
                              </p>
                              <p>{item.mapValue.fields.reply.stringValue}</p>
                              <div className="collapse flex space-x-3 my-2" id={`reply${item.mapValue.fields.replyId.stringValue}`}>
                                <input type="text" className="p-1 rounded-md border-indigo-100 bg-indigo-200 text-white 
                                w-28 md:w-44"
                                  value={replyInput} onChange={e =>
                                    setReplyInput(e.target.value)
                                  } />
                                <button><AiOutlineSend size="1rem" color="cyan" onClick={(event) => {
                                  commentsReply(event, value.mapValue.fields.commentId.stringValue,replyInput, username, uniqueId)
                                  setTimeout(() => {
                                    window.location.reload();
                                  }, 1200);
                                }} /></button>
                              </div>
                              <div>
                                <button type="button" data-bs-toggle="collapse" data-bs-target={`#reply${item.mapValue.fields.replyId.stringValue}`}
                                  aria-expanded="false" aria-controls="collapseExample"
                                  className="font-bold my-2 text-xs text-right">
                                  reply
                                </button>
                              </div>
                            </div>)
                        })}
                      </div>
                      <div className="collapse flex space-x-3 my-2" id={`reply`}>
                        <input type="text" className="p-1 rounded-md border-indigo-100 bg-indigo-200 text-white 
                                w-28 md:w-44"
                          value={replyInput} onChange={e =>
                            setReplyInput(e.target.value)
                          } />
                        <button><AiOutlineSend size="1rem" color="cyan" onClick={(event) => {
                          commentsReply(event, value.mapValue.fields.commentId.stringValue,replyInput, username, uniqueId)
                          setTimeout(() => {
                            window.location.reload();
                          }, 1200);
                        }} /></button>
                      </div>
                      <div>
                        <button type="button" data-bs-toggle="collapse" data-bs-target={`#reply`}
                          aria-expanded="false" aria-controls="collapseExample"
                          className="font-bold my-2 text-xs text-right">
                          reply
                        </button>
                      </div>
                      <button type="button" data-bs-toggle="collapse" data-bs-target={`#replies${value.mapValue.fields.commentId.stringValue}`}
                        aria-expanded="false" aria-controls="collapseExample"
                        className="font-bold my-2 text-xs text-right">
                        view replies
                      </button>
                    </div>
                  )
                })}</div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default CommentsView