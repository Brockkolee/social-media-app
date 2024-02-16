import React from 'react'
import NameBorder from '../NameBorder'
import IconStyle from '../CircleBorder';
import RecommendIcon from '@mui/icons-material/Recommend';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CommentIcon from '@mui/icons-material/Comment';

{/* <Dialouge
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
></Dialouge> */}

const Dialouge = (props) => {
    const colorMap = {
        Science: '#f1004c',
        Technology: '#28aef0',
        Engineering: '#00db0f',
        Art: '#ffee10',
        Math: '#ee00ff',
    };

    return (
        <div >
            <div style={{ position: 'relative' }}>
                <NameBorder
                    color={colorMap[props.faction]}
                    fontSize='18px'
                    position='relative'
                    left='30px'
                    top='70px'
                    display='inline-block'
                    after={<p style={{ position: 'relative', top: '-43px' }}>{props.profileName}</p>}
                    borderRadius='0 1em 1em 0'
                />
                <IconStyle
                    color={colorMap[props.faction]}
                    fontSize='30px'
                    position='relative'
                    left='-120px'
                    top='50px'
                    display='inline-block'
                    after={<img style={{ height: '100%', width: '100%', borderRadius: '50%', objectFit: 'cover' }} src={props.profileImage}></img>}
                />
            </div>
            <div style={{
                position: 'relative',
                marginTop: '20px',
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                boxShadow: `5px 5px 10px 0px ${colorMap[props.faction]}, 5px 5px 10px 0px #888888`, padding: '40px',
            }} className='feed-item'>
                <img style={{ objectFit: 'none' }} src={props.uploadImage}></img>
                {props.text}
            </div>

            {props.projectImage && <IconStyle
                color={colorMap[props.faction]}
                fontSize='30px'
                top='-50px'
                left='88%'
                position='relative'
                display='block'
                after={<img style={{ height: `80%`, width: `80%`, marginTop: `10%`, borderRadius: `50%`, objectFit: 'cover' }}
                    src={props.projectImage}
                ></img>}
            />}
            {props.type == 'community' && props.communityImage && <IconStyle
                color={colorMap[props.faction]}
                fontSize='30px'
                top='-190px'
                left='88%'
                display='block'
                position='relative'
                after={<img style={{ height: `80%`, width: `80%`, marginTop: `10%`, borderRadius: `50%`, objectFit: 'cover' }} src={props.communityImage}></img>}
                margin='0 0 -100px 0'
            />}
            {props.comment && <><div style={{ marginTop: props.type == 'community' && props.communityImage ? '-110px' : props.type == 'project' && props.projectImage ? '-50px' : '0px', marginBottom: '5px', display: 'flex', justifyContent: 'space-around' }}>
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
                        width: '95%',
                        border: `solid ${colorMap[props.faction]} 1px`,
                        backgroundColor: colorMap[props.faction],
                        boxShadow: `1px 1px 20px ${colorMap[props.faction]}, 1px 1px 20px grey`,
                        marginBottom: '30px'
                    }}
                >
                </div>
            </>}
        </div>
    )
}

export default Dialouge