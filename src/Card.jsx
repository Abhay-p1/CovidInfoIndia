import React from 'react';
const Card = (props)=>{
  return (
  <>
  <div class="card largecard" id={props.val}>
  <div class="card-body">
  <p className="cardname">{props.our} <span className="title"> {props.title} </span></p>
  <p className="cardno cardsm">{props.number}</p>
  </div>
  </div>
  </>
  );
}
export default Card;