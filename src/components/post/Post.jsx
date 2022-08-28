import {useNavigate} from "react-router-dom"
import styled from "styled-components"

const PostTitle = styled.h4`
cursor:pointer;
&:hover{
color:purple;
}
`


const Post = ({post}) => {
    let navigate = useNavigate();
    return (
        <>
        <div className='list'>
        <PostTitle onClick={()=>navigate("/view/"+ post.id)}>{post.title}<span>👍</span>{post.count}</PostTitle>
        <p>{post.writer}</p>
        <p>{post.date}</p>
        <div>
        </div>
      </div>
      </>
    )
}

export default Post;