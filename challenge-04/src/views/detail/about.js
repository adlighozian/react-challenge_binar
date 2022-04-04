import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function About() {
  let { slug } = useParams();
  console.log(slug);
  return <div className="container">About</div>;
}

export default About;

// import { useParams } from "react-router-dom";

// export default function minumanDetail() {
//   const urlParams = useParams();
//   console.log(urlParams);
//   return (
//     <>
//       <p>Detai</p>
//     </>
//   );
// }
