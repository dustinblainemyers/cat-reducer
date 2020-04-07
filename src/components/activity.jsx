import React from "react";
import {connect} from "react-redux";
import {eat } from "../redux/actions";


const Activity = ({activity, eat}) => (
  
  <>
  <h1>Activity Component</h1> 
  <p>The cat is {activity}</p>
  <button onClick={()=> eat()}>Eating</button>

  </>
)

const mapStateToProps = state => {
  const {activity}= state;
  return activity;
}

export default connect(
  mapStateToProps, //mapstatetoprops -what do i want
  {eat}  //mapdispatchtoprops - what do i want to do 
)(Activity);


