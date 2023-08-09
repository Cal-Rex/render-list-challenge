import React from 'react'
import css from '../components/css/Content.module.css'

function PostItem(props) {
  return (
    <div>
        {props.savedPosts.map(savedPost => {
                        return (
                            <div key={savedPost.title} className={css.SearchItem}>
                                <p>{savedPost.title}</p>
                                <p>{savedPost.name}</p>
                                <img src={savedPost.image}></img>
                                <p>{savedPost.description}</p>
                            </div>
                        )
        })}
    </div>
  )
}

export default PostItem