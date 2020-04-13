import { types } from 'mobx-state-tree';
import { AsyncStorage } from 'react-native';

const favourite = types.model("favourite", {
  id: types.integer,
  title: types.string,
  release_date: types.string,
  poster_path: types.string,
  vote_average:types.number,
});

const favourites = types.model('favourites', {
  favourites: types.optional(types.array(favourite), [])
});


const FavouriteList = types
  .model('FavouriteList', {
    isLoading: false,
    token: types.string,
    offset: types.integer,
    favouriteLists: types.array(favourite),
    playlist_id: ''
  })
  .actions(self => ({
    async fetchData() {
 
      console.log("good2")
   
      try {
        //  AsyncStorage.clear();
          
          let fav =  await AsyncStorage.getItem("favourites")
             if (fav){
          
              console.log("good")

             self.pushItems(JSON.parse(fav))
   
            }

            console.log("good3")
   
        }catch(error){
        
          alert(error);
          
        }


    },

    pushItems(items) {

console.log("items " + items)


self.favouriteLists = items

    },

    cleanData() {
      self.offset = 0;
      self.favouriteLists = [];
      self.isLoading = false;

      return true;
    }
  }));

export default FavouriteList;
