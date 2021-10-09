import React from 'react';
import './topbar.css';
import {
  Person,
  Search,
  Chat,
  Notifications,
  ExitToApp,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Topbar = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Social</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search for Friends, Post"
            className="SearchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link
            style={{ textDecoration: 'none', color: 'white', padding: '10px' }}
            to="/"
          >
            <span className="topbarLink">Homepage</span>
          </Link>
          <Link
            to={`/profile/${user.username}`}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <span className="topbarLink">Timeline</span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div
            className="topbarIconItem"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            <ExitToApp />
          </div>
          {/* <div className="topbarIconItem">
            <Chat />
            <span className="tobparIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="tobparIconBadge">1</span>
          </div> */}
        </div>
      </div>
      <Link style={{ marginRight: '15px' }} to={`/profile/${user.username}`}>
        <img
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : "https://res.cloudinary.com/social-media-appwe/image/upload/v1633782265/social/assets/person/noAvatar_f5amkd.png"
          }
          alt=""
          className="topbarImg"
        />
      </Link>
    </div>
  );
};

export default Topbar;
