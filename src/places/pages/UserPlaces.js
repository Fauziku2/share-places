import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world',
    imageUrl: 'https://assets.editorial.aetnd.com/uploads/2016/04/gettyimages-555173607-2.jpg?width=768',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.748492,
      lng: -73.985699
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Emp. State Building',
    description: 'One of the most famous sky scrapers in the world',
    imageUrl: 'https://assets.editorial.aetnd.com/uploads/2016/04/gettyimages-555173607-2.jpg?width=768',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.748492,
      lng: -73.985699
    },
    creator: 'u2'
  }
];
const UserPlaces = () => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return (
    <PlaceList items={loadedPlaces}/>
  )
};

export default UserPlaces;
