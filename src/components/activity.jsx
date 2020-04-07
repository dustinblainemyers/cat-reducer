import React from "react";
import {connect} from "react-redux";
import {eat, nap, play } from "../redux/actions";



const Activity = ({activity, eat, play , nap, name}) => (
  
  <>
  <h1>Activity Component</h1> 
  <p>The {name} is {activity}</p>
  <button onClick={()=> eat()}>Eating</button>
  <button onClick={()=> nap()}>Napping</button>
  <button onClick={()=> play()}>Playing</button>

  </>
)

const mapStateToProps = state => {
  const {activity, name}= state;
  return activity;

}


  
                    



export default connect(
  mapStateToProps, //mapstatetoprops -what do i want
  {eat, nap, play}  //mapdispatchtoprops - what do i want to do 
)(Activity);


