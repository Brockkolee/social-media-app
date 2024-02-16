import React, { useState } from 'react';
import { Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import RecommendIcon from '@mui/icons-material/Recommend';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CelebrationIcon from '@mui/icons-material/Celebration';
import IconStyle from '../CircleBorder';
import './ProjectActivities.scss';


const ProjectActivities = (props) => {

  const factionColor = props.factionColor
  const [checkedDate, setCheckedDate] = useState({
    task1: '',
    task2: '',
    task3: '',
  });

  const handleCheckboxChange = (task) => {
    setCheckedDate((prevCheckedDate) => ({
      ...prevCheckedDate,
      [task]: getDate(),
    }));
  };



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

  function getDate() {
    const today = new Date()
    const month2 = new Date().toLocaleString("en-US", { month: "short" });
    const month = today.getMonth();
    const year = today.getFullYear() % 100;
    const date = today.getDate();
    return `${date} ${month2} ${year}`;
  }

  return (
    <div className="project-activities">
      <h3 style={{marginBottom:'30px'}}>
        Your Project
      </h3>
      <div className="project-container">
        <IconStyle
          color={factionColor}
          fontSize='30px'
          position='relative'
          left='5px'
          after={<img style={{ height: `80%`, width: `80%`, marginTop: `10%`, borderRadius: `50%` }} src={'https://static.vecteezy.com/system/resources/previews/003/738/370/original/management-project-icon-free-vector.jpg'}></img>}
          height='150px'
          width='150px'
        />
        <div style={lineBefore}>
        </div>
        <IconStyle
          color={factionColor}
          fontSize='30px'
          position='relative'
          left={'40px'}
          after={<img style={{ height: `80%`, width: `80%`, marginTop: `10%`, borderRadius: `50%` }} src={require('../../image/Logo.jpg')}></img>}
          height='100px'
          width='100px'
        />
      </div>
      <div className='project-details'>
        <div className="project-summary">
          <div className='project-summary-items'>
            <EventBusyIcon style={{ fontSize: '45px', alignSelf: `center` }} />
            <p style={{ paddingLeft: `5px`, fontWeight: `bold` }}>5 days</p>
          </div>
          <div className='project-details-items'>
            <RecommendIcon style={{ fontSize: '45px', alignSelf: `center` }} />
            <p style={{ paddingLeft: `5px`, fontWeight: `bold` }}>3 Like</p>
          </div>
          <div className='project-details-items'>
            <CelebrationIcon style={{ fontSize: '45px', alignSelf: `center` }} />
            <p style={{ paddingLeft: `5px`, fontWeight: `bold` }}>2 cheers</p>
          </div>
          <div className='project-details-items'>
            <EmojiEventsIcon style={{ fontSize: '45px', alignSelf: `center` }} />
            <p style={{ paddingLeft: `5px`, fontWeight: `bold` }}>$30</p>
          </div>
        </div>
        <div className="project-task">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={() => handleCheckboxChange('task1')} />}
              label={
                <span>Task 1
                  <Typography style={{ fontSize: '14px', display: 'inline' }} fontStyle="italic">
                    {`   ${checkedDate.task1 && `${checkedDate.task1}`}`}
                  </Typography>
                </span>
              }
            />
            <FormControlLabel
              control={<Checkbox onChange={() => handleCheckboxChange('task2')} />}
              label={
                <span>Task 2
                  <Typography style={{ fontSize: '14px', display: 'inline' }} fontStyle="italic">
                    {`   ${checkedDate.task2 && `${checkedDate.task2}`}`}
                  </Typography>
                </span>
              }
            />
            <FormControlLabel
              control={<Checkbox onChange={() => handleCheckboxChange('task3')} />}
              label={
                <span>Task 3
                  <Typography style={{ fontSize: '14px', display: 'inline' }} fontStyle="italic">
                    {`   ${checkedDate.task3 && `${checkedDate.task3}`}`}
                  </Typography>
                </span>
              }
            />
          </FormGroup>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default ProjectActivities