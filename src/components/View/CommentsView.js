import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaComments } from 'react-icons/fa'
import { AiOutlineSend } from 'react-icons/ai'
import { MdDeleteForever } from 'react-icons/md'
import commentsEvent from '../EventHandler/Comments'
import commentsReply from '../EventHandler/CommentReply'
import CommentDelete from '../EventHandler/CommentDelete'
import CommentReplyDelete from '../EventHandler/CommentReplyDelete'
import './CommentsView.css'
function CommentsView({ uniqueId, username, userId }) {
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
          <input type="text" className="p-1 border-b-2 rounded border-slate-700 text-indigo-700 focus:outline-none
          w-32 md:w-52"
            value={commentInput} onChange={e =>
              setCommentInput(e.target.value)
            } />
          <button><AiOutlineSend size="1rem" color="indigo" onClick={(event) => {
            commentsEvent(event, commentInput, uniqueId, username, userId)
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
                  comment._document.data.value.mapValue.fields.comments.arrayValue.values?.filter(value => {
                    return value.mapValue.fields.uniqueId.stringValue === uniqueId
                  }).map(value => {
                    return (
                      <div key={value.mapValue.fields.commentId.stringValue} className="my-3 bg-slate-200 rounded-md p-2">
                        <p className="text-left font-bold text-xs pl-2 mb-2">{value.mapValue.fields.username.stringValue}</p>
                        <p className="text-left text-md pl-2">{value.mapValue.fields.comment.stringValue}</p>

                        <div className="collapse space-y-2 my-3" id={`replies${value.mapValue.fields.commentId.stringValue}`}>
                          {comment._document.data.value.mapValue.fields.replies.arrayValue.values
                            && comment._document.data.value.mapValue.fields.replies.arrayValue.values?.filter(item => {
                              return value.mapValue.fields.commentId.stringValue === item.mapValue.fields.commentId.stringValue
                            }).map(item => {
                              return (
                                <div className="bg-slate-700 text-slate-100 text-md text-center p-1 rounded-md"
                                  key={item.mapValue.fields.replyId.stringValue}>
                                  <p className="text-xs text-left px-2 mb-2">
                                    {item.mapValue.fields.username.stringValue !== "" ? item.mapValue.fields.username.stringValue : ""}
                                  </p>
                                  <p className="text-left pl-2">{item.mapValue.fields.reply.stringValue}</p>
                                  <div className="collapse flex space-x-3 my-2" id={`reply${item.mapValue.fields.replyId.stringValue}`}>
                                    <input type="text" className="p-1 border-b-2 rounded border-slate-700 text-indigo-700 focus:outline-none
                                w-32 md:w-48"
                                      value={replyInput} onChange={e =>
                                        setReplyInput(e.target.value)
                                      } />
                                    <button><AiOutlineSend size="1rem" color="cyan" onClick={(event) => {
                                      commentsReply(event, value.mapValue.fields.commentId.stringValue, replyInput, username, uniqueId, userId)
                                      setTimeout(() => {
                                        window.location.reload();
                                      }, 1200);
                                    }} /></button>
                                  </div>
                                  <div className="flex justify-end space-x-3 mt-2 pr-3">
                                    <button type="button" data-bs-toggle="collapse" data-bs-target={`#reply${item.mapValue.fields.replyId.stringValue}`}
                                      aria-expanded="false" aria-controls="collapseExample"
                                      className="font-bold my-2 text-xs text-right text-violet-300">
                                      reply
                                    </button>
                                    <button className={`font-bold my-2 text-xs text-right
                                     ${item.mapValue.fields.userId.stringValue === userId ? 'block' : 'hidden'}`}
                                      onClick={(event) => {
                                        CommentReplyDelete(event, comment._document.data.value.mapValue.fields.replies.arrayValue.values,
                                          comment._document.data.value.mapValue.fields.uniqueId.stringValue,
                                          item.mapValue.fields.replyId.stringValue)
                                        setTimeout(() => {
                                          window.location.reload();
                                        }, 1200);
                                      }}>
                                      <MdDeleteForever color="crimson" size="1rem" />
                                    </button>
                                  </div>
                                </div>)
                            })}
                        </div>
                        <div className="collapse flex space-x-3 my-2" id={`reply${value.mapValue.fields.commentId.stringValue}`}>
                          <input type="text" className="p-1 border-b-2 rounded border-slate-700 text-indigo-700 focus:outline-none
                                w-28 md:w-44"
                            value={replyInput} onChange={e =>
                              setReplyInput(e.target.value)
                            } />
                          <button><AiOutlineSend size="1rem" color="cyan" onClick={(event) => {
                            commentsReply(event, value.mapValue.fields.commentId.stringValue, replyInput, username, uniqueId,userId)
                            setTimeout(() => {
                              window.location.reload();
                            }, 1200);
                          }} /></button>
                        </div>
                        <div className="flex justify-center space-x-3 mt-2">
                          <button type="button" data-bs-toggle="collapse" data-bs-target={`#reply${value.mapValue.fields.commentId.stringValue}`}
                            aria-expanded="false" aria-controls="collapseExample"
                            className="font-bold my-2 text-xs text-right">
                            reply
                          </button>
                          <button className={`font-bold my-2 text-xs text-right
                          ${value.mapValue.fields.userId.stringValue === userId ? 'block' : 'hidden'}`}
                            onClick={(event) => {
                              CommentDelete(event, comment._document.data.value.mapValue.fields.comments.arrayValue.values,
                                comment._document.data.value.mapValue.fields.uniqueId.stringValue, value.mapValue.fields.commentId.stringValue)
                              setTimeout(() => {
                                window.location.reload();
                              }, 1200);
                            }}>
                            <MdDeleteForever color="crimson" size="1rem" />
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