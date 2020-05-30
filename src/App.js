import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name : "ramen",
    image : "https://www.lucyrestaurantandbar.com/wp-content/uploads/2019/11/181114130138-korean-food-2620014201204004k-jeonju-bibimbap-full-169.jpg",
    rating:5
  },
  {
    id:2,
    name : "shusi",
    image : "https://img.buzzfeed.com/buzzfeed-static/static/2017-03/29/15/campaign_images/buzzfeed-prod-fastlane-03/26-delicious-korean-foods-you-need-in-your-life-2-30138-1490814365-13_dblbig.jpg",
    rating:4.5
  },
  {
    id:3,
    name : "okonomiyaki",
    image : "https://d37oebn0w9ir6a.cloudfront.net/account_2263/10-great-korean-dishes_bec9d26c1dc39720dce85db945949ac5.jpg",
    rating:3
  }
]

function Food({name2, pic, rating}){
  return  <div>
    <h1>I like {name2}!</h1>
    <h4>{rating}/5.0</h4>
    <img src={pic} alt={name2} />
  </div>
  }

Food.propTypes = {
  name2: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div className="App">
    {foodILike.map(dish => (
      <Food key={dish.id}
            name2={dish.name}
            pic={dish.image}
            rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
 