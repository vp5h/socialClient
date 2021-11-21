import React, { useEffect, useState } from 'react';
import './sidebar.css';
import { useSearch } from '../../context/SearchContext';
import axios from 'axios';
import CloseFriend from '../closeFriend/CloseFriend';

const Sidebar = () => {
  const [people, setPeople] = useState([]);
  const { searchText, setSearchText } = useSearch();

  useEffect(() => {
    const getpeople = async () => {
      try {
        const friendList = await axios.get('/users/all/every');
        setPeople(friendList.data);
        setPeople(friendList.data.filter(user => user.username.toLowerCase().includes(searchText.toLowerCase())));
      } catch (err) {
        console.log(err);
      }
    };
    getpeople();
    
  }, [searchText]);
  // useEffect(() => {
   
    
  // }, [searchText])
  return (
    <div className="sidebar">
      <ul className="sidebarFriendList">
        <hr className="sidebarHr" />
        <h4 className="rightbarTitle">People on Social</h4>        
        {people.map((u) => (
          <CloseFriend key={u._id} user={u} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
