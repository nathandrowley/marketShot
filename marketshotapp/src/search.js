import React, { useEffect, useState } from "react";
import "./styles.css";
import MarketTable from "./MarketTable";

export default function App() {
  const [data, setData] = useState();
  const [symbol, setSymbol] = useState("AAPL");

  useEffect(() => {
    const grabData = async () => {
      const apiResult = await fetch(`https://financialmodelingprep.com/api/v3/company/profile/${symbol}?apikey=0741c5e674225d8d08372ba8d6420d93`);
      setData(await apiResult.json());
    };
    grabData();
  }, [symbol]);

  return (
    <div className="App">
      <input value={symbol} onChange={event => setSymbol(event.target.value)} placeholder="Market Symbol (EG AAPL)" />
      <div>
        <h1>This is a table</h1>
        <MarketTable data={data} />
      </div>
      <div>
        <h1>This is the raw data</h1>
        <textarea style={{ minHeight: 300, minWidth: 400 }} value={JSON.stringify(data, null, 2)} />
      </div>
    </div>
  );
}



// function search(){}

// symbol = 'AAPL';
//  document.addEventListener('DOMContentLoaded', () => {
//    // https://financialmodelingprep.com/developer/docs
//    getRequest(
//      'https://financialmodelingprep.com/api/v3/company/profile/' + symbol + "?apikey=demo",
//      drawOutput
//    );

//    function drawOutput(responseText) {
   
//    console.log(JSON.parse(responseText));

//      let resp = [JSON.parse(responseText).profile];

//      let $table = document.createElement("table");
//      $table.className += " table";

//      var elements = document.querySelectorAll('.stock-name')[0];

//      let $head = document.createElement("thead");
//      let $body = document.createElement("tbody");

//      let $lineHader = document.createElement("tr");

//      for (let i = 0; i < resp.length; i++) {
//        let financial = resp[i];
//        let $line = document.createElement("tr");


//        for (var key in financial) {
//          if (i === 0 && financial.hasOwnProperty(key)) {
//            let $ele = document.createElement("th");
//            $ele.textContent = key;
//            $lineHader.appendChild($ele);
//          }
//        }

//        $head.appendChild($lineHader);
//        $table.appendChild($head);

//        for (var key2 in financial) {
//          if (financial.hasOwnProperty(key2)) {
//            let $eletd = document.createElement("td");
//            $eletd.textContent = financial[key2];
//            $line.appendChild($eletd);
//          }
//        }
//        $body.appendChild($line)

//        $table.appendChild($body);

//      }

//      document.body.appendChild($table);
//    }

//    function getRequest(url, success) {
//      var req = false;
//      try {
//        req = new XMLHttpRequest();
//      } catch (e) {
//        try {
//          req = new ActiveXObject("Msxml2.XMLHTTP");
//        } catch (e) {
//          try {
//            req = new ActiveXObject("Microsoft.XMLHTTP");
//          } catch (e) {
//            return false;
//          }
//        }
//      }
//      if (!req) return false;
//      if (typeof success != 'function') success = function() {};
//      req.onreadystatechange = function() {
//        if (req.readyState == 4) {
//          if (req.status === 200) {
//            success(req.responseText)
//          }
//        }
//      }
//      req.open("GET", url, true);
//      req.send(null);
//      return req;
//    }
//  })