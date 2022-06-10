import React from "react";

// components
import CardBill from "components/Cards/CardBill.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-4/12 px-4">
          <CardBill />
        </div>
      </div>
    </>
  );
}
