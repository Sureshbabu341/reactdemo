import React from 'react';
import {connect} from 'react-redux';
import {IncAction} from './actions';
import {DecAction} from './actions';
import Hoc from './HOC';
import ObjectData from './ObjectData'

const App = ({local_variable, IncAction, DecAction}) => {
  return(
    <div>{local_variable}<br />

    <button onClick={() => IncAction(1)}>Piki</button>
    <button onClick={() => DecAction(1)}>Kindaki</button>

    <div><ObjectData /></div>
    </div>
  )
}
const mapStateToProps = state => ({
   local_variable : state
})

export default Hoc(connect(mapStateToProps, {IncAction, DecAction})(App));
