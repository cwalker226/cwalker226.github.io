import React from "react";

function Footer() {
    const style = {
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    }
    
    const phantom = {
      display: 'block',
      padding: '20px',
      height: '60px',
      width: '100%',
    }

    return (
        <div>
            <div style={phantom}/>
            <div className="bg-dark" style={style}>
                <div className="container text-white">
                    <p>&copy; Copyright</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;