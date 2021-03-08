import React from 'react';
import {connect} from 'react-redux';
import {fetchedPosts} from '../actions';
class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchedPosts();
    }
    render(){
        return <div>Post List</div>
    }
}

export default connect(null,{fetchedPosts}) (PostList);
