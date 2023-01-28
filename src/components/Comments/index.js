import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isFavorite}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const updatedComments = commentsList.filter(
      eachComment => eachComment.id !== id,
    )

    this.setState({commentsList: updatedComments})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      time: formatDistanceToNow(new Date()),
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList} = this.state

    return (
      <div className="app-container">
        <div className="home-container">
          <h1 className="heading">Comments</h1>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comments-image"
              alt="comments"
            />
          </div>
          <div className="comments-container">
            <div className="input-container">
              <p className="text">Say something about 4.0 Technologies</p>
              <input
                placeholder="Your Name"
                type="text"
                className="name-input"
                onChange={this.onChangeName}
              />
              <textarea
                name="textarea"
                rows="5"
                cols="40"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
              >
                Your Comment
              </textarea>
              <button
                className="add-comment-button"
                type="button"
                onClick={this.onAddComment}
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
        <div className="comments-list-container">
          <p className="no-of-comments">
            <span className="total-comments">{commentsList.length}</span>
            Comments
          </p>
          <ul className="comments-list">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                deleteComment={this.deleteComment}
                toggleIsLiked={this.toggleIsLiked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
