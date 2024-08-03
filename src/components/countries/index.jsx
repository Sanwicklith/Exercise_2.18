const Countries = ({ countries, handleClick }) => {
  return countries.map((country, i) => {
    return (
      <div key={i} style={{display:'flex'}} >
        <p >{country.name.common}</p>
        <button onClick={()=> handleClick(country.name.common)}>Show</button>
      </div>
    );
  });
};

export default Countries;
