import React, {useEffect, useState} from 'react';
import './sidebar.css';
import { Users } from '../../dummydata';
import axios from 'axios';
import CloseFriend from '../closeFriend/CloseFriend';

const Sidebar = () => {
    const [people, setPeople] = useState([])

  useEffect(() => {
    const getpeople = async () => {
      try {
        const friendList = await axios.get('/users/all/every');
        setPeople(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getpeople();
  }, []);


  return (
    <div className="sidebar">
      <hr className="sidebarHr" />
      <h4 className="rightbarTitle">People on Social</h4>
      <ul className="sidebarFriendList">
        {people.map((u) => (
          <CloseFriend key={u.id} user={u} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
