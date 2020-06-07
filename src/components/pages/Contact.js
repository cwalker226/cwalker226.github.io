import React from "react";

function Contact() {
    return (
        <div className="row">
            <div className="col-md-10 col-sm-12 border">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="border-bottom border-gray">Contact</h1>
                    </div>
                </div>
                <div className="row formRow">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group">
                                <label for="inputName">Name</label>
                                <input type="text" className="form-control" id="inputName" placeholder="John Smith"/>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="example@gmail.com"/>
                            </div>
                            <div className="form-group">
                                <div className="form-group">
                                    <label for="messageTextarea">Message</label>
                                    <textarea className="form-control" id="messageTextarea" rows="8"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>                    
                </div>
            </div>
        </div>
    );
}

export default Contact;