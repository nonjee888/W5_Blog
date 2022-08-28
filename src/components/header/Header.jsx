import {useNavigate} from "react-router-dom"
import styled from "styled-components";

const Title = styled.h4`
cursor:pointer;
&:hover{

}
`

const Header = () =>{
    let navigate = useNavigate();
    return (
        <div className='black-nav'>
            <Title onClick={()=>navigate("/")}>7조 과제</Title>
        </div>
    )
}

export default Header;