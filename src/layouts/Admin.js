import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// views

import Products from "views/admin/Products.js";
import Customers from "views/admin/Customers.js";
import Bills from "views/admin/Bills.js";
import CardBill from "components/Cards/CardBill.js";
import Settings from "views/admin/Settings.js";
import FooterAdmin from "../components/Footers/FooterAdmin";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 h-screen">
        <AdminNavbar />

        {/* Header */}
        <div className="px-4 md:px-10 py-24 mx-auto w-full m-24">
          <Switch>
            <Route path="/admin/products" exact component={Products} />
            <Route path="/admin/customers" exact component={Customers} />
            <Route path="/admin/bills" exact component={Bills} />
            <Route path="/admin/bills/:id" exact component={CardBill} />
            <Route path="/admin/settings" exact component={Settings} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
          <FooterAdmin className="absolute inset-x-0 bottom-0" />
      </div>
    </>
  );
}
