import React from "react";
import axios from "axios";
// components

import CardTableCus from "../../components/Cards/CardTableCus";

export default function Customers() {
    const [data, setData] = React.useState({
        entities: [
            {id: "loading..", name: "loading..", email: "loading.."},
        ],
        name: "Customers List"
    });

    React.useEffect(() => {
      // Update the document title using the browser API
      axios.get('http://localhost:8085/customers', {
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
        }
      }).then(function (response) {
  
        console.log("1- hero : ", response);
        setData({...data, entities: response.data._embedded.customers})
      })
      .catch(function (error) {
        console.error("not hero ", error);
      });
    }, [data.entities.length]);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableCus data={data}/>
        </div>
      </div>
    </>
  );
}
