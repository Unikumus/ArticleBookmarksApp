import {
    ADD_BOOKMARK,
    DELETE_BOOKMARK,
    FETCH_POSTS,
    RATING_CHANGE,
    SELECT_RANDOM_ITEM,

} from "../actions/types";

const initialState = {
    posts: [],
    fetchedPosts: [],
    isFetching: false,
    randBookmarks: [],
};


const bookmarkReduser = (state = initialState, action) => {

    switch (action.type) {

        case ADD_BOOKMARK:
            return {...state, posts: [...state.posts, action.setArticle]};

        case DELETE_BOOKMARK:{
            let newPosts = state.posts.filter(post => {
                return action.id !==post.id
            });
            return {
                ...state,
                posts: newPosts
            }
            }

        case FETCH_POSTS:

            let newID = state.posts.length +1;
            let newItem = {id:newID, article: action.randD, like: 0};

            return {...state,
                fetchedPosts: action.payload,
                isFetching: true,
                randBookmarks: [...state.randBookmarks, action.randD ],
                posts: [...state.posts, newItem ],

            };

        case SELECT_RANDOM_ITEM:
            return {...state, randBookmarks: action.randItem};

        case RATING_CHANGE:{

            let newPostsLike = state.posts.map(function (val) {

                if (val.id === action.id) {

                val.like === 1
                    ? (val.like = 0)
                    : (val.like = 1)
                }

                return val
                });
            return {...state, posts: newPostsLike}
             }

            default: return state
    }

};

export default bookmarkReduser