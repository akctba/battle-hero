import React from 'react';
import './HeroCard.css';

const HeroCard = ({ hero, vote }) => {

    if(!hero) {
        return <div>Loading...</div>
    }

    return (
        <div className="card hero-card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" alt={hero.name} src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {hero.name}
                    <i className="material-icons right">more_vert</i>
                </span>
                <p>
                    <button className="btn waves-effect waves-light" onClick={() => { vote() }}>Choose</button>
                </p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                    {hero.name}
                    <i className="material-icons right">close</i>
                </span>
                <p>{hero.description}</p>
                <strong>Participations:</strong>
                <ul>
                    <li>Comics: {hero.comics ? hero.comics.available : 0}</li>
                    <li>Series: {hero.series ? hero.series.available : 0}</li>
                    <li>Stories: {hero.stories ? hero.stories.available : 0}</li>
                    <li>Events: {hero.events ? hero.events.available : 0}</li>
                </ul>
            </div>
        </div>
    );
}

export default HeroCard;