import React, { useContext } from 'react';
import GetData from '../hooks/useGetData';

// test receive data from context
const ShowData = () => {
  const data = useContext(GetData);
  console.log('data', data);
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="item-class">
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.phone}</p>
        </div>    
      ))}
    </>
  )
}

export default ShowData;