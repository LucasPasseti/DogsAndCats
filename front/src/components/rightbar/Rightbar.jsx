import "./rightbar.css"
import { Users } from "../../dummyData.js"
import Online from "../online/Online"

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/others/gift.png" alt="" />
          { }
          <span className="birthdayText"><b>Juquinha</b> mais <b>3 outros amigos</b> fazem aniversário hoje</span>
        </div>
        <img className="rightbarAd" src="assets/others/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Dogs Online</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Informação do Usúario</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">De:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Animal/Raça:</span>
            <span className="rightbarInfoValue">{user.breed}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Porte:</span>
            <span className="rightbarInfoValue">{user.size ===1 ? "Pequeno" : user.size ===2 ? "Médio" : user.size ===3 ? "Grande" : ""}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Amigos</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Belinha Beli</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/2.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Belinha Beli</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/3.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Belinha Beli</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/4.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Belinha Beli</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/5.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Belinha Beli</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/6.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Belinha Beli</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
