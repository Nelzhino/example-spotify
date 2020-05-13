import  React, {useState, useRef}  from 'react';
import { useFetch } from '../../Tools/useFetch';
import { CardComponent } from './CardComponent';

const SearchComponent = () => {
    
    const [artist, setArtist] = useState('')
    const [info] = useFetch('search',`?type=artist&limit=15&q=${artist}`) 
    const entrada = useRef()

    const handleChange = (e) => {
        e.preventDefault()
        setArtist(e.target.value)
    }
    
    return (
        <div className="container padding-info">

            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search artist" 
                    onChange={handleChange} ref={entrada}></input>
                <small className="text-white">We can search anybody artist</small>
            </div>

            <div className="mt-5">
                {(!info.isFetching && info.data.hasOwnProperty('error')) &&
                    (<div className="alert alert-danger" role="alert">
                        {info.data.error.message}</div>) 
                }
                {(!info.isFetching && !info.data.hasOwnProperty('error') ) && (
                    <CardComponent element={info.data.artists} /> 
                )}

            </div>
        </div>
    )
}

export default SearchComponent