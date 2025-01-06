import React from 'react';
import image from '../assets/image.jpg';
import { useDispatch } from 'react-redux';
import { removerItem } from '../store/dataSlice';

const Card = ({ filteredData }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removerItem(id));
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center">
      {filteredData?.map((data) => (
        <div
          className="w-[350px] h-[450px] p-8 gap-1 bg-gray-100 relative overflow-hidden rounded-md"
          key={data.id}
        >
          <p
            className="absolute top-3 right-3 text-xl text-red-600 cursor-pointer active:scale-105 transition-all duration-200 ease-in-out"
            onClick={() => handleRemove(data.id)}
          >
            X
          </p>
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <h1 className="text-md font-semibold">{data.body}</h1>
          <h3 className="text-md text-gray-500">Mon, 06 Jan 2025 14:20 GMT</h3>
          <div className="w-[280px] h-[200px] overflow-hidden rounded-md">
            <img
              src={image}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
