import React from 'react'
import IconStyle from '../CircleBorder';
import NameBorder from '../NameBorder';
import './MentorshipActivities.css'
import CommunityTag from '../tag/CommunityTag';
import Tag from '../tag/Tag';
import MenteeTag from '../tag/MenteeTag';
import Dialouge from '../dialogue/Dialouge';
import MenteeDialouge from '../dialogue/MenteeDialouge';

const MentorshipActivities = (props) => {

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

  return (
    <div className="mentorship-activities">
      <div className="mentorship-container">
        <div className="mentor-container">
          <h3 style={{ marginBottom: '0' }}>
            Mentors
          </h3>
          <Tag
            name='Gai'
            faction='Engineering'
            image='https://static.wikia.nocookie.net/springtimeofyouth/images/8/88/Guys_infobox_image.png'
          ></Tag>
        </div>
        <div className="mentee-container">
          <h3 style={{ marginBottom: '0' }}>
            Mentees
          </h3>
          <MenteeTag
            name='TenTen'
            faction='Science'
            image='https://i.pinimg.com/originals/63/c2/82/63c282eaa870ffa66e5e6eebf122f065.png'
          ></MenteeTag>
        </div>
      </div>
      <div className="mentorship-task">
        <div
          style={{
            marginTop: '2em',
            border: `solid ${colorMap['Engineering']} 1px`,
            backgroundColor: colorMap['Engineering'],
            boxShadow: `1px 1px 40px ${colorMap['Engineering']}, 1px 1px 20px grey`,
          }}
        >
        </div>
        <Dialouge
          profileImage='https://static.wikia.nocookie.net/springtimeofyouth/images/8/88/Guys_infobox_image.png'
          projectImage={require('../../image/ProjectImage/projectimage1.png')}
          profileName='Gai'
          text='just assigned you a new task for project moon clan'
          id=''
          faction='Engineering'
          type='project'
          projectName='Highlander'
          communityName='kumo'
        ></Dialouge>
        <MenteeDialouge
          profileImage='https://static.wikia.nocookie.net/springtimeofyouth/images/8/88/Guys_infobox_image.png'
          projectImage={require('../../image/ProjectImage/projectimage2.png')}
          profileName='Gai'
          text='Just competed task 8/10 for project sun clan'
          id=''
          faction='Science'
          type='project'
          projectName='Highlander'
          communityName='kumo'
          menteeName='TenTen'
          menteeImage='https://i.pinimg.com/originals/63/c2/82/63c282eaa870ffa66e5e6eebf122f065.png'
        >
        </MenteeDialouge>
        
      </div>
    </div>
  )
}

export default MentorshipActivities