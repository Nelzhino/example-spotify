import React from 'react';
import { useHistory } from 'react-router-dom' 
import { transformImage } from './../../Tools/transforms';


export const CardComponent = ({ element }) => {

    const history = useHistory()
    
    const showArtist = (item) => {
        let artistId;
        if(item.type === 'artist'){
            artistId = item.id;
        }
        else{
            artistId = item.artists[0].id;
        }

        history.push(`/artist/${artistId}`)
    }

    return (
        <div>
            {<div className="card-columns m-5">
                {element.items.map( item => (
                    <div key={item.id} className="card pointer-card" onClick={ showArtist.bind(this, item) }>
                        <img className="card-img-top" src={ transformImage(item.images) } alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">
                                {(item.artists !== undefined)?
                                    item.artists.map( artist => (
                                        <span className="badge badge-primary mr-2" key={artist.id}>
                                            { artist.name }
                                        </span>
                                    ))
                                    :
                                    <span className="badge badge-primary mr-2" key={item.id}>
                                        { item.name }
                                    </span>
                                }
                            </p>
                        </div>
                    </div>)
                    )}
                </div>   
            }
        </div>
    )
}