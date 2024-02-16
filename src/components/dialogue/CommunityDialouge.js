import React from 'react'
import IconStyle from '../CircleBorder';
import NameBorder from '../NameBorder';
import RecommendIcon from '@mui/icons-material/Recommend';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CommentIcon from '@mui/icons-material/Comment';


const CommunityDialouge = (props) => {

    const colorMap = {
        Science: '#f1004c',
        Technology: '#28aef0',
        Engineering: '#00db0f',
        Art: '#ffee10',
        Math: '#ee00ff',
    };

    return (
        <div><div >
            <NameBorder
                color={colorMap[props.faction]}
                fontSize='18px'
                position='relative'
                display='inline-block'
                top='70px'
                left='30px'
                after={<p style={{ position: 'relative', top: '-25px' }}>{props.profileName}</p>}
                borderRadius='0 1em 1em 0'
            />
            <IconStyle
                color={colorMap[props.faction]}
                fontSize='30px'
                position='relative'
                display='inline-block'
                left='-20px'
                top='30px'
                after={<img style={{ height: '100%', width: '100%', borderRadius: '50%', objectFit: 'cover' }} src={props.profileImage}></img>}
            />
            <IconStyle
                color={colorMap[props.faction]}
                fontSize='30px'
                left='79%'
                top='30px'
                display='inline-block'
                position='relative'
                after={<img style={{ height: `80%`, width: `80%`, marginTop: `10%`, borderRadius: `50%`, objectFit: 'cover' }} src={props.communityImage}></img>}
            />
            <div style={{ maxWidth:'80%',boxShadow: `2px 2px 10px 0px ${colorMap[props.faction]}, 5px 5px 10px 0px #888888`, paddingLeft: '40px', padding: '40px' }} className='feed-item'>
                {props.text}
            </div>
            <IconStyle
                color={colorMap[props.faction]}
                fontSize='30px'
                position='relative'
                top='-30px'
                left='87%'
                after={<img style={{ height: `80%`, width: `80%`, marginTop: `10%`, borderRadius: `50%`, objectFit: 'cover' }} src={props.projectImage}></img>}
            />
            {props.comment && <><div style={{ margin: '-30px 0 5px 0', display: 'flex', justifyContent: 'space-around' }}>
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
            </>}
        </div>
        </div>
    )
}

export default CommunityDialouge