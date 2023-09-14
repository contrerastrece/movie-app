import React from 'react'
import useFetch from '../hook/useFetch';
import Card from './Card';

const Recomendations = ({id}) => {
  const urlRecomendations = `movie/${id}/recommendations`;
  const { data, loading } = useFetch(urlRecomendations);

  return (
    <>
    <h2>Recomendations 🫰</h2>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Card
          data={data.results.filter((e) => e.poster_path).slice(0, 6)}
          loading={loading}
        />
      )}
    </>
  );
}

export default Recomendations