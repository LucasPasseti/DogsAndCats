import "./post.css"
import {More, MoreVert} from "@material-ui/icons"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
                <span className="postUsername">Juquinha Au</span>
                <span className="postDate">5 min ago</span>
              </div>
              <div className="postTopRight">
                <MoreVert />
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">Olá amiguinhos dogs! hoje eu visitei este lindo campo</span>
              <img className="postImg" src="/assets/post/1.jpg" alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className="likeIcon" src="assets/emoj/like.png" alt="" />
                <img className="likeIcon" src="assets/emoj/heart.png" alt="" />
                <span className="postLikeCounter">32 pessoas curtiram isso</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">9 comentarios</span>
              </div>
            </div>
        </div>
    </div>
  )
}
