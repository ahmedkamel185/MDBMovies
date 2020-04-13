import React from 'react';
import {AsyncStorage } from 'react-native';

 const addToFavourites = async( movie ) => {
  // This will return the PlayList row component


   var favourites = []
    
try {
// AsyncStorage.clear();
  
  let fav =  await AsyncStorage.getItem("favourites")
     
  if (fav){
      favourites = JSON.parse(fav)


      const index = favourites.findIndex(item => item.title === movie.title);

if (index >= 0)
{

alert("The Item already exists")

}else{

  
favourites.push({id: movie.id,title: movie.title,poster_path: movie.poster_path,release_date: movie.release_date,vote_average: movie.vote_average}) 

    AsyncStorage.setItem("favourites",JSON.stringify(favourites))
  
    alert("The item has been added to your favourites")

}

}else{


  
  favourites.push({id: movie.id,title: movie.title,poster_path: movie.poster_path,release_date: movie.release_date,vote_average: movie.vote_average}) 

console.log('sss' 
+ favourites.length)

AsyncStorage.setItem("favourites",JSON.stringify(favourites))


alert("The item has been added to your favourites")

}
    

}catch(error){

  alert(error);
  
}}

export default {addToFavourites};












