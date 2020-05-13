import React  from 'react';
import { CardComponent } from './CardComponent';
import { useFetch } from '../../Tools/useFetch'

const HomeComponent = () => {
    const [info] = useFetch('browse/new-releases')
    return (
        <div className="container padding-info">
          {
           (!info.isFetching && info.data.hasOwnProperty('error')) && 
            (
              <div className="alert alert-danger" role="alert">
                  {info.data.error.message}</div>
            ) 
          }
          {
            (!info.isFetching && !info.data.hasOwnProperty('error')) &&
            <CardComponent element={info.data.albums} />
          }
        </div>
    )

}

export default HomeComponent