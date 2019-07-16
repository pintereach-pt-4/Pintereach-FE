import React from 'react';
import BoardCard from "./BoardCard"
import { connect } from "react-redux"
import { getBoards } from "../actions"

class Boards extends React.Component{
    render(){
         
            return(
                
                <div>
                    
                    {/* {this.props.allBoards.map(board=> 
                    <BoardCard 
                    key={board.id} 
                    title={board.title} 
                    url={board.url}
                    category={board.category} 
                    description={board.description}
                    />)} */}
                    {console.log(this.props.allBoards)}
                </div>
            )
        
    }
}


const mapState = state =>{
    return{
        allBoards: state.allBoards
        
    }
    
}

export default connect(mapState, {getBoards})(Boards);


// import React from 'react'
// import BoardCard from "./BoardCard";

// class Boards extends React.Component {
//   render() {
//     const allBoards = [
//       {
//         title: "hu",
//         url: "www.google.com",
//         category: "science",
//         description: "none"
//       }
//     ];
//     return (
//       <div>
//         {allBoards.map(board => (
//           <BoardCard
//             key={board.id}
//             title={board.title}
//             url={board.url}
//             category={board.category}
//             description={board.description}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Boards;

