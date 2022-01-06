//custom hook in react need to start with 'use'
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [ispending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
  useEffect(() => {
    const abortCont = new AbortController();

        fetch(url,{signal: abortCont.signal})
          .then(response => {
            if (!response.ok) {
              throw Error('Could not fetch data for that resource');
            }
            return response.json();
            })
            .then(data => {
              setData(data);
              setIsPending(false);
              setError(null); //set error to null
            })
          .catch(err => {
            if (err.name === 'AbortError') {
              console.log('fetch aborted')
            } else {
              setIsPending(false); //so ispending is false, no showing loading...
              setError(err.message);              
            }
          })
    return () => abortCont.abort();
    }, [url]);

    return {data, ispending, error}
}

export default useFetch;


