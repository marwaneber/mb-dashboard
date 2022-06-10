import { useState, useEffect } from "react";
import React  from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import CardTablePrdTotal from "./CardTablePrdTotal";
// components
import axios from "axios";

export default function CardBill() {
  let { id } = useParams();
  const [fullData, setFullData] = useState({
    "id": 1,
    "billingDate": "2022-06-10T14:54:51.978+00:00",
    "productItems": [
      {
        id: 1,
        price: 12000.0,
        quantity: 5.0,
        productID: 1,
        product: {
          id: 1,
          "name": "MacBook Pro M2",
          "price": 12000.0,
          "quantity": 12.0
        }
      },
      {
        id: 2,
        price: 10000.0,
        quantity: 5.0,
        productID: 2,
        product: {
          id: 2,
          "name": "iPhone Pro Max",
          "price": 10000.0,
          "quantity": 23.0
        }
      },
      {
        id: 3,
        price: 22000.0,
        quantity: 12.0,
        productID: 3,
        product: {
          id: 3,
          "name": "iMac Pro 2021",
          "price": 22000.0,
          "quantity": 19.0
        }
      },
      {
        id: 4,
        price: 6700.0,
        quantity: 37.0,
        productID: 4,
        product: {
          id: 4,
          "name": "iWatch Pro 6",
          "price": 6700.0,
          "quantity": 43.0
        }
      },
      {
        id: 5,
        price: 8000.0,
        quantity: 1.0,
        productID: 5,
        product: {
          id: 5,
          "name": "iPad Pro 13",
          "price": 8000.0,
          "quantity": 9.0
        }
      }
    ],
    "customerId": 1,
    "customer": {
      "id": 1,
      "name": "Marwane",
      "email": "marwane@gmail.com"
    }
  });
  const [data, setData] = useState({
    entities: fullData.productItems.map(({ product }) => product),
    name: "Bill Detail of : " + fullData.billingDate.split(".")[0].replace("T", " • ")
  });

  useEffect(() => {
    // Update the document title using the browser API
    axios.get('http://localhost:8086/fullBill/'+id, {
      headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
      }
    }).then(function (response) {

      console.log("1- hero : ", response);
      setFullData(response.data)
    })
    .catch(function (error) {
      console.error("not hero ", error);
    });
  }, [data.entities.length]);
  // setData({entities : data_raw.bills})
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-0">
        <div className="px-6 py-10">
          <div className="text-center my-10">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
            {fullData.customer.name}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-mail mr-2 text-lg text-blueGray-400"></i>{" "}
              {fullData.customer.email}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              Total of products - {fullData.productItems.length}
            </div>

            <CardTablePrdTotal data={data}/>

            <div className="mb-2 text-blueGray-600 mt-10">
              <Link
                to="/admin/bills"
                className="bg-black text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                Back to all bills
              </Link>
            </div>            
          </div>
        </div>
      </div>
    </>
  );
}
