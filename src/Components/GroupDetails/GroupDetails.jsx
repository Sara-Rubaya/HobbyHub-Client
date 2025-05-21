import React from 'react';
import { useLoaderData } from 'react-router';
import DetailsCard from './DetailsCard';

const GroupDetails = () => {
  const group = useLoaderData(); // single object, not array

  return (
    <div>
      <DetailsCard group={group} />
    </div>
  );
};

export default GroupDetails;
