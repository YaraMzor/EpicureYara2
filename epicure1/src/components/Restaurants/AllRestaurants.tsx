import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
// import { fetchRestaurants } from '../../fetchRestaurants'
// import { addRestaurant } from './restaurantsSlicer';
import {GroupButton,Information2,ButtonGroup,Text,Picture,RestaurantName,ChefName,Restaurants,AllRestaurant} from './styles'


const AllRestaurants = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
 // const onAddClicked = async() => {
 //   dispatch(addRestaurant({name,chef,img}));
 // }
  // const onButtonClicked = () =>{
  //   navigate('/HomePage');
  // };
  const restaurants = useSelector((state:any) => state.restaurants.value);
  const [filteredRestaurants ,setfilteredRestaurants] = useState<[]>([]);

  useEffect(()=>{
    fiterRests("All");
  },[]);
  
  const fiterRests = (statu: string) => {
    const filtered = restaurants.filter((restaurant :any )  => restaurant.status.includes(statu));
    setfilteredRestaurants(filtered);
  }
  

  return (
    <AllRestaurant className='row'>
      <div>
        RESTAURANTS
      </div>
      <ButtonGroup>
        <GroupButton onClick={() =>{fiterRests("All");}}>All</GroupButton>
        <GroupButton onClick={() =>{fiterRests("new");}}>New</GroupButton>
        <GroupButton onClick={() =>{fiterRests("MostPopular");}}>Most Popular</GroupButton>
        <GroupButton onClick={() =>{fiterRests("OpenNow");}}>Open Now</GroupButton>
      </ButtonGroup>

      {/* <div>
        {
          restaurants
          .filter((restaurant :any , key:number) => restaurant === "New")
          .map((restaurant :any , key:number ) => (
            <Restaurants key={key}>
            <Picture> <img  src={restaurant.pictureURL}  alt=""/></Picture>
            <Information2>
                  <RestaurantName>{restaurant.name} </RestaurantName>
                  <ChefName> {restaurant.chef}</ChefName>
            </Information2>
           </Restaurants>  

          ))
        }
      </div> */}
    
 
      
      {filteredRestaurants.map((filteredRestaurants:any , key:number) => (
       <Restaurants key={key}>
        <Picture> <img  src={filteredRestaurants.pictureURL}  alt=""/></Picture>
        <Information2>
              <RestaurantName>{filteredRestaurants.name} </RestaurantName>
              <ChefName> {filteredRestaurants.chef}</ChefName>
        </Information2>
       </Restaurants>   
      ))}
    </AllRestaurant>
  );
}

export default AllRestaurants

