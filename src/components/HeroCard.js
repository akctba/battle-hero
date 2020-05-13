import React from 'react';
import { Card, CardTitle, Icon, Button } from 'react-materialize';

const HeroCard = () => {
    return (
        <Card
      actions={[
        <Button key="1" onClick={()=>{alert('yes')}}>Choose</Button>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Hero Name</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Hero story.
    </Card>
    );
}

export default HeroCard;