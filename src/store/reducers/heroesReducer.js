



const heroInitialData = {
    "heroes": {
        "code": 200,
        "status": "Ok",
        "copyright": "© 2020 MARVEL",
        "attributionText": "Data provided by Marvel. © 2020 MARVEL",
        "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2020 MARVEL</a>",
        "etag": "db0fb719d19ff0958298e52bc93fafc63e17d25f",
        "data": {
            "offset": 0,
            "limit": 20,
            "total": 1493,
            "count": 20,
            "results": []
        }
    }
}

const heroesReducer = (state=heroInitialData, action) => {
    return state;
}

export default (heroesReducer);