import React, { Component } from 'react'
import PostItem from './PostItem'
import css from '../components/css/Content.module.css'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: []
        }
    }

    componentDidMount() {
        this.fetchImages();
    }

    async fetchImages() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
        const fetchedPosts = response.data.hits
        console.log(fetchedPosts)
        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts
        })
    }

    handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = this.state.savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name)
        })
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <form>
                        <label htmlFor='searchInput'>Search</label>
                        <input
                            onChange={(event) => this.handleChange(event)} 
                            id="searchInput"
                            name="search"
                            type="text" />
                    </form>
                    <h4>posts found: {this.state.posts.length}</h4>
                </div>
                <div className={css.SearchResults}>
                    {this.state.isLoaded ? (
                        <PostItem savedPosts={this.state.posts}/>
                    ) : (
                        <Loader/>
                    )}
                   
                </div>
            </div>
        )
    }   
}

export default Content