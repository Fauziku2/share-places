import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Martin Short',
      image: 'https://i.pinimg.com/550x/5d/d2/c8/5dd2c8f82ef46e0db3fe07a6e3285c2f.jpg',
      places: 3
    }
  ];
  return <UsersList items={USERS} />
}

export default Users;
