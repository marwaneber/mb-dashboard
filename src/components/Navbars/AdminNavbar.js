import React from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  let title = window.location.href.split("/")[window.location.href.split("/").length-1]
  return (
    <>
      {/* Navbar */}
      <nav className={"w-full z-10 uppercase font-bold text-center text-2xl bg-white "}>
          
      </nav>
      {/* End Navbar */}
    </>
  );
}
