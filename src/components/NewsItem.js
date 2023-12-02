import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iIrrdMVnaO4M/v0/1200x824.jpg":imageUrl}
        className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
