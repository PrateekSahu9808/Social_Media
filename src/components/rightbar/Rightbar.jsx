import React from 'react'
import './rightbar.css'
import { Users } from '../../dummyData';
import OnlineX from '../online/OnlineX';

const Rightbar = () => {
  console.log(Users)
  return (
   <div className='rightbar'>
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img  className='birthdayImg' src="/assets/gift.png" alt="" />
            <span className='birthdayText'>
             <b>Prateek sahu</b>  and 3 other friend birthday today
             </span>
          </div>
          <img src="/assets/ad.png" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
           {Users.map((u)=>{
          
            <OnlineX key={u.id} user={u}/>
           })}
          </ul>
        </div>
   </div>
  )
}

export default Rightbar