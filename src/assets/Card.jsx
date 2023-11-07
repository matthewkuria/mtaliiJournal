import React from "react";

export default function Card(props){
    return(
       <div className="card">
         <img src={props.img} alt={props.title}
         className="card--image" />
         <div className="card--stats">
            <div className="location--details">
            <img src="../locationlogo.png" alt="" className="location--logo" />
            <h5 className="country">{props.country}</h5><a href={props.link} className="card--link">View on Google Maps</a>
            </div>
            <h3 className="card--title">{props.title}</h3>
            <h4>{props.date}</h4>
            <p className="card--desc">{props.description}</p>
         </div>
         <hr />
       </div>
    )
}