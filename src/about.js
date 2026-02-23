import React from 'react';

const AboutPage = () => {
    return (
        <div className="row">
            <div className="col m6 s12">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>About Battle-Hero</h4></li>
                    <li className="collection-item">Author: Alex Kayser (2020)</li>
                    <li className="collection-item">
                        GitHub repository
                        <a className="secondary-content" href="https://github.com/akctba/battle-hero" target="_blank" rel="noreferrer">
                            <i className="material-icons">send</i>
                        </a>
                    </li>
                </ul>
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Made with</h4></li>
                    <li className="collection-item">
                        ReactJS
                        <a className="secondary-content" href="https://reactjs.org/" target="_blank" rel="noreferrer">
                            <i className="material-icons">send</i>
                        </a>
                    </li>
                    <li className="collection-item">
                        Material Design
                        <a className="secondary-content" href="https://materializecss.com/" target="_blank" rel="noreferrer">
                            <i className="material-icons">send</i>
                        </a>
                    </li>
                    <li className="collection-item">
                        Redux
                        <a className="secondary-content" href="https://react-redux.js.org/" target="_blank" rel="noreferrer">
                            <i className="material-icons">send</i>
                        </a>
                    </li>
                    <li className="collection-item">
                        React-Router
                        <a className="secondary-content" href="https://reactrouter.com/" target="_blank" rel="noreferrer">
                            <i className="material-icons">send</i>
                        </a>
                    </li>
                    <li className="collection-item">
                        Data provided by Marvel. © 2020 MARVEL API
                        <a className="secondary-content" href="http://marvel.com" target="_blank" rel="noreferrer">
                            <i className="material-icons">send</i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AboutPage;