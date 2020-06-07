import React from "react";

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
                    <div className="row p-2">
                        <div className="col-md-6 p-2">
                            <div className="card text-center h-100">
                                <img className="card-img portImg" src="./images/Wallaby.PNG" alt="Wallaby Meal Search"/>
                                <div className="card-body">
                                    <h5 className="card-title">Wallaby</h5>
                                    <a href="https://cwalker226.github.io/Project-1/" className="card-link">Live Site</a>
                                    <a href="https://github.com/cwalker226/Project-1" className="card-link">GitHub Repo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-2">
                            <div className="card text-center h-100">
                                <img className="card-img portImg" src="./images/randomPassword.PNG" alt="Random Password Generator"/>
                                <div className="card-body">
                                    <h5 className="card-title">Random Password Generator</h5>
                                    <a href="https://cwalker226.github.io/randomPassword/" className="card-link">Live Site</a>
                                    <a href="https://github.com/cwalker226/randomPassword" className="card-link">GitHub Repo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-md-6 p-2">
                            <div className="card text-center h-100">
                                <img className="card-img portImg" src="./images/Cangaroo.PNG" alt="Food Bank Inventory"/>
                                <div className="card-body">
                                    <h5 className="card-title">Cangaroo</h5>
                                    <a href="https://cangaroo.herokuapp.com/" className="card-link">Live Site</a>
                                    <a href="https://github.com/cwalker226/Cangaroo" className="card-link">GitHub Repo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-2">
                            <div className="card text-center h-100">
                                <img className="card-img portImg" src="./images/weatherDashboard.PNG" alt="Wallaby Meal Search"/>
                                <div className="card-body">
                                    <h5 className="card-title">Weather Dashboard</h5>
                                    <a href="https://cwalker226.github.io/weatherDashboard/" className="card-link">Live Site</a>
                                    <a href="https://github.com/cwalker226/weatherDashboard" className="card-link">GitHub Repo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-md-6 p-2">
                            <div className="card text-center h-100">
                                <img className="card-img portImg" src="./images/NoteTaker.PNG" alt="Note Taker"/>
                                <div className="card-body">
                                    <h5 className="card-title">Note Taker</h5>
                                    <a href="https://sheltered-oasis-78510.herokuapp.com/" className="card-link">Live Site</a>
                                    <a href="https://github.com/cwalker226/noteTaker" className="card-link">GitHub Repo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-2">
                            <div className="card text-center h-100">
                                <img className="card-img portImg" src="./images/burger-logo-by-vexels.png" alt="Eat Da Burger"/>
                                <div className="card-body">
                                    <h5 className="card-title">Eat Da Burger</h5>
                                    <a href="https://safe-sierra-21477.herokuapp.com/" className="card-link">Live Site</a>
                                    <a href="https://github.com/cwalker226/burger" className="card-link">GitHub Repo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>                    
            </div>
        </div>
    );
}

export default Portfolio;