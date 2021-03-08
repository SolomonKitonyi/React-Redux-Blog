import jsonplaceholder from '../apis/jsonPlaceholder';
export const fetchedPosts = ()=> async dispatch=>{
        const response = await jsonplaceholder.get('/posts');
        dispatch({type:'FETCH_POSTS',payload:response})
    }

