import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux/';
import { likePost, removePost } from "../../redux/modules/posts";
import {useNavigate} from "react-router-dom";
import { __getPosts } from "../../redux/modules/posts";


import Postmodal from "../postmodal/Postmodal";

const Detail = () =>{
  let navigate = useNavigate();
  let dispatch = useDispatch();
    let [modal, setModal] = useState(false);
    let {id} = useParams();
    const { isLoading, error, posts } = useSelector((state) => state.posts);
    let post = posts.find((post)=>{
      return String(post.id) === id;
    })
    
    useEffect(() => {
        dispatch(__getPosts());
    }, [dispatch]);
    if (isLoading) {
        return <div>로딩 중....</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }
    
    const close=()=>{
      setModal(false);
    }

    return (
      <>{modal? <Postmodal post={post} close={close}/>:null}
      <div style={{backgroundColor:"orange"}}>게시글</div>
      <div className='modal' style={{background: '#d3d3d3'}}>
        <button onClick={()=>navigate(-1)} >이전으로</button>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <p>{post.date}</p>
          <p>{post.writer}</p>
          <div>
            <p>{post.count}</p>
            <button onClick={()=>{
                let copy = {...post, count:post.count+1}
                dispatch(likePost(copy));
            }}>👍좋아요</button>
          <button onClick={()=>{
            setModal(true);
          }}>수정하기</button>
          <button onClick={()=>{
            dispatch(removePost(post.id));
            navigate("/", {replace:true});
          }}>삭제하기</button>
          </div>
        </div>
      </>
    )
  }

  export default Detail;