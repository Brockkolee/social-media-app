import React from 'react';
import './ProjectFeed.css';
import Dialouge from '../dialogue/Dialouge';

const ProjectFeed = (props) => {
  const colorMap = {
    Science: '#f1004c',
    Technology: '#28aef0',
    Engineering: '#00db0f',
    Art: '#ffee10',
    Math: '#ee00ff',
  };

  return (
    <>
      <Dialouge
        uploadImage='https://static.wikia.nocookie.net/springtimeofyouth/images/d/d4/Itachi_Avatar.png'
        communityImage={require('../../image/ClanSymbol/NarutoClan1.jpg')}
        profileImage='https://static.wikia.nocookie.net/springtimeofyouth/images/d/d4/Itachi_Avatar.png'
        projectImage={require('../../image/ProjectImage/projectimage1.png')}
        profileName='Itachi'
        text='just reached a new mile stone for project Highlander!'
        id=''
        faction='Science'
        type='project'
        projectName='Highlander'
        communityName='kumo'
        comment={true}
      ></Dialouge>
      <Dialouge
        communityImage={require('../../image/ClanSymbol/NarutoClan1.jpg')}
        profileImage='https://i.pinimg.com/736x/5a/89/e4/5a89e4d4bf4ca0e5a91be275c32ed57b.jpg'
        projectImage={require('../../image/ProjectImage/projectimage2.png')}
        profileName='Obito'
        text='just started project Astra!'
        id=''
        faction='Technology'
        type='project'
        projectName='Astra'
        communityName='kumo'
        comment={true}

      ></Dialouge>
      <Dialouge
        communityImage={require('../../image/ClanSymbol/NarutoClan1.jpg')}
        profileImage='https://i.pinimg.com/originals/42/92/59/429259222e089fdd4a3376f385ff4876.jpg'
        projectImage={require('../../image/ProjectImage/projectimage3.png')}
        profileName='Kakashi'
        text='just completed project Juniper!'
        id=''
        faction='Engineering'
        type='project'
        projectName='Juniper'
        communityName='kumo'
        comment={true}

      ></Dialouge>
      <Dialouge
        communityImage={require('../../image/ClanSymbol/NarutoClan1.jpg')}
        profileImage='https://i.pinimg.com/136x136/91/64/b9/9164b9b1f4ca5ced71c5cffc03a14f60.jpg'
        projectImage={require('../../image/ProjectImage/projectimage3.png')}
        profileName='Hinata'
        text='iust completed project Master Plan!'
        id=''
        faction='Art'
        type='project'
        projectName='Juniper'
        communityName='kumo'
        comment={true}

      ></Dialouge>
    </>
  );
};

export default ProjectFeed;
