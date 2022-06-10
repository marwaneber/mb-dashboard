import React from "react";
import axios from "axios";
// components

import CardTablePrd from "components/Cards/CardTablePrd.js";

export default function Products() {
  const [data, setData] = React.useState({
      entities: [
          {id: "loading..", name: "loading..", price: "loading..", quantity: "loading.."}
      ],
      name: "Products List"
  });
  React.useEffect(() => {
    // Update the document title using the browser API
    axios.get('http://localhost:8087/products', {
      headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
      }
    }).then(function (response) {

      console.log("1- hero : ", response);
      setData({...data, entities: response.data._embedded.products})
    })
    .catch(function (error) {
      console.error("not hero ", error);
    });
  }, [data.entities.length]);
  
  

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12">
          <CardTablePrd data={data}/>
        </div>
      </div>
    </>
  );
}
