import React, { useContext } from 'react'
import IconStyle from '../CircleBorder';
import NameBorder from '../NameBorder';
import './CommunityActivities.css'
import CommunityTag from '../tag/CommunityTag';
import { FeedContext } from '../../context/FeedContext';
import Dialouge from '../dialogue/Dialouge';

const CommunityActivities = (props) => {

  const ctx = useContext(FeedContext)

  const colorMap = {
    Science: '#f1004c',
    Technology: '#28aef0',
    Engineering: '#00db0f',
    Art: '#ffee10',
    Math: '#ee00ff',
  };

  const factionColor = props.factionColor

  const lineBefore = {
    content: "''",
    position: 'relative',
    width: '8px',
    height: '200px',
    top: '-20px',
    zIndex: '-2',
    backgroundColor: `${factionColor}`,
    transform: `rotate(75deg)`,
    boxShadow: `0 0 15px ${factionColor}`,
  };

  const feedHandler = () => {
    ctx.resetFilter()
  }

  return (
    <div className="community-container">
      <div className="communities">
        <h3 onClick={feedHandler} style={{ marginBottom: '0' }}>
          Your Communities
        </h3>
        <div className="communities-items">
          <div className="community">
            <CommunityTag
              communityName='kumo'
              faction='Science'
              communityImage={require('../../image/ClanSymbol/NarutoClan1.jpg')}
            ></CommunityTag>
          </div>
          <div className="community">
            <CommunityTag
              communityName='konoha'
              faction='Technology'
              communityImage={require('../../image/ClanSymbol/NarutoClan2.jpg')}
            ></CommunityTag>
          </div>
          <div className="community">
            <CommunityTag
              communityName='kriga'
              faction='Engineering'
              communityImage={require('../../image/ClanSymbol/NarutoClan3.jpg')}
            ></CommunityTag>
          </div>
        </div>
      </div>
      <div className="community-events-container">
        <h3>
          Community News
        </h3>
        <div className="community-events">
          <Dialouge
            communityImage={require('../../image/ClanSymbol/NarutoClan1.jpg')}
            profileImage='https://static.wikia.nocookie.net/springtimeofyouth/images/d/d4/Itachi_Avatar.png'
            projectImage={require('../../image/ProjectImage/projectimage1.png')}
            profileName='Itachi'
            text='just joined kumo!'
            id=''
            faction='Science'
            type='community'
            communityName='kumo'
            comment={false}
          ></Dialouge>
          <Dialouge
            communityImage={require('../../image/ClanSymbol/NarutoClan1.jpg')}
            profileImage='https://static.wikia.nocookie.net/springtimeofyouth/images/8/88/Guys_infobox_image.png'
            projectImage={require('../../image/ProjectImage/projectimage1.png')}
            profileName='Gai'
            text='just joined kumo!'
            id=''
            faction='Engineering'
            type='community'
            communityName='kumo'
            comment={false}
          ></Dialouge>
        </div>
      </div>
    </div>
  )
}

export default CommunityActivities