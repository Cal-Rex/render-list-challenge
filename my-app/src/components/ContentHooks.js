import React, {useEffect, useState} from 'react'
import PostItem from './PostItem'
import { savedPosts } from '../posts.json'
import css from '../components/css/Content.module.css'
import Loader from './Loader'

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchPosts] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(isLoaded => true)
            setFetchPosts(savedPosts)
        }, 2000)
    }, []);

    const handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        setFetchPosts(filteredPosts)
    } 


    return (
        <div>
            <div className={css.TitleBar}>
                <form>
                    <label htmlFor='searchInput'>Search</label>
                    <input
                        onChange={(e)=>{handleChange(e)}}
                        id="searchInput"
                        name="search"
                        type="text" />
                </form>
                <h4>posts found: {fetchedPosts.length}</h4>
            </div>
            <div className={css.SearchResults}>
                {isLoaded ? (
                    <PostItem savedPosts={fetchedPosts}/>
                ) : (
                    <Loader/>
                )}
               
            </div>
        </div>
    )
}   

export default ContentHooks