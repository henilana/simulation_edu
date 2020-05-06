// import React, { Component } from "react";
// // import Container from 'react-bootstrap/Container'
// // import Row from 'react-bootstrap/Row'
// //import Col from 'react-bootstrap/Col'
// // import axios from "axios";
// import "boxicons"; //https://boxicons.com/

// class Player extends Component {
//   state = { active: false, statusNum: 200 };
//   roleChoiseUrl = "/";

//   radioButtonHandler = () => {
//     this.setState({ statusNum: 200 });
//     this.setState({
//       active: !this.state.active,
//     }); /*
//   axios
//       .post(this.roleChoiseUrl, {
//         user: this.props.user,
//         active: !this.state.active,
//         uuid:this.props.uuid,
//         role:this.props.role
//       })
//       .then(res => {
//          if (res.status === 200) {
//           this.setState({ active: !this.state.active ,statusNum:200});
//         }
//         if (res.status === 404) {
//            console.log('3');
//           this.setState({ statusNum:404});
//         }
//          else {//set error msg according error number
//           this.setState({msg:'error'})
//         }
//       })
//       .catch(err => {
//        //??
//       });*/
//   };

//   render() {
//     return (
//       <div onClick={this.radioButtonHandler} style={{textAlign:'right'}}>
//         <div style={{ display: "inline-block" ,marginTop:'5px'}}>
//           <span style={{marginTop: '-0.5vw'}} style={{verticalAlign:'text-bottom'}}>
//           {this.state.active ? (
//             <box-icon name="radio-circle-marked"  />
//           ) : (
//             <box-icon name="radio-circle" />
//           )}
//           </span>
//         </div>

//         <span>{this.props.playerName} </span>
//         {this.props.playerName?<span> - </span>:''}
//         <span>{this.props.role}</span>
//       </div>
//     );
//   }
// }

// export default Player;
