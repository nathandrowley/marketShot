import React from "react";

export default function MarketTable(props) {
  const { data } = props || {};
  const { profile = {} } = data || {};

  return (
    <table>
      <tr>
        <th>Link</th>
        <th>Price</th>
        <th>Beta</th>
        <th>Volume Average</th>
        <th>Market Cap</th>
      </tr>
      <tr>
        <td>
          <a style={{ display: "flex", flexDirection: "row", alignItems: "center" }} href={profile.website}>
            <img style={{ height: 20 }} src={profile.image} alt={"company logo"} />
            {profile.companyName}
          </a>
        </td>
        <td>{profile.price}</td>
        <td>{profile.beta}</td>
        <td>{profile.volAvg}</td>
        <td>{profile.mktCap}</td>
      </tr>
    </table>
  );
}
