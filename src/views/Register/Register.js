import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  Typography,
  Checkbox,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Switch,
  FormGroup
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { Facebook as FacebookIcon, Google as GoogleIcon } from 'icons';

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  },
  TanggalLahir: {
    presence: { allowEmpty: false, message: 'is required'}
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/auth.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  socialButtons: {
    marginTop: theme.spacing(3)
  },
  socialIcon: {
    marginRight: theme.spacing(1)
  },
  sugestion: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  registerButton: {
    margin: theme.spacing(2, 0)
  }
}));

const Register = props => {
  const { history } = props;

  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = event => {
    event.preventDefault();
    localStorage.setItem('email_usuario_logado', email)
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.quoteContainer}
          item
          lg={5}
        >
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography
                className={classes.quoteText}
                variant="h1"
              >
                Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
                they sold out High Life.
              </Typography>
              <div className={classes.person}>
                <Typography
                  className={classes.name}
                  variant="body1"
                >
                  Takamaru Ayako
                </Typography>
                <Typography
                  className={classes.bio}
                  variant="body2"
                >
                  Manager at inVision
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          className={classes.content}
          item
          lg={7}
          xs={12}
        >
          <div className={classes.content}>
            <div className={classes.contentHeader}>
          
            </div>
            <div className={classes.contentBody}>
              <form
                className={classes.form}
                onSubmit={handleRegister}
              >
                <Typography
                  className={classes.title}
                  variant="h2"
                >
                  Register
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                >
                  
                </Typography>
                
                <Typography
                  align="center"
                  className={classes.sugestion}
                  color="textSecondary"
                  variant="body1"
                >
                </Typography>
                
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Name"
                  name="name"
                  // value={email}
                  // onChange={e => setEmail(e.target.value)}
                  variant="outlined"
                />

                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  // value={email}
                  // onChange={e => setEmail(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  // value={email}
                  // onChange={e => setPassword(e.target.value)}
                  variant="outlined"
                />

                <TextField
                  // id="datetime-local"
                  label="Tanggal Lahir"
                  type="datetime-local"
                  name="tanggallahir"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />

                <FormControl name="gender" component="fieldset" fullWidth className={classes.textField} >
                  <Typography component="legend">Gender</Typography>
                  <RadioGroup aria-label="gender" name="gender1" fullWidth>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                  </RadioGroup>
                </FormControl>

                <Typography className={classes.textField}>
                  Mengetahui Info darimana ?
                </Typography>
                <FormGroup name="sourceinfo">
                  <FormControlLabel 
                    control={ <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} /> }
                    label="Instagram"/>
                  <FormControlLabel
                    control={ <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} /> }
                    label="Teman" />
                  <FormControlLabel
                    control={ <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} /> }
                    label="Brosur" />
                </FormGroup>

                <Typography className={classes.textField}>
                  Pendidikan Terakhir
                </Typography>
                <ButtonGroup name="education" className={classes.textField} variant="contained" color="primary" aria-label="contained primary button group" fullWidth>
                  <Button>SMA</Button>
                  <Button>D3</Button>
                  <Button>S1</Button>
                </ButtonGroup>
                
                <FormControl  variant="outlined" className={classes.textField}>
                  <InputLabel id="demo-simple-select-outlined-label">Instansi</InputLabel>
                  <Select
                    // labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={age}
                    // onChange={handleChange}
                    label="Asal Instansi"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"SMA"}>SMA</MenuItem>
                    <MenuItem value={"SMK"}>SMK</MenuItem>
                    <MenuItem value={"PTN"}>Universitas / Institute</MenuItem>
                    <MenuItem value={"Politeknik"}>Politeknik</MenuItem>
                  </Select>
                </FormControl>

                <Typography id="discrete-slider" gutterBottom className={classes.textField}>
                  HardSkill
                </Typography>
                <Slider
                  defaultValue={30}
                  // getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={10}
                  max={110}
                />
                <Switch
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  color="primary"
                  name="checkedA"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <Button
                  className={classes.signInButton}
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Entrar
                </Button>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Register.propTypes = {
  history: PropTypes.object
};

export default withRouter(Register);
