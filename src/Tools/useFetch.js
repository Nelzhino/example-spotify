import  { useEffect, useState } from 'react';
import queryString from 'query-string'
import { END_POINT } from './url';


export const useFetch = (url, query="", methodState="GET", initialState = {}) => {
    const [ data, setData ] = useState(initialState)
    const [ isFetching, setFetching ] = useState(true)

    useEffect(() => {

      const params = queryString.parse(query)
      const values =  Object.values(params)
      const verValues = values.filter( Boolean )
      
      const fetchData = async () => {
        try {
          const OPTIONS = {
            method: methodState,
            headers: {  
              Authorization: `Bearer  ${END_POINT.TOKEN_API}`
            }
          };      
          const response = await fetch( END_POINT.URL_API + url + query, OPTIONS );
          const json = await response.json()
          setData(json)
          setFetching(false)
        } catch (error) {
          setData(error)
        }
      }

      if(values.length === verValues.length){
        setFetching(true)  
        fetchData();
      }
      
    }, [url, query, methodState])
  
    return [
      {isFetching,
       data}
    ]
  }