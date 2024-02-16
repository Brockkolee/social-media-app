import React, { useContext } from 'react'
import NameBorder from '../NameBorder'
import IconStyle from '../CircleBorder'
import { FeedContext } from '../../context/FeedContext'

const CommunityTag = (props) => {

    const ctx = useContext(FeedContext)

    const colorMap = {
        Science: '#f1004c',
        Technology: '#28aef0',
        Engineering: '#00db0f',
        Art: '#ffee10',
        Math: '#ee00ff',
    };

    const handleFilterClick = () => {
        ctx.filterList(props.communityName)
        ctx.selectedheader(props)
    }

    return (
        <div onClick={handleFilterClick} style={{transform: 'scale(0.8)'}}>
            <NameBorder
                color={colorMap[props.faction]}
                fontSize='18px'
                position='relative'
                left='50px'
                top='20px'
                after={<p style={{ position: 'relative', top: '-25px' }}>{props.communityName}</p>}
                borderRadius='0 1em 1em 0'
            />
            <IconStyle
                color={colorMap[props.faction]}
                fontSize='30px'
                top='-20px'
                position='relative'
                margin=' 0 20px 20px 0'
                after={<img style={{ height: `80%`, width: `80%`, marginTop: `10%`, borderRadius: `50%`, objectFit: 'cover' }} src={props.communityImage}></img>}
            /></div>
    )
}

export default CommunityTag