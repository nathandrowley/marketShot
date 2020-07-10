import React, { useEffect, useState } from "react";
import "./App.css";
import MarketTable from "./MarketTable";


export default function App() {
  const [data, setData] = useState();
  const [symbol, setSymbol] = useState("");
  
  useEffect(() => {
    const grabData = async () => {
      const apiResult = await fetch(`https://financialmodelingprep.com/api/v3/company/profile/${symbol.toUpperCase()}?apikey=demo`);
      setData(await apiResult.json());
    };
    grabData();
  }, [symbol]);


  return (
      <div className="container">
      <div className="App">
        <br></br>
     <div><img src={require('./MarketShotLogo.png')} alt="Market Shot Logo"/>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" ,}}>
       <h2>Search Companies</h2>
       <h3>Get data, Take your shot</h3>
     
      

      <input value={symbol} onChange={event => setSymbol(event.target.value)} placeholder="Market Symbol (EG AAPL)" />
        <MarketTable data={data} />
      </div>
      {/* <div>
        <h1>This is the raw data</h1>
        <textarea style={{ minHeight: 300, minWidth: 400 }} value={JSON.stringify(data, null, 2)} />
      </div> */}
    </div>
    </div>
    </div>
  
  );
}
