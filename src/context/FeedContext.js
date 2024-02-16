import React, { useState } from "react";
import CommunityDialouge from "../components/dialogue/CommunityDialouge";
import CommunityTag from "../components/tag/CommunityTag";
import Dialouge from "../components/dialogue/Dialouge";

export const FeedContext = React.createContext({
  items: [],
  filterList: (item) => { },
  header: [],
  resetFilter: () => { },
  selectedheader: (item) => { },
  addList: (item) => { }
});


const communityList = [
  <Dialouge
    communityImage={require('../image/ClanSymbol/NarutoClan1.jpg')}
    profileImage='https://static.wikia.nocookie.net/springtimeofyouth/images/d/d4/Itachi_Avatar.png'
    projectImage={require('../image/ProjectImage/projectimage1.png')}
    profileName='Itachi'
    text='just reached a new mile stone for project Highlander!'
    id=''
    faction='Science'
    type='community'
    communityName='kumo'
    comment={true}
  ></Dialouge>,
  <Dialouge
    communityImage={require('../image/ClanSymbol/NarutoClan2.jpg')}
    profileImage='https://i.pinimg.com/736x/5a/89/e4/5a89e4d4bf4ca0e5a91be275c32ed57b.jpg'
    projectImage={require('../image/ProjectImage/projectimage2.png')}
    profileName='Obito'
    text='just started project Astra!'
    id=''
    faction='Technology'
    type='community'
    communityName='konoha'
    comment={true}
  ></Dialouge>,
  <Dialouge
    communityImage={require('../image/ClanSymbol/NarutoClan3.jpg')}
    profileImage='https://i.pinimg.com/originals/42/92/59/429259222e089fdd4a3376f385ff4876.jpg'
    projectImage={require('../image/ProjectImage/projectimage3.png')}
    profileName='Kakashi'
    text='just completed project Juniper!'
    id=''
    faction='Engineering'
    type='community'
    communityName='kriga'
    comment={true}
  ></Dialouge>,
  <Dialouge
    communityImage={require('../image/ClanSymbol/NarutoClan3.jpg')}
    profileImage='https://i.pinimg.com/136x136/91/64/b9/9164b9b1f4ca5ced71c5cffc03a14f60.jpg'
    projectImage={require('../image/ProjectImage/projectimage4.png')}
    profileName='Hinata'
    text='just completed project Master Plan!'
    id=''
    faction='Art'
    type='community'
    comment={true}
    communityName='kriga'
  ></Dialouge>
];


function FeedProvider(props) {
  const [filteredItems, setFilteredItems] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [headerItem, setHeaderItem] = useState([]);
  const [list, setList] = useState(communityList);
  

  const profile = {
    faction: 'Engineering',
    profileName: 'RockLee',
    profileImage: 'https://i.ytimg.com/vi/REFqqRfW2CE/hqdefault.jpg'
  }

  const filterList = (item) => {
    const filtered = list.filter(
      (element) => element.props.communityName === item
    );
    setFilteredItems(filtered);
    setIsFiltered(true);
  };

  const resetFilter = () => {
    setFilteredItems([]);
    setIsFiltered(false);
    setHeaderItem([])
  };

  const addList = (item) => {

    const updatedList = [ 
      <Dialouge
      uploadImage={item.uploadImage}
      communityImage={item.communityImage&&require(item.communityImage)}
      profileImage={profile.profileImage}
      projectImage={item.projectImage&&require(item.projectImage)}
      profileName={profile.profileName}
      text={item.text}
      id=''
      faction={profile.faction}
      type={item.type}
      communityName={item.communityName&&item.communityName}
      comment={true}
      >
      </Dialouge>,
      ...list
    ] 

    return setList(updatedList)
    
  }

  const selectedheader = (item) => {
    setHeaderItem(
      <div style={{ transform: 'scale(1.5)', marginTop:'60px' }}>
        <CommunityTag
          communityName={item.communityName}
          faction={item.faction}
          communityImage={item.communityImage}
        />
      </div>)

  }


  return (
    <FeedContext.Provider
      value={{
        items: isFiltered ? filteredItems : list,
        filterList: filterList,
        resetFilter: resetFilter,
        header: headerItem,
        selectedheader: selectedheader,
        addList: addList,
      }}
    >
      {props.children}
    </FeedContext.Provider>
  );
}

export default FeedProvider;
