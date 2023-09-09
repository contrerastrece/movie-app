import { useState, useEffect } from 'react';

function useFetch(url) {
  const baseUrl ='https://api.themoviedb.org/3/';
  const lng='?language=es-ES';
  const page='&page=1';
  const link=baseUrl+url+lng+page;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGI2NzViNTBjZDRhMmM5NjRhYmNjNzA1OTU3ZTgzMCIsInN1YiI6IjY0ZWUwZDdiNGNiZTEyMDBmZTBkODE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.acB_V0mV7MkKdHm4zxT8XHxg9W39Uz5qmacUwyoY63c",
    },
  };
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(link,options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [link]);

  return { data, loading, error };
}

export default useFetch;
