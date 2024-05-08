import React from 'react'

function NewsItem(props) {
  // console.log(props);
  let cardStyle = {
    height: '600px',
    backgroundColor: 'white',
    color: 'black' 
    
  };
  return (
    <>
     <div className="col">
    <div className="card" style={cardStyle}>
      <img src={props.idata} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.dec}</p>
    <a to={props.url}>More News</a>
      </div>
    </div>
  </div> </>
  )
}

export default NewsItem
