import React, { Component, useContext } from 'react'
import NameBorder from '../NameBorder'
import IconStyle from '../CircleBorder';
import RecommendIcon from '@mui/icons-material/Recommend';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CommentIcon from '@mui/icons-material/Comment';
import './PostingFeed.css'
import { FeedContext } from '../../context/FeedContext';
import CommunityDialouge from '../dialogue/CommunityDialouge';
import Popup from '../Popup';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const PostingFeed = (props) => {

  const ctx = useContext(FeedContext)


  const colorMap = {
    Science: '#f1004c',
    Technology: '#28aef0',
    Engineering: '#00db0f',
    Art: '#ffee10',
    Math: '#ee00ff',
  };

  const [input, setInput] = React.useState('')
  const [popup, setPopup] = React.useState(false);

  const inputHandler = (event) => {
    setInput(event.target.value)
  }

  const closePopup = () => {
    setPopup(false);
  };

  const addFeed = () => {
    ctx.addList(
      {
        profileImage: 'https://i.ytimg.com/vi/REFqqRfW2CE/hqdefault.jpg',
        profileName: 'Itachi',
        text: input,
        id: '',
        faction: 'Science',
        type: 'community',
        communityName: 'kumo',
        listType: props.selectedFeed
      }
    )
    setPopup(false);
    setInput('')
  }

  const postHandler = () => {
    setPopup(true);
  }

  const addPhotoHandler = () => {
    console.log('add photo')
  }

  return (
    <div>
      <div className='posting-container'>
        <button
          onClick={postHandler}
          style={{ textAlign: 'left', top: '70px', position: 'relative', opacity: '0.5', width: '80%', boxShadow: `2px 2px 10px 0px ${colorMap['Engineering']}, 5px 5px 10px 0px #888888`, paddingLeft: '40px', padding: '40px' }} className='feed-item'>
          "what's on your mind?"
        </button>
        <NameBorder
          color={colorMap['Engineering']}
          fontSize='18px'
          position='relative'
          top='-60px'
          left='30px'
          width='5em'
          after={<p style={{ position: 'relative', top: '-25px' }}>RockLee</p>}
          borderRadius='0 1em 1em 0'
        />
        <IconStyle
          color={colorMap['Engineering']}
          fontSize='30px'
          position='relative'
          left='-20px'
          top='-100px'
          after={<img style={{ height: '100%', width: '100%', borderRadius: '50%', objectFit: 'cover' }} src='https://i.ytimg.com/vi/REFqqRfW2CE/hqdefault.jpg'></img>}
        />
      </div>
      {popup && (
        <Popup onPopupHandler={closePopup}>
          <input
            onChange={inputHandler}
            value={input}
            placeholder="what;s on your mind?"
            style={{ textAlign: 'left', top: '70px', position: 'relative', opacity: '0.5', width: '80%', boxShadow: `2px 2px 10px 0px ${colorMap['Engineering']}, 5px 5px 10px 0px #888888`, paddingLeft: '40px', padding: '40px' }} className='feed-item'>
          </input>
          <NameBorder
            color={colorMap['Engineering']}
            fontSize='18px'
            position='relative'
            top='-60px'
            left='30px'
            width='5em'
            after={<p style={{ position: 'relative', top: '-25px' }}>RockLee</p>}
            borderRadius='0 1em 1em 0'
          />
          <IconStyle
            color={colorMap['Engineering']}
            fontSize='30px'
            position='relative'
            left='-20px'
            top='-100px'
            after={<img style={{ height: '100%', width: '100%', borderRadius: '50%', objectFit: 'cover' }} src='https://i.ytimg.com/vi/REFqqRfW2CE/hqdefault.jpg'></img>}
          />
          <div onClick={addPhotoHandler} style={{display:'flex', flexDirection:'column', justifyContent:'center', margin:'5px' }}>
            <AddAPhotoIcon
            style={{paddingLeft:'12px'}}
            >
            </AddAPhotoIcon>
            <p style={{ fontSize: '11px',marginBlockStart:'5px'}} >Add a photo</p>
          </div>
          <button
            onClick={addFeed}
            style={{ width: '93%', boxShadow: `2px 2px 10px 0px ${colorMap['Engineering']}, 5px 5px 10px 0px #888888`, padding: '10px', marginBottom: '30px' }}
          >Post!</button>
        </Popup>)
      }
    </div>
  )
}

export default PostingFeed