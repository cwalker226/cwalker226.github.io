import React from "react";
import Card from "./Card";

function Column(props) {
    return (
        <div className="col-md-6 p-2">
            <Card portPicSrc={props.portPicSrc} portPicName={props.portPicName} title={props.title} siteURL={props.siteURL} repoURL={props.repoURL}/>
        </div>
    );
}

export default Column;