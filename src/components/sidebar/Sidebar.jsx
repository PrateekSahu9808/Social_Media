import React from 'react'
import './sidebar.css'
import {RssFeed,Chat,PlayCircleFilledOutlined,Group,Bookmark,
  HelpOutlineRounded,WorkOutlineRounded,Event,SchoolRounded
  } from "@material-ui/icons"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
           <RssFeed className='sidebarIcon'/>
           <span className="sidebarListItemText"> feed</span>
          </li>
          <li className="sidebarListItem">
           < Chat className='sidebarIcon'/>
           <span className="sidebarListItemText"> chats</span>
          </li>
          <li className="sidebarListItem">
           < PlayCircleFilledOutlined className='sidebarIcon'/>
           <span className="sidebarListItemText">videos</span>
          </li>
          <li className="sidebarListItem">
           < Group className='sidebarIcon'/>
           <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
           < Bookmark className='sidebarIcon'/>
           <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
           <  HelpOutlineRounded className='sidebarIcon'/>
           <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
           <  WorkOutlineRounded className='sidebarIcon'/>
           <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
           <  Event className='sidebarIcon'/>
           <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
           <  SchoolRounded className='sidebarIcon'/>
           <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr'/>
       <ul className="sidebarFriendList">
        <li className="sidebarFriend">
          <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Prateek Sahu</span>
        </li>  <li className="sidebarFriend">
          <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Prateek Sahu</span>
        </li>  <li className="sidebarFriend">
          <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Prateek Sahu</span>
        </li>  <li className="sidebarFriend">
          <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Prateek Sahu</span>
        </li>  <li className="sidebarFriend">
          <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Prateek Sahu</span>
        </li>  <li className="sidebarFriend">
          <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Prateek Sahu</span>
        </li>  <li className="sidebarFriend">
          <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Prateek Sahu</span>
        </li>  <li className="sidebarFriend">
          <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Prateek Sahu</span>
        </li>  <li className="sidebarFriend">
          <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Prateek Sahu</span>
        </li>  <li className="sidebarFriend">
          <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
          <span className="sidebarFriendName">Prateek Sahu</span>
        </li>
       </ul>


      </div>
    </div>
  )
}

export default Sidebar