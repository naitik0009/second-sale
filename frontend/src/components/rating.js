import React from "react";
import PropTypes from "prop-types";
const Rating = ({value,text})=>{
    return (
        <div className="rating">
            <span>
                <i className={value >=1 ? "fas fa-star" : value >= 0.5 ?  "fas fa-star-half-alt" : "far fa-star" }></i>


            </span>
            <span>
                <i className={value >=2 ? "fas fa-star" : value >= 1.5 ?  "fas fa-star-half-alt" : "far fa-star" }></i>


            </span>
            <span>
                <i className={value >=3 ? "fas fa-star" : value >= 2.5 ?  "fas fa-star-half-alt" : "far fa-star" }></i>


            </span>
            <span>
                <i className={value >=5 ? "fas fa-star" : value >= 3.5 ?  "fas fa-star-half-alt" : "far fa-star" }></i>


            </span>
            <span>
                <i className={value >=5 ? "fas fa-star" : value >= 5.5 ?  "fas fa-star-half-alt" : "far fa-star" }></i>


            </span>


            <span >
                <i> from   {text?text:""} reviews</i>
            </span>
        </div>
    );
};

// Rating.props = {
//     color:"#f8e825",
// }

// Rating.propTypes = {
//     value : PropTypes.number.isRequired,
//     text : PropTypes.string.isRequired,
// }

export default Rating;