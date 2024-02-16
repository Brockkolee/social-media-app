import React, { useContext } from 'react'
import NameBorder from '../NameBorder'
import IconStyle from '../CircleBorder'
import { FeedContext } from '../../context/FeedContext'

const MenteeTag = (props) => {

    const ctx = useContext(FeedContext)

    const colorMap = {
        Science: '#f1004c',
        Technology: '#28aef0',
        Engineering: '#00db0f',
        Art: '#ffee10',
        Math: '#ee00ff',
    };

    return (
        <div style={{ transform: 'scale(0.8)' }}>
            <NameBorder
              color={colorMap['Science']}
              fontSize='18px'
              top='23px'
              position='relative'
              left='calc(100% - 160px)'
              after={<p style={{ position: 'relative', top: '-25px', textAlign: 'right', paddingRight: '20px' }}>TenTen</p>}
              borderRadius='1em 0 0 1em'
            />
            <IconStyle
              color={colorMap['Science']}
              top='-20px'
              fontSize='30px'
              position='relative'
              left='calc(100% - 60px)'
              after={<img style={{ height: '100%', width: '100%', borderRadius: '50%', objectFit: 'cover', objectPosition: '80% 20%' }} src={('https://i.pinimg.com/originals/63/c2/82/63c282eaa870ffa66e5e6eebf122f065.png')}></img>}
            />
            </div>
    )
}

export default MenteeTag