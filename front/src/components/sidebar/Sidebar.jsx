import "./sidebar.css"
import {Bookmark,Event, Chat, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline} from "@material-ui/icons"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Grupos</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Favoritos</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questões</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Trabalhos Pet</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Eventos</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Cursos Pet</span>
          </li>
        </ul>
        <button className="sidebarButton">Mostre Mais</button>
        <hr className="sidebarHr" />
        <ul className="sidebarDogList">
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
          <li className="sidebarDog">
            <img className="sidebardogImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarDogName">Dog Nome</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
