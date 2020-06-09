import React from 'react';
import './App.css';
import {createBookmark, fetchPosts, ratingChange} from "./actions/actions";
import {connect} from "react-redux";
import {DELETE_BOOKMARK} from "./actions/types";
import RenderBookmarks from "./components/renderBookmarks";

function App(props) {

    const press1 = () => {
        props.fetchPosts('frontend')
    };
    const press2 = () => {
        props.fetchPosts('reactjs')
    };
    const press3 = () => {
        props.fetchPosts('vuejs')
    };
    const press4 = () => {
        props.fetchPosts('angular')
    };

    // const onDragEnd = () => {}

    return (


            <div className={"mainContainer"}>
                <div className={"container"}>
                    <div className={"inputBar"}>
                        <div className={"inputWrapper"}>

                            <button className={"searchBtn"} onClick={press1}>frontend</button>
                            <button className={"searchBtn"} onClick={press2}>reactjs</button>
                            <button className={"searchBtn"} onClick={press3}>vuejs</button>
                            <button className={"searchBtn"} onClick={press4}>angular</button>

                        </div>
                    </div>

                    <div className={"topBar"}>
                        <div>Links</div>

                    </div>

                    <h1>Article list</h1>

                    <RenderBookmarks props={props}
                                     ratingChange={props.ratingChange}
                                     delPress={props.delPress}
                                     key={RenderBookmarks.id}/>


                </div>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addBookmark: () => {
            dispatch(createBookmark());
        },

        fetchPosts: (subreddit) => {
            dispatch(fetchPosts(subreddit));
        },


        ratingChange: (id) => {
            dispatch(ratingChange(id));

        },

        delPress: (id) => {
            dispatch({type: DELETE_BOOKMARK, id: id})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
