import React from 'react';
import { Card, CardTitle, Icon, Button } from 'react-materialize';

const HeroCard = (props) => {

    const { hero } = props;

    console.log(hero);

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
        header={<CardTitle image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}><span className="heroname">{hero.name}</span></CardTitle>}
            revealIcon={<Icon>more_vert</Icon>}
            >
            {hero.description}
        </Card>
    );
}

export default HeroCard;