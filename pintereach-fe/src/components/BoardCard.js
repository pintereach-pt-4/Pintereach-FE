import React from 'react'

 const BoardCard=(props)=> {
    return (
        <div>
        <h1>{props.title}</h1>
        <p>
          Article:
          <a target="_blank" href={`${props.url}`} rel="noopener noreferrer">
            Read
          </a>
        </p>
        <p>{props.description}</p>
        <p>
          Category:
          <span>{props.category}</span>
        </p>
      </div>
    )
}



export default BoardCard


// import React from "react";

// function BoardCard(props) {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <div>{props.url}</div>
//       <div>{props.description}</div>
//       <p>{props.category}</p>
//     </div>
//   );
// }

// export default BoardCard;
