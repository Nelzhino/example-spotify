import  React  from 'react';
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../Tools/useFetch'
import { transformImage } from './../../Tools/transforms';
import TrackComponent from './TrackComponent';

const ArtistComponent = ({ match }) => {
    const history = useHistory()
    const [ artist ] = useFetch(`artists/${match.params.id}`)
    const [ tops ] = useFetch(`artists/${match.params.id}/top-tracks`,'?country=us')

    
    const redirectToHome = () => {
        history.push('/home')
    }

    return (
        <section className="container m-4" >
            {!artist.isFetching && (
                <div>
                    <div className="row">
                        <div className="col-2">
                            <img src={ transformImage(artist.data.images)} alt="..." className="img-circle"  />
                        </div>
                        <div className="col title-cols">
                            <h3>{ artist.data.name }</h3>    
                            <p>
                                <a href={artist.data.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                                    Go to artist page
                                </a>
                            </p>
                        </div>
                        <div className="col-4 text-right">
                            <button className="btn btn-success" onClick={redirectToHome}>
                                Back
                            </button>
                        </div>
                    </div>  
                    <div className="row mt-5">
                        <div className="col">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>Picture</th>
                                        <th>Album</th>
                                        <th>Track</th>
                                        <th>Preview</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!tops.isFetching && (
                                        tops.data.tracks.map( track =>  <TrackComponent key={track.id} track={track} />)
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>    
                </div>
            )}
        </section>
    )

}

export default ArtistComponent