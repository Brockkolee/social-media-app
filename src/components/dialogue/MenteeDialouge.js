import React from 'react'
import NameBorder from '../NameBorder';
import IconStyle from '../CircleBorder';

const MenteeDialouge = (props) => {

    const colorMap = {
        Science: '#f1004c',
        Technology: '#28aef0',
        Engineering: '#00db0f',
        Art: '#ffee10',
        Math: '#ee00ff',
    };

    return (
        <div>
            <IconStyle
                color={colorMap[props.faction]}
                fontSize='30px'
                position='relative'
                top='30px'
                left='-20px'
                after={<img style={{ height: `80%`, width: `80%`, marginTop: `10%`, borderRadius: `50%` }} src={props.projectImage}></img>}
            />
            <div className='feed-item' style={{ display: 'block', top: '-100px', boxShadow: `2px 2px 10px 0px ${colorMap[props.faction]}, 5px 5px 10px 0px #888888`, paddingLeft: '40px', padding: '40px' }}>
                {props.text}
            </div>
            <NameBorder
                color={colorMap[props.faction]}
                fontSize='18px'
                position='relative'
                top='-30px'
                left='calc(100% - 160px)'
                after={<p style={{ position: 'relative', top: '-25px', textAlign: 'right', paddingRight: '20px' }}>{props.menteeName}</p>}
                borderRadius='1em 0 0 1em'
            />
            <IconStyle
                color={colorMap[props.faction]}
                fontSize='30px'
                position='relative'
                top='-70px'
                left='calc(100% - 60px)'
                after={<img style={{ height: '100%', width: '100%', borderRadius: '50%', objectFit: 'cover', objectPosition: '80% 20%' }} src={props.menteeImage}></img>}
            />
        </div>
    )
}

export default MenteeDialouge