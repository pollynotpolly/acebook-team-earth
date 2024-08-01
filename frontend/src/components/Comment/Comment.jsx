import { getUserInfo } from "../../services/userInfos";
import { getComment } from "../../services/comments";
import { useParams } from "react-router-dom";

export const Comment = () => {
    const [commentContent, setCommentContent] = useState("");
    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchUser = async () => {
            console.log("fetching user");
        try {
            const userInfo = await getUserInfo(token);
            console.log("userInfo: ", userInfo.user);
            setCommentContent(userInfo.user);
        } catch (err) {
            console.error(err);
            navigate("/404");
        }
        };
    
        fetchComment();
    }, [navigate]);
    
}