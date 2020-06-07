import React from "react";

function Home() {
    return (
        <div className="row">
            <div className="col-md-10 col-sm-12 border">
                <div className="row">
                <div className="col-md-12">
                    <h1 className="border-bottom border-gray">About Me</h1>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <img src="./images/Walker_Corey_2.jpg" className="img-fluid bioPic" alt="Corey Walker"/>
                    <p>Experienced Front-end Software Developer for 10 years with McAfee.  Educated at Brigham Young University - Idaho and Nova Southeastern University with a bachelor’s degree in Computer Information Technology and master’s degree in Information Systems Management, respectively. 
                    Recently earned a certificate for Full Stack Web Development from the University of Oregon, with newly developed skills in Javascript, Node.js, CSS, and responsive web design. 
                    Also, a certified Product Owner and Scrum Master from the Scrum Alliance with current experience as a Product Owner of a proprietary database. Passionate about how end-users interact with websites and software platforms and making a product that leads an industry. 
                    My passion, combined with my leadership skills, unique ability to collaborate, problem-solving  abilities, and determination, make me a strong addition to any engineering team.</p>
                </div>
                </div>                    
            </div>
        </div>
    );
}

export default Home;