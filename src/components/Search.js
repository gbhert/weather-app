import { Fragment, useState } from "react";
import NavBar from "./NavBar";

export default function Search() {
  const[query ,setQuery] = useState("");
  const [weather ,setWeather] = useState({
    
  });
  return (
    <Fragment>
      <NavBar />
      <div className="search-container">
        <h1>Search</h1>
      </div>
    </Fragment>
  );
}
