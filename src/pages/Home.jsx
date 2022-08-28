import {useNavigate} from "react-router-dom"
import Header from "../components/header/Header";
import Allbtn from "../components/button/Allbtn";

function Home() {
    let navigate = useNavigate();
    return (
        <>
        <Header/>
        <Allbtn onClick={()=>navigate("/write")} desc = {"글 작성"} cl = {"white"}></Allbtn>
        <Allbtn onClick={()=>navigate("/list")} desc = {"게시글 보기"}></Allbtn>
        </>
    );
}


export default Home;
