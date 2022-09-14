import React from 'react'
import { Title,Image,Chefoftheweek,BUTTON,Dish,Name,Img,Ttext,Chefoftheweek2, TextChefoftheweek,DishName,Paragraph ,Background} from './styles'
import Chef2 from "./YossiShitrit.svg";
import { Popular,CarouselDiv,Allrestaurants } from './styles';
import { Button, Carousel } from 'react-bootstrap';
import {MdOutlineDoubleArrow} from "react-icons/md"
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Chef = () => {
  const navigate = useNavigate();
  const chefs = useSelector((state:any) => state.chefs.value);
    const onButtonClicked = () =>{
      navigate('/AllChefs');
    };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1.5
  };
  return (
    <Chefoftheweek>
      <TextChefoftheweek>
        <Title className='text'>CHEF OF THE WEEK:</Title>
      </TextChefoftheweek>


      <Chefoftheweek2>
      <Img>
         <Image className='imgg' src={Chef2}/>
      </Img>
      </Chefoftheweek2>
        <Ttext>
          <Paragraph>
              Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades,
              including running the kitchen in his first restaurant,
              the fondly-remembered Violet, located in Moshav  Udim. 
              Shitrit's creativity and culinary acumen born of long experience  
              are expressed in the every detail of each and every dish.
          </Paragraph>
        </Ttext>

      
            <Popular>
              <text>CHEF OF THE WEEK:</text>
            </Popular>
            <Slider {...settings}>
              {chefs && chefs.map((chef:any , key:number) => (
                <DishName key={key}>
                  <Dish> <img className='img' src={chef.pictureURL} alt=""></img> </Dish>
                  <Background>
                        <Name> {chef.name} </Name>
                  </Background>
                </DishName>
              ))}
            </Slider>
            <BUTTON>
               <Button variant=""  onClick={onButtonClicked}> All Chefs <MdOutlineDoubleArrow/></Button>
            </BUTTON>
    </Chefoftheweek>
  )
}

export default Chef