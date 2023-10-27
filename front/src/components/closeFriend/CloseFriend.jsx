import "./closeFriend.css"
// import {Users} from"../../dummyData.js"

export default function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarDog">
    <img className="sidebardogImg" src={PF + user.profilePicture} alt="" />
    <span className="sidebarDogName">{user.username}</span>
  </li>
  )
}
