import styled from 'styled-components';
import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux/';
import { __getPosts } from "../../redux/modules/posts";

import Post from '../post/Post';

const Dd = styled.div`
border-bottom: 1px solid grey;
background-color: orange;
`

const List = () => {
    let dispatch = useDispatch();
    const { isLoading, error, posts } = useSelector((state) => state.posts);
    
    useEffect(() => {
        dispatch(__getPosts());
    }, [dispatch]);

    if (isLoading) {
        return <div>로딩 중....</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }
    let postList = posts.filter((post)=>{
        return post !== null;
    })
    return (
        <>
        <Dd>게시글</Dd>
        {postList.map(post => 
            <Post post ={post} key={post.id}/>
        )}
        </>
    )
}

export default List;