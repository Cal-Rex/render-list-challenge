import React from 'react'
import css from '../components/css/Content.module.css'

function PostItem(props) {
  return (
    <div>
        {props.savedPosts.map(savedPost => {
                        return (
                            <div key={savedPost.id} className={css.SearchItem}>
                                <p>{savedPost.type}</p>
                                <p>{savedPost.user}</p>
                                <img src={savedPost.webformatURL}></img>
                                <p>{savedPost.tags}</p>
                            </div>
                        )
        })}
    </div>
  )
}

export default PostItem