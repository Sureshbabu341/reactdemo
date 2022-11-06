import './globalstyles.css';
import React from 'react';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { IncAction } from './actions';
import { DecAction } from './actions';
import Hoc from './HOC';
import ParentLevelComponent from './ObjectData';
import ParentLevelComponentTwo from './ObjectDataTwo'
const App = ({ local_variable, IncAction, DecAction }) => {
  return (
    <div className='main-wrapper' style={{padding: '10px'}}>
      {local_variable === 1 && <ParentLevelComponent />}
      {local_variable === 2 && <ParentLevelComponentTwo />}
      <Button ariant="outlined" style={{ color: 'white', border: '1px solid white' }} disabled={local_variable === 1 && true} onClick={() => DecAction(1)}>Prev</Button>
      <Button ariant="outlined" style={{ color: 'white', border: '1px solid white', marginLeft:'10px', marginRight:'10px' }} disabled={local_variable === 2 && true} onClick={() => IncAction(1)}>Next</Button>

    </div>
  )
}
const mapStateToProps = state => ({
  local_variable: state
})

export default React.memo(Hoc(connect(mapStateToProps, { IncAction, DecAction })(App)));
