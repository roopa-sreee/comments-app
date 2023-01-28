// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteComment, toggleIsLiked} = props
  const {id, name, comment, isLiked, time, initialClassName} = commentDetails

  const onClickDelete = () => {
    deleteComment(id)
  }

  const onClickLikeIcon = () => {
    toggleIsLiked(id)
  }

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeImageAlt = isLiked ? 'liked' : 'like'

  return (
    <>
      <li className="comment-container">
        <div className="initial-container">
          <span className={initialClassName}>{name[0]}</span>
        </div>
        <p className="name">{name}</p>
        <p className="time">{time}</p>
        <p className="comment">{comment}</p>
        <div className="like-delete-container">
          <button
            className="like-button"
            type="button"
            onClick={onClickLikeIcon}
          >
            <img src={likeImageUrl} alt={likeImageAlt} />
            Like
          </button>
          <button
            className="delete-button"
            type="button"
            onClick={onClickDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              onClick={onClickDelete}
            />
          </button>
        </div>
      </li>
    </>
  )
}

export default CommentItem
