
// THIS FILE IS PLACE FOR MY REFERENCE - CODE THAT I SAVE TO REFERENCE

// window.browserHistory = browserHistory;
// browserHistory.push('/some-url'); //using the HTML5 History API and the method in the history library - .push() method
//https://developer.mozilla.org/en-US/docs/Web/API/Window/history - window.history methods
//https://developer.mozilla.org/en-US/docs/Web/API/Window/history - history library bundled with React-Router



//============= Publications ==============//

// if (Meteor.isServer){
//     Meteor.publish('links', function (){
//       return Links.find({ userId: this.userId }); //returning documents from the Links collection with the userId equal to Meteor.userId or in this case - this.userId
//     });
// }


//================ METEOR METHODS ==============//
// METHODS THAT GET CALLED ON THE SERVER AND SIMULATED IN THE CLIENT

//SERVER - link.js

// Meteor.methods({
//   addNumbers( a, b ) {
//     console.log('Numbers added');
//
      // if (typeof a !== 'number' || typeof a !== 'number') {
      //   throw new Meteor.Error('not valid', 'needs to be a number');
      // }
//
//     return a + b;
//   }
// });

//CLIENT - main.js (for now)

// Meteor.call('addNumbers', 1, 'Boone', (err, res) => {
//   console.log('Addition value', err, res);
// });

//this will throw an error based on the typeof failure -- typeof a === 'number'

//======================= DEALING WITH STATE ======================//

// export default class Signup extends React.Component { // DEFINE DEFAULT CLASS
//   constructor(props) { //constructor
//     super(props); //SUPER TO HAVE ACCESS TO React.Component parent props
//     this.state = { // Setting internal state for the Component
//       count: 0 // this is a object that can contain key/pair values or arrays or more objects
//     };
//   }
//   increment() { //CREATE A METHOD TO HANDLE ONCLICK OF A BUTTON
//     this.setState({
//       count: this.state.count + 1
//     });
//   }
//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>//RETURN this.state.(property) via the render method

            // ***********SHORTHAND ARROW FUNCTION SYNTAX**************
//         <button onClick={() => this.setState({count: this.state.count - 1})}>- 1</button>
//***********************************************************************************************
//         <button onClick={this.increment.bind(this)}>+ 1</button>
//       </div>
//     );
//   }
// }


//********************* SIMPL-SCHEMA NODE PACKAGE MARKUP *********************************

// SCHEMA VALIDATION
//import SimpleSchema from 'simpl-schema';

// const petSchema = new SimpleSchema({
//   name: {
//     type: String
//   }
// });
// petSchema.validate({
//   name: 'Pet'
// });
//
// const employee = new SimpleSchema({
//   name: {
//     type: String,
//     min: 1,
//     max: 200
//   },
//   hourlyWage: {
//     type: Number,
//     min: 1
//   },
//   email: {
//     type: String,
//     regEx: SimpleSchema.RegEx.Email
//   }
// });
//
// employee.validate({
//   name: 'Mike',
//   hourlyWage: 20,
//   email: 'john'
// })
