import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    errorMsg: 'Error retrieving data'
                })
            })
    }

    render() {
        const { posts } = this.state
        const postslist = posts.map(post => <p id={post.id}>{post.title}</p>) 
        if (postslist.length) {
            return(
                <div>{postslist}</div>
            )  
        } else{return <div>some error occured</div>}
    }
}

export default PostList
