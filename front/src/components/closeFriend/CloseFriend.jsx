import "./closeFriend.css"
import {Users} from"../../dummyData.js"

export default function CloseFriend({user}) {
  return (
    <li className="sidebarDog">
    <img className="sidebardogImg" src={user.profilePicture} alt="" />
    <span className="sidebarDogName">{user.username}</span>
  </li>
  )
}
