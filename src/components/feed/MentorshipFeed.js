import React from 'react';
import './ProjectFeed.css';
import IconStyle from '../CircleBorder';
import NameBorder from '../NameBorder';
import RecommendIcon from '@mui/icons-material/Recommend';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CommentIcon from '@mui/icons-material/Comment';
import MentorshipDialouge from '../dialogue/MentorshipDialouge';

const MembershipFeed = (props) => {
  const colorMap = {
    Science: '#f1004c',
    Technology: '#28aef0',
    Engineering: '#00db0f',
    Art: '#ffee10',
    Math: '#ee00ff',
  };



  const generateColor = () => {
    const keys = Object.keys(colorMap);
    return colorMap[keys[keys.length * Math.random() << 0]];
  };

  return (
    <>
      <MentorshipDialouge
        communityImage={require('../../image/ClanSymbol/NarutoClan1.jpg')}
        profileImage='https://static.wikia.nocookie.net/springtimeofyouth/images/d/d4/Itachi_Avatar.png'
        projectImage={require('../../image/ProjectImage/projectimage1.png')}
        mentorImage='https://static.wikia.nocookie.net/springtimeofyouth/images/d/d4/Itachi_Avatar.png'
        menteeImage='https://static.wikia.nocookie.net/springtimeofyouth/images/b/b4/Black_outfit_Sasuke.png'
        profileName='Itachi'
        mentorName='Itachi'
        menteeName='Sasuke'
        text='Itachi just got a new Mentee!'
        id=''
        faction='Science'
        menteeFaction='Science'
        type='project'
        projectName='Highlander'
        communityName='kumo'
        comment={true}
      ></MentorshipDialouge>
      <MentorshipDialouge
        communityImage={require('../../image/ClanSymbol/NarutoClan1.jpg')}
        profileImage='https://static.wikia.nocookie.net/springtimeofyouth/images/d/d4/Itachi_Avatar.png'
        projectImage={require('../../image/ProjectImage/projectimage1.png')}
        mentorImage='https://i.pinimg.com/736x/5a/89/e4/5a89e4d4bf4ca0e5a91be275c32ed57b.jpg'
        menteeImage='https://i.pinimg.com/736x/a0/3d/85/a03d850b166f1b0f17e347b00a2450ef.jpg'
        profileName='Itachi'
        mentorName='Obito'
        menteeName='Nagato'
        menteeObjectPosition='80% 20%'
        text='Obito just got a new Mentee!'
        id=''
        faction='Technology'
        menteeFaction='Science'
        type='project'
        projectName='Highlander'
        communityName='kumo'
        comment={true}
      ></MentorshipDialouge>
      <MentorshipDialouge
        communityImage={require('../../image/ClanSymbol/NarutoClan1.jpg')}
        profileImage='https://static.wikia.nocookie.net/springtimeofyouth/images/d/d4/Itachi_Avatar.png'
        projectImage={require('../../image/ProjectImage/projectimage1.png')}
        mentorImage='https://i.pinimg.com/originals/42/92/59/429259222e089fdd4a3376f385ff4876.jpg'
        menteeImage='https://static.wikia.nocookie.net/rockleeanime/images/3/36/Naruto_Uzumaki.png'
        profileName='Itachi'
        mentorName='Kakashi'
        menteeName='Naruto'
        text='Naruto just got a new Mentor!'
        id=''
        faction='Engineering'
        type='project'
        projectName='Highlander'
        communityName='kumo'
        comment={true}
      ></MentorshipDialouge>
      <MentorshipDialouge
        communityImage={require('../../image/ClanSymbol/NarutoClan1.jpg')}
        profileImage='https://static.wikia.nocookie.net/springtimeofyouth/images/d/d4/Itachi_Avatar.png'
        projectImage={require('../../image/ProjectImage/projectimage1.png')}
        mentorImage='https://i.pinimg.com/136x136/91/64/b9/9164b9b1f4ca5ced71c5cffc03a14f60.jpg'
        profileName='Itachi'
        mentorName='Hinata'
        menteeName='Naruto'
        text='Hinata is looking for a Mentor!'
        id=''
        faction='Art'
        type='project'
        projectName='Highlander'
        communityName='kumo'
        comment={true}
      ></MentorshipDialouge>
    </>
  );
};

export default MembershipFeed;
