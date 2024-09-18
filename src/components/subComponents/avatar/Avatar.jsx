import React from 'react';

const Avatar = ({ src, alt, size }) => {
  const defaultAvatar =  "https://images.pexels.com/photos/4468805/pexels-photo-4468805.jpeg?auto=compress&cs=tinysrgb&w=800"

  return (
    <img
      src={src || defaultAvatar}
      alt={alt || 'User Avatar'}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover',
      }}
    />
  );
};

export default Avatar;
