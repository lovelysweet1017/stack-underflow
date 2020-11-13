import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';
import { useAuthContext } from '../context/auth';
import SofLogo from '../svg/stack-overflow.svg';

import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Link,
} from '@material-ui/core';
import { useAuthFormStyles } from '../styles/muiStyles';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

const LoginForm = ({ setAuthType, closeModal }) => {
  const { register, handleSubmit, reset } = useForm();
  const [showPass, setShowPass] = useState(false);
  const classes = useAuthFormStyles();
  const { setUser } = useAuthContext();

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update: (_, { data }) => {
      setUser(data.login);
      reset();
      closeModal();
    },
    onError: (err) => {
      console.log(err.graphQLErrors[0].message);
    },
  });

  const onLogin = ({ username, password }) => {
    loginUser({ variables: { username, password } });
  };

  return (
    <div className={classes.root}>
      <img src={SofLogo} alt="sof-logo" className={classes.titleLogo} />
      <form onSubmit={handleSubmit(onLogin)}>
        <div className={classes.inputField}>
          <TextField
            required
            fullWidth
            inputRef={register}
            name="username"
            type="text"
            label="Username"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={classes.inputField}>
          <TextField
            required
            fullWidth
            inputRef={register}
            name="password"
            type={showPass ? 'text' : 'password'}
            label="Password"
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPass((prevState) => !prevState)}
                    size="small"
                  >
                    {showPass ? (
                      <VisibilityOffIcon color="secondary" />
                    ) : (
                      <VisibilityIcon color="secondary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          startIcon={<ExitToAppIcon />}
          type="submit"
          disabled={loading}
        >
          Log In
        </Button>
      </form>
      <Typography variant="body1" className={classes.footerText}>
        Don’t have an account?{' '}
        <Link onClick={() => setAuthType('signup')} className={classes.link}>
          Sign Up
        </Link>
      </Typography>
    </div>
  );
};

export default LoginForm;
