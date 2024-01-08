import React from 'react'

function Card(props) {
    const {data}  = props;
    const {imagePath,cardTitle, cardText, cardLink, linkTitle } = data
    return (
        <div className="card" style={{width: 200}}>
        <img className="card-img-top" src={imagePath} />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardText}</p>
          <a href= {cardLink} className="btn btn-primary">{linkTitle}</a>
        </div>
      </div>
    )
}

export default Card
