import React, { Component } from 'react'
import PostItem from './PostItem'
import { savedPosts } from '../posts.json'
import css from '../components/css/Content.module.css'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: []
        }
    }

    handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        this.setState({
            posts: filteredPosts
        })
    } 

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: savedPosts
            })
        }, 2000)
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