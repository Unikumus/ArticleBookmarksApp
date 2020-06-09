import React from "react";
import Bookmark from "./bookmark";

const RenderBookmarks = (props) => {

    const rDat = props.props.state.posts.posts
    if (rDat.length === 0) {
        return null;
    }

else {
        return (


                    <div>
                        {rDat.map((el) =>
                        <Bookmark
                            index={el.id}
                            key={el.id}
                            title={el.article.title}
                            url={el.article.url}
                            like={el.like} id={el.id}
                            ratingChange={props.ratingChange}
                            delPress={props.delPress}/>)}

                    </div>


        )
    }

}

export default RenderBookmarks;