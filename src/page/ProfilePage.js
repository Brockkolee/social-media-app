import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Feed from '../components/feed/Feed';
import ProjectFeed from '../components/feed/ProjectFeed';
import MentorshipFeed from '../components/feed/MentorshipFeed';
import CommunityFeed from '../components/feed/CommunityFeed';
import FactionFeed from '../components/feed/FactionFeed';
import TrendingFeed from '../components/feed/TrendingFeed';
import './ProfilePage.scss';
import ScienceIcon from '@mui/icons-material/Science';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BiotechIcon from '@mui/icons-material/Biotech';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CalculateIcon from '@mui/icons-material/Calculate';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import RecommendIcon from '@mui/icons-material/Recommend';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Recommendations from '../components/feed/RecommendationsFeed';
import IconStyle from '../components/CircleBorder';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ProjectActivities from '../components/profilePageBottomLeft/ProjectActivities';
import MentorshipActivities from '../components/profilePageBottomLeft/MentorshipActivities';
import CommunityActivities from '../components/profilePageBottomLeft/CommunityActivities';
import TrendingActivities from '../components/profilePageBottomLeft/TrendingActivities';
import FactiionActivities from '../components/profilePageBottomLeft/FactionActivities';
import RecommendationActivities from '../components/profilePageBottomLeft/RecommendationActivities';
import FactionActivities from '../components/profilePageBottomLeft/FactionActivities';
import PostingFeed from '../components/feed/PostingFeed';

const ProfilePage = ({ username, isLoading }) => {
  const [selectedFeed, setSelectedFeed] = useState(false);
  const [faction, setFaction] = useState('Engineering');
  const [factionColor, setFactionColor] = useState('#28aef0');

  useEffect(() => {
    setFactionColor(getColor());
  }, [faction]);

  const getColor = () => {
    const colorMap = {
      Science: '#f1004c',
      Technology: '#28aef0',
      Engineering: '#00db0f',
      Art: '#ffee10',
      Math: '#ee00ff',
    };
    return colorMap[faction]; // Default color, adjust as needed
  };

  const setIcon = () => {
    const iconMap = {
      Science: <ScienceIcon style={{ fontSize: '45' }} />,
      Technology: <BiotechIcon style={{ fontSize: '40' }} />,
      Engineering: <EngineeringIcon style={{ fontSize: '35', marginBottom: '4px' }} />,
      Art: <ColorLensIcon style={{ fontSize: '40' }} />,
      Math: <CalculateIcon style={{ fontSize: '40' }} />,
    };
    return iconMap[faction] || null;
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user-profile">
      <Navbar setColor={factionColor} username={username} onselectedFeed={setSelectedFeed} />
      <div
        style={{
          border: `solid ${factionColor} 1px`,
          backgroundColor: factionColor,
          boxShadow: `1px 1px 20px ${factionColor}, 1px 1px 20px grey`,
        }}
        className="navbar-line"
      ></div>
      <div className='profile-page'>
        <div className="profile-page-left">
          <div className="profile-picture-container">
            <div className='profile-picture-border'>
              <img style={{ border: `solid ${getColor()} 3px`, boxShadow: `1px 1px 40px ${getColor()}, 1px 1px 20px black`, objectFit: 'cover' }} className='profile-picture' src='https://i.ytimg.com/vi/REFqqRfW2CE/hqdefault.jpg'>
              </img>
            </div>
            <div>
              {/* <div className="box">
                Animated Gradient Underglow
              </div> */}
            </div>
            <div className='profile-stats'>
              <IconStyle
                color={factionColor}
                fontSize='30px'
                position='relative'
                left='5px'
                top='30px'
                after={<p style={{ top: '150px', lineHeight: '0px' }}>20</p>}
              />
              <IconStyle
                color={factionColor}
                fontSize='30px'
                position='relative'
                left='22px'
                after={<img className='ranking' src={require("../image/CharacterAccessories/Rank1.png")}></img>}
              />
              <IconStyle
                color={factionColor}
                fontSize='30px'
                position='relative'
                left='5px'
                top='-30px'
                after={setIcon()}
              />
            </div>
          </div>
          <div className='profile-bottom-left'>
            {selectedFeed && (<>
              {selectedFeed === 'Project' && <ProjectActivities
                factionColor={factionColor}
              ></ProjectActivities>}
              {selectedFeed === 'Mentorship' && <MentorshipActivities
                factionColor={factionColor}></MentorshipActivities>}
              {selectedFeed === 'Community' && <CommunityActivities></CommunityActivities>}
              {selectedFeed === 'Trending' && <TrendingActivities></TrendingActivities>}
              {selectedFeed === 'Faction' && <FactionActivities></FactionActivities>}
              {selectedFeed === 'Recommendations' && <RecommendationActivities></RecommendationActivities>}
            </>)}
          </div>
        </div>
        <div className="profile-page-center">
          <PostingFeed selectedFeed={selectedFeed}></PostingFeed>
          {selectedFeed && (<Feed>
            {selectedFeed === 'Project' && <ProjectFeed getColor={getColor()}></ProjectFeed>}
            {selectedFeed === 'Mentorship' && <MentorshipFeed></MentorshipFeed>}
            {selectedFeed === 'Community' && <CommunityFeed></CommunityFeed>}
            {selectedFeed === 'Trending' && <TrendingFeed></TrendingFeed>}
            {selectedFeed === 'Faction' && <FactionFeed></FactionFeed>}
            {selectedFeed === 'Recommendations' && <Recommendations></Recommendations>}
          </Feed>)}
        </div>
        <div className="profile-page-right"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
