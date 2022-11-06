import './globalstyles.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function FormFieldsGenerals() {
    const [name, setName] = React.useState('User Name');
    const [password, setPassword] = React.useState('Password');
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    return (
        <div className="formEle">
            <Box
                component="form"
                noValidate
                autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="Username"
                    value={name}
                    onChange={handleChangeName}
                    className="textFld"
                />
                <br /><br />
                <TextField
                    id="outlined-name"
                    label="Password"
                    value={password}
                    onChange={handleChangePassword}
                    className='textFld'
                />

            </Box >
        </div>
    );
}
const LoginComponent = ({ sendState }) => {
    return (
        <div className='main-wrapper'>
            <div className='profilecontainer'></div>
            <FormFieldsGenerals />
            <div style={{ textAlign: 'center', paddingBottom: '30px' }} className=''>
                <Button onClick={() => sendState(false)} variant="outlined" style={{ color: 'white', border: '1px solid white' }}>Login</Button>
            </div>
        </div>
    )
}
const Hoc = (Component) => {
    var st = true;
    const sendState = (localState) => {
        if (!localState) {
            st = false;
        }
    }
    return (
        class extends React.Component {
            constructor(props) {
                super(props);
                this.state = { auth: st };
            }
            render() {
                if(this.state.auth)
                {
                    this.setState({
                        auth: st
                    })
                }
                return (
                    <div>{this.state.auth ? <LoginComponent sendState={sendState} /> : <Component />}</div>
                )
            }
        }
    )
}

export default Hoc;