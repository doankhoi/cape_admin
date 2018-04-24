import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="ui container center aligned errorcontainer">
                    <h1 className="ui header inverted">
                        Oooops! Sorry The Page Not Found :(
                    </h1>
                    <Link to="/kb" className="ui button">Return the Homepage</Link>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;


