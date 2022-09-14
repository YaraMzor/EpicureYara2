import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {Information2,Picture,ChefName,Chefs,Allchefs,CHEFS,IMG,ButtonGroup,GroupButton} from './styles'

const AllChefs = () => {

    const chefs = useSelector((state:any) => state.chefs.value);
    const [filteredchefs ,setfilteredchefs] = useState<[]>([]);

    useEffect(()=>{
      fiterRests("All");
    },[]);
    
    const fiterRests = (statu: string) => {
      const filtered = chefs.filter((chef :any )  => chef.status.includes(statu));
      setfilteredchefs(filtered);
    }

  return (
    <Allchefs>

        <CHEFS>CHEFS</CHEFS>

        <ButtonGroup>
            <GroupButton onClick={() =>{fiterRests("All");}}>All</GroupButton>
            <GroupButton onClick={() =>{fiterRests("New");}}>New</GroupButton>
            <GroupButton onClick={() =>{fiterRests("MostViewd");}}>Most Viewd</GroupButton>
      </ButtonGroup>

          {filteredchefs.map((chef:any , key:number) => (
        <Chefs key={key}>
         <Picture> <IMG src={chef.pictureURL}  alt=""/></Picture>
         <Information2>
               <ChefName> {chef.name}</ChefName>
         </Information2>
        </Chefs>   
       ))}
    </Allchefs>

  
  )
}

export default AllChefs