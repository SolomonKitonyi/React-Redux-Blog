import _, { values } from 'lodash';
import jsonplaceholder from '../apis/jsonPlaceholder';
export const fetchPostsAndUsers = ()=> async (dispatch,getState) =>{
    await dispatch(fetchedPosts())
//    const userIds = _.uniq(_.map(getState().posts,'userId'));
//    userIds.forEach(id =>dispatch(fetchUser(id)));

   _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id =>dispatch(fetchUser(id)))
    .values()
}
export const fetchedPosts = ()=> async dispatch=>{
        const response = await jsonplaceholder.get('/posts');
        dispatch({type:'FETCH_POSTS',payload:response.data})
    }
export const fetchUser =  (id)=>async dispatch =>{
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER',payload:response.data})
};
// export const fetchUser =  (id)=>dispatch =>{
//     _FETCH_USER(id,dispatch);
// }
// const _FETCH_USER = _.memoize(async(id,dispatch)=>{
//     const response = await jsonplaceholder.get(`/users/${id}`);
//     dispatch({type:'FETCH_USER',payload:response.data})
// });