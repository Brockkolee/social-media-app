import React, { useContext } from "react";
import { FeedContext } from '../../context/FeedContext';
const CommunityFeed = (props) => {

  const ctx = useContext(FeedContext)
  const communityList = ctx.items
  const communityHeader = ctx.header

  return (
    <>
      {communityHeader}
      {communityList}
    </>
  );
};

export default CommunityFeed;
