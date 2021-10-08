import React from 'react';
import './topbar.css';
import { Person, Search, Chat, Notifications } from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            PlaceHolder="Search for Friends, Post"
            className="SearchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="tobparIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="tobparIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="tobparIconBadge">1</span>
          </div>
        </div>
      </div>
      <img src="assets/person/1.jpeg" alt="" className="topbarImg" />
     
    </div>
  );
};

export default Topbar;
