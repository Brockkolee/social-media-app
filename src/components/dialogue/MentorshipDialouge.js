import React from 'react'
import IconStyle from '../CircleBorder'
import NameBorder from '../NameBorder'
import RecommendIcon from '@mui/icons-material/Recommend';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CommentIcon from '@mui/icons-material/Comment';

const MentorshipDialouge = (props) => {

    const colorMap = {
        Science: '#f1004c',
        Technology: '#28aef0',
        Engineering: '#00db0f',
        Art: '#ffee10',
        Math: '#ee00ff',
    };

    return (
        <div >
            <NameBorder
                color={colorMap[props.faction]}
                fontSize='18px'
                position='relative'
                top='70px'
                left='30px'
                after={<p style={{ position: 'relative', top: '-25px' }}>{props.mentorName}</p>}
                borderRadius='0 1em 1em 0'
            />
            <IconStyle
                color={colorMap[props.faction]}
                fontSize='30px'
                position='relative'
                left='-20px'
                top='30px'
                after={<img style={{ height: '100%', width: '100%', borderRadius: '50%', objectFit: 'cover' }} src={props.mentorImage}></img>}
            />
            <div style={{ boxShadow: `0px 0px 10px 0px #888888`, borderLeft: `solid 2px ${colorMap[props.faction]}`, borderTop: `solid 2px ${colorMap[props.faction]}`, paddingLeft: '40px', padding: '40px' }} >
                {props.text}
            </div>
            {props.menteeImage &&
                <>
                    <NameBorder
                        color={colorMap[props.menteeFaction ? props.menteeFaction : props.faction]}
                        fontSize='18px'
                        position='relative'
                        top='-30px'
                        left='calc(100% - 160px)'
                        after={<p style={{ position: 'relative', top: '-25px', textAlign: 'right', paddingRight: '20px' }}>{props.menteeName}</p>}
                        borderRadius='1em 0 0 1em'
                    />
                    <IconStyle
                        color={colorMap[props.menteeFaction ? props.menteeFaction : props.faction]}
                        fontSize='30px'
                        position='relative'
                        top='-70px'
                        left='calc(100% - 60px)'
                        after={<img style={{ height: '100%', width: '100%', borderRadius: '50%', objectFit: 'cover', objectPosition: props.menteeObjectPosition }} src={props.menteeImage}></img>}
                    />
                </>
            }
            <div style={{ marginTop: props.menteeImage ? '-60px' : '20px', marginBottom: '5px', display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <RecommendIcon></RecommendIcon>
                    <p style={{ margin: '5px' }}>Like</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CelebrationIcon></CelebrationIcon>
                    <p style={{ margin: '5px' }}>Cheer</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CommentIcon></CommentIcon>
                    <p style={{ margin: '5px' }}>Comment</p>
                </div>
            </div>
            <div
                style={{
                    border: `solid ${colorMap[props.faction]} 1px`,
                    backgroundColor: colorMap[props.faction],
                    boxShadow: `1px 1px 20px ${colorMap[props.faction]}, 1px 1px 20px grey`,
                }}
            >
            </div>
        </div>
    )
}

export default MentorshipDialouge