import React from "react";
import Column from "./Column";

function Row(props) {
    return (
        <div className="row p-2">
            <Column portPicSrc={props.portPicSrc1} portPicName={props.portPicName1} title={props.title1} siteURL={props.siteURL1} repoURL={props.repoURL1}/>
            <Column portPicSrc={props.portPicSrc2} portPicName={props.portPicName2} title={props.title2} siteURL={props.siteURL2} repoURL={props.repoURL2}/>
        </div>
    );
}

export default Row;