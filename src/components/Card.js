import React from "react";

function Card(props) {
    return (
        <div className="card text-center h-100">
            <img className="card-img portImg" src={props.portPicSrc} alt={props.portPicName}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <a href={props.siteURL} className="card-link">Live Site</a>
                <a href={props.repoURL} className="card-link">GitHub Repo</a>
            </div>
        </div>
    );
}

export default Card;