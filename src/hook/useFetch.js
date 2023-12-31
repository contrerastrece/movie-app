import { useState, useEffect } from "react";

function useFetch(url) {
  const baseUrl = "https://api.themoviedb.org/3/";
  const lng = url.includes("?") ? "&language=en-US" : "?language=en-US";
  // const page = "&page=1";
  const vote_average = '&vote_average.gte=5';
  const release_date='&release_date.gte=2000-01-01';
  const air_date='&air_date.gte=2000-01-01'
  const watchRegion = "?watch_region=PE";
  const sort = `&sort_by=popularity.desc`;
  const link = baseUrl + url + lng  + sort + vote_average;
  // console.log(link);
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
        const response = await fetch(link, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
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
