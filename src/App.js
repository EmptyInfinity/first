import React, {Component} from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const styles = {
  su:{
    left: "55px",
    bottom: "-50px",
  },
  li:{
    right:"55px",
    bottom: "-50px",
  },
  Button: {
    background:"#cb9ca1",
    color: "#fff",
    fontWeight:"300",
    position: "absolute",
    boxShadow:" 3px 3px 15px  #ffcdd2",
  },
  form: {
    position: "relative",
    color: "#fff",
    width: "300px",
    margin: "auto",
    border: "1px solid #ffcdd2",
    boxSizing: "border-box",
    padding: "5px 30px 40px 30px",
    borderRadius: "3px",
    background:"#fff",
    boxShadow:" 3px 3px 15px  #ffcdd2",
  },
  cssLabel: {
    '&$focused': {
      color: '#cb9ca1',
    },
  },
  focused: {},
  cssUnderline: {
    '&:after': {
      borderBottom: "2px solid #cb9ca1",
    },
  },
};


class Form extends React.Component {
  state = {
    login: "",
    showPassword: false,
    email: "",
    password: ""
  };
  handleLogin = (e) =>{
    this.setState({ login: e.target.value})
  }
  handleEmail = (e) =>{
    this.setState({ email: e.target.value})
  }
  handlePassword = (e) =>{
    this.setState({ password: e.target.value})
  }
  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  render(){
    const { classes } = this.props;
    return (
      <div className="SignUp" style={{position:"absolute",top:"42%",left:"50%",transform:"translate(-50%,-50%)"}}>
      <h2 className="hio"> weather </h2>
        <form className={classes.form}>
            <FormControl style={{marginTop:"12px",width:"100%"}}>
                <InputLabel
                FormLabelClasses={{
                  root: classes.cssLabel,
                  focused: classes.focused,
                }}
                htmlFor="custom-css-input1">
                Login
                </InputLabel>
                <Input
                  style={{width:"100%"}}
                  classes={{
                    underline: classes.cssUnderline,
                  }}
                  id="custom-css-input1"
                  value={this.state.login}
                  onChange={this.handleLogin}
                />
            </FormControl>
            <FormControl style={{marginTop:"12px",width:"100%"}}>
                <InputLabel
                  FormLabelClasses={{
                    root: classes.cssLabel,
                    focused: classes.focused,
                  }}
                  htmlFor="custom-css-input2">
                Email
                </InputLabel>
                <Input
                  style={{width:"100%"}}
                  classes={{
                    underline: classes.cssUnderline,
                  }}
                  id="custom-css-input2"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
            </FormControl>
            <FormControl style={{marginTop:"12px",width:"100%"}}>
                <InputLabel
                  FormLabelClasses={{
                    root: classes.cssLabel,
                    focused: classes.focused,
                  }}
                  htmlFor="adornment-password">
                  Password
                </InputLabel>
                  <Input
                  id="adornment-password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.state.password}
                  onChange={this.handlePassword}
                  classes={{
                    underline: classes.cssUnderline,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
            </FormControl>
            <Button className={classNames(classes.Button, classes.su)}> Sign up</Button>
            <Button className={classNames(classes.Button, classes.li)}> Log in</Button>
        </form>
      </div>
    );
  }
}



export default withStyles(styles)(Form);
