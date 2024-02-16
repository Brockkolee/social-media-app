import React, { useState } from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import GroupsIcon from '@mui/icons-material/Groups';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import InterestsIcon from '@mui/icons-material/Interests';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import { Tooltip } from '@mui/material';
import Menu from './Menu';
import Card from '../Card';
import Guide from './Guide';
import Project from '../feed/ProjectFeed';
import Mentorship from '../feed/MentorshipFeed';
import RecommendIcon from '@mui/icons-material/Recommend';
import Recommendations from '../feed/RecommendationsFeed';

const IconButton = ({ icon, action, tooltip }) => (
  <Tooltip title={tooltip}>
    <button onClick={action}>
      {icon}
    </button>
  </Tooltip>
);

const Navbar = (props) => {
  const [card, setCard] = useState(false);
  const [input, setInput] = useState(false);

  const toggleCard = (input) => {
    setInput(input);
    setCard((prev) => !prev);
  };

  const feedHandler = (input) => {
    return props.onselectedFeed(input)
  }

  const iconButtonsCenter = [
    { icon: <img className='navbar-logo' src={require('../../image/Logo(Transparent BG).png')} alt="Logo" />, action: () => feedHandler('Project'), tooltip: 'Project' },
    { icon: <EscalatorWarningIcon />, action: () => feedHandler('Mentorship') ,tooltip: 'Mentorship' },
    { icon: <GroupsIcon />, action: () => feedHandler('Community'), tooltip: 'Community' },
    { icon: <WhatshotIcon />, action: () => feedHandler('Trending'), tooltip: 'Trending' },
    { icon: <InterestsIcon />, action: () => feedHandler('Faction'), tooltip: 'Faction' },
    { icon: <RecommendIcon />, action: () => feedHandler('Recommendations'), tooltip: 'Recommendations'}
  ];

  const iconButtonsRight = [
    { icon: <ListIcon />, action: () => toggleCard('Menu'), tooltip: 'Menu' },
    { icon: <NotificationsIcon />, tooltip: 'Notifications' },
    { icon: <PrivacyTipIcon />, action: () => toggleCard('Guide'), tooltip: 'Guide' },
  ];

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <h2>Hi{props.username ? ` ${props.username}` : ''}!</h2>
        <SearchIcon />
        <input
          className="navbar-left-input"
          placeholder='Search'
        />
      </div>
      <div className="navbar-center">
        {iconButtonsCenter.map((button, index) => (
          <IconButton key={index} {...button} />
        ))}
      </div>
      <div className="navbar-right">
        {iconButtonsRight.map((button, index) => (
          <IconButton key={index} {...button} />
        ))}
        {card && input && (
          <Card setColor={props.setColor} cardHandler={props.cardHandler}>
            {input === 'Menu' && <Menu />}
            {input === 'Guide' && <Guide />}
            {input === 'Mentorship' && <Mentorship />}
          </Card>
        )}
      </div>
    </div>
  );
};

export default Navbar;
