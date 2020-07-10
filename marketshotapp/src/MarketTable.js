import React from "react";
import classes from './MarketTable.module.css';

export default function MarketTable(props) {
  const { data } = props || {};
  const { profile = {} } = data || {};

  return (
    <table className={classes.table}>
      <tr>
        <th>Company</th>
        <td>
          <a style={{ display: "flex", flexDirection: "row", alignItems: "center" }} href={profile.website}>
            <img style={{ height: 20, marginRight: 8}} src={profile.image} alt={"company logo"} />
            {profile.companyName}
          </a>
        </td>
      </tr>
      <tr><th>Price</th><td>{profile.price}</td></tr>
      <tr><th>Beta</th><td>{profile.beta}</td></tr>
      <tr><th>Volume Average</th> <td>{profile.volAvg}</td></tr>  
      <tr><th>Market Cap</th> <td>{profile.mktCap}</td></tr>
      
    </table>
  );
}
