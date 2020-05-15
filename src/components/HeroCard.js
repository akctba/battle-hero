import React from 'react';
import { Card, CardTitle, Icon, Button } from 'react-materialize';

const HeroCard = (props) => {

    const { hero } = props;

    if(!hero) {
        return <div>Loading...</div>
    }

    return (
        <Card
            actions={[
                <Button key="1" onClick={()=>{alert(hero.id)}}>Choose</Button>,
                <Button key="2" onClick={()=>{alert('info')}}>+Info</Button>
            ]}
            closeIcon={<Icon>close</Icon>}
        header={<CardTitle image="https://materializecss.com/images/sample-1.jpg"><span className="heroname">{hero.name}</span></CardTitle>}
            revealIcon={<Icon>more_vert</Icon>}
            >
            Hero story.
        </Card>
    );
}

export default HeroCard;