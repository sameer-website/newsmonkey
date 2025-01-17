import React from 'react'

const NewsItem = (props)=> {
  let  {title, description, imageUrl, url, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "20rem"}}>
        <div style={{display:'flex', justifyContent:'center', position:'absolute', right:'0'}}>
          <span className=" badge rounded-pill bg-danger" > {source}</span>
        </div>
        <img src={!imageUrl?"https://c.ndtvimg.com/2019-07/527i3i5g_flight-generic-pixabay_625x300_27_July_19.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toUTCString()}</small></p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark ">Read more</a>
        </div>
      </div>
      </div>
    )
  }


export default NewsItem
