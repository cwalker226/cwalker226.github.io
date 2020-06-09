import React from "react";
import Row from "../Row";
import portfolio from "../../portfolio.json";

function Portfolio() {
    return (
        <div className="row">
            <div className="col-md-10 col-sm-12 border">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="border-bottom border-gray">Portfolio</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                    {portfolio.map(item => {
                        return(<Row
                            portPicSrc1={item.portPicSrc1}
                            portPicName1={item.portPicName1}
                            title1={item.title1}
                            siteURL1={item.siteURL1}
                            repoURL1={item.repoURL1}
                            portPicSrc2={item.portPicSrc2}
                            portPicName2={item.portPicName2}
                            title2={item.title2}
                            siteURL2={item.siteURL2}
                            repoURL2={item.repoURL2}
                        />);
                    })}                    
                </div>
              </div>                    
            </div>
        </div>
    );
}

export default Portfolio;