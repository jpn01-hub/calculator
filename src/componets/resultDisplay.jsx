const ResultDisplay = ({resultados}) => {
  return (
    <div>
      <h2>Resultados</h2>
      <ul className='display'>
        {resultados.map((resultado, index) => (
          <li key={index}>{resultado}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultDisplay;