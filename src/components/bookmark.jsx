import React from "react";
import star_1 from '../img/star-1.png'
import star_2 from '../img/star-2.png'
import trash from '../img/trash.png'
import '../App.css';

const Bookmark = (props) => {

    const pressStar = () =>{
        let iconID = props.id;
        props.ratingChange(iconID)
    };

    const renderLike = () =>{

        if(props.like === 1){
            return(
              <img src={star_1} alt="rating" width={"20px"} height={"20px"} onClick={pressStar} />
            )
        }
        return( <img src={star_2} alt="rating" width={"20px"} height={"20px"} onClick={pressStar}/>)
    };

    const press =() =>{
        props.delPress(props.id)
    };

let articlTite = props.title.substr(0, 80) + "...";
    return (
               <div
                    className={"bookmarksItem"}>
                    <div>{renderLike()}</div>

                    <div className={"bookmarksItemTitle"} >
                        <a target={"_blank"}  href={props.url}>{articlTite}</a>
                    </div>

                    <img src={trash} alt="trash" width={"20px"} height={"20px"} onClick={press} />
                </div>
    )

};

export default Bookmark;