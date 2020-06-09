import {ADD_BOOKMARK, FETCH_POSTS, RATING_CHANGE, SELECT_RANDOM_ITEM} from "./types";

export function createBookmark() {
        return{
            type: ADD_BOOKMARK,
            setArticle:  {id: 4, title: 'Title_4'}
        }
}
export function ratingChange(id) {
        return{
            type: RATING_CHANGE,
            id: id
        }
}

export function selectRandomBookmark(randItem) {
        return{
            type: SELECT_RANDOM_ITEM,
            randItem
        }
}

function arrayRandElement(arr) {
    let rand = Math.floor(Math.random()*arr.length);
    return arr[rand];
}


export function fetchPosts(subreddit) {
    return async dispatch =>{
      const response =await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const json = await response.json();

if(json.data !== undefined){

let fetchData = json.data.children.map(child => child.data);

    let fetchRandData = arrayRandElement(fetchData);
        dispatch(
            {   type: FETCH_POSTS,
                payload: fetchData,
                randD: fetchRandData
            })
}
    }


}

