import { Box, Container, Grid, TextField, Button } from "@mui/material";
import usuario from "../../assets/usuario.svg"
import { Link } from 'react-router-dom';
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";


function FormLogin() {
    const {user,onchangeUser,password,onchangePassword,onclickLogin} = useLogin()
    useEffect(() => {
        console.log("User:", user);
      }, [user]);

      useEffect(() => {
        console.log("Password:", password);
      }, [password]);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '25rem',
          maxWidth: '25rem',
          minHeight: '60vh',
          borderRadius: '5px',
          boxShadow: '0px 0px 15px 5px rgba(0,0,0,0.3)',
          padding: '1rem',
        }}
      >
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center" sx={{ flexGrow: 1 }}>
            <Grid item xs={12}>
                <h1  style={{
                    fontFamily: 'Roboto',
                }}>Bienvenido!</h1>
            </Grid>
            <Grid item xs={12}>
                <img src={usuario} alt=""  style={{ width: '100px', height: '100px' }}/>
            </Grid>
        </Grid>
        <form action="">
            <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center" sx={{ flexGrow: 1 }}>
                <Grid item xs={12}>
                    <TextField onChange={onchangeUser} id="outlined-basic" label="Usuario" variant="outlined" fullWidth sx={{marginBottom:2}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    id="outlined-basic2"
                    label="Contraseña"
                    variant="outlined"
                    fullWidth
                    type="password"
                    sx={{marginBottom:2}}
                    onChange={onchangePassword}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" fullWidth>
                    Iniciar Sesión
                    </Button>
                </Grid>
                <Grid item xs={12} sx={{ mt: 'auto' }}>
                    <p
                    style={{
                        fontFamily: 'Roboto',
                        fontSize: '12px',
                        fontWeight: 400,
                        textAlign: 'center',
                        color:'#5a5a5a'
                    }}
                    >
                    No tienes una cuenta? <Link to='/singup'>Registrarse</Link> 
                    </p>
                </Grid>
            </Grid>
        </form>
      </Container>
    </Box>
  );
}

export default FormLogin;
