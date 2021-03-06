import React from 'react';
import { Row, Col, Collection, CollectionItem, Icon } from 'react-materialize';

const AboutPage = () => {
    return (
        <Row>
            <Col m={6} s={12}>
                <Collection header="About Battle-Hero">
                    <CollectionItem>
                        Author: Alex Kayser (2020)
                    </CollectionItem>
                    <CollectionItem>
                        GitHub repository 
                        <a className="secondary-content" href="https://github.com/akctba/battle-hero" >
                            <Icon>send</Icon>
                        </a>
                    </CollectionItem>
                </Collection>
                <Collection header="Made with">
                    <CollectionItem>
                        ReactJS 
                        <a className="secondary-content" href="https://reactjs.org/">
                            <Icon>send</Icon>
                        </a>
                    </CollectionItem>
                    <CollectionItem>
                        Redux 
                        <a className="secondary-content" href="https://react-redux.js.org/">
                            <Icon>send</Icon>
                        </a>
                    </CollectionItem>
                    <CollectionItem>
                        Material Design
                        <a className="secondary-content" href="https://materializecss.com/">
                            <Icon>send</Icon>
                        </a>
                    </CollectionItem>
                    <CollectionItem>
                        React-Materialize
                        <a className="secondary-content" href="http://react-materialize.github.io/">
                            <Icon>send</Icon>
                        </a>
                    </CollectionItem>
                    <CollectionItem>
                        Data provided by Marvel. © 2020 MARVEL API
                        <a className="secondary-content" href="http://marvel.com">
                            <Icon>send</Icon>
                        </a>
                    </CollectionItem>
                
                </Collection>
            </Col>
        </Row>
    );
}

export default AboutPage;