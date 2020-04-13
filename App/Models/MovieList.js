import { types } from 'mobx-state-tree';
import { flow } from "mobx-state-tree"

const movielists = types.model('movielists', {
 // id: types.integer,
  title: types.string,
  id: types.integer,
  release_date: types.string,
  poster_path: types.string,
  vote_average:types.number,
//  owner: owner
});

const movieList = types
  .model('Movie', {
    isLoading: false,
    search: 'all',
    api_key: types.string,
    offset: 1,
    movieLists: types.array(movielists)
  })
  .actions(self => ({
    fetchData() {
      // if (!self.setupData()) {
      //   return fail;
      // }

      self.isLoading = false
      
      try {
        const res = fetch(
          'https://api.themoviedb.org/3/search/movie?query=' + self.search + '&api_key=6ecd5c3e174227a08495486900c9bbd1&page=' +
            self.offset,

          {
            method: 'GET',
            headers: {
              //this what's exactly look in my postman
              Authorization: 'Bearer ' + self.token
            }
          }
        )
          .then(response => {
            return response.json();
          })
          .then(responseJson => {
            console.log(responseJson);


            self.pushItems(responseJson.results);
          

            //  return responseJson.playlists.items
          });
      } catch (error) {
        console.log('error: ', error);
        self.error = error;
        self.setupData('empty')
      }

    },

    pushItems(items) {

      self.isLoading = true;


      for (const item of items) {

if (item.poster_path == null){

  item.poster_path = "2jak8llXvSEE6cXfmKNqX58XjKv.jpg"
}

        self.movieLists.push(item);
      }




    },

    setupData(query) {
      self.isLoading = true;
      self.offset = 1;
      self.movieLists = [];
      self.search = query;
      console.log("query" + self.search)
      //self.fetchData();
      return true;
    }
  }));

export default movieList;
