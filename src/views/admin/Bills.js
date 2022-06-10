import React from "react";
import axios from "axios";
// components

import CardTableBill from "components/Cards/CardTableBill.js";

export default function Products() {
  
    const [data, setData] = React.useState({
        entities: [
          {id: "...", billingDate: "loading..Tloading.loading..", customerId: 1}
        ],
        name: "Bills List"
    });

    React.useEffect(() => {
      // Update the document title using the browser API
      axios.get('http://localhost:8086/bills', {
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
        }
      }).then(function (response) {
  
        console.log("1- hero : ", response);
        setData({...data, entities: response.data._embedded.bills})
      })
      .catch(function (error) {
        console.error("not hero ", error);
      });
    }, [data.entities.length]);
    // setData({entities : data_raw.bills})

    return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12">
          <CardTableBill data={data}/>
        </div>
      </div>
    </>
  );
}
