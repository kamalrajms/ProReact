import React from "react";

// export default function Greeting(props) {
//   return (
//     <div>
//       <h1>Greeting component</h1>
//       <p>my name is {props.firstName}</p>
//       <h4>Place</h4>
//     </div>
//   );
// }

export default function Greeting({ firstName, place }) {
  return (
    <div>
      <h1>Greeting component</h1>
      <p>my name is {firstName}</p>
      <h4 className="place">Place{place}</h4>
    </div>
  );
}
