import { useState } from "react";
import {updatePost} from "../../redux/modules/posts"
import { useDispatch } from "react-redux/";

const Postmodal = ({post, close}) => {
    let dispatch = useDispatch();
    const initialState = {
        id: post.id,
        writer: post.writer,
        title: post.title,
        body: post.body,
        date: post.date,
        count: post.count
      };
    const [post1,setPost1] = useState(initialState);
    const [title,setTitle] =useState(post1.title);
    const [body,setBody] =useState(post1.body);

    // const change = (title, body) =>{
    //     dispatch(updatePost({ ...post1, title:title, body:body }));
    // }
    return (
        <>
        
        <div className="black-bg show-modal">
            <div className="white-bg">
            <h4>게시글 수정하기</h4>
            <div>
                <label>제목</label>
                <input className="input" type="text" name="title" value={title}
                onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div>
                <label>내용</label>
                <input className="input" type="text" name="body" value={body}
                onChange={(e)=>{setBody(e.target.value)}}/>
            </div>
            <button className="btn btn-danger" 
            onClick={()=>{dispatch(updatePost({ ...post1, title:title, body:body }));close()}}>수정하기</button>
            <button className="btn btn-danger" onClick={()=>{close()}}>닫기</button>
            </div>
        </div>
      </>
    )
}

export default Postmodal;