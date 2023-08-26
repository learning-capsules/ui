import { Box, Container, Grid,TextField,Button } from "@mui/material";
import { Link } from 'react-router-dom';
import user_registro from "../../assets/perfil-del-usuario.svg"
import { useSignUp } from "../hooks/useSignUp";
import { useEffect } from "react";


function SingUpForm(){
    const {firstname,onchangeFirstName, lastname, onchangeLastname, password, onchangePassword,email,onchangeEmail,number,onchangeNumber,onclickSingUp} = useSignUp()
    useEffect(() => {
        console.log("firstname:", firstname);
      }, [firstname]);

      useEffect(() => {
        console.log("lastname:", lastname);
      }, [lastname]);

      useEffect(() => {
        console.log("password:", password);
      }, [password]);

      useEffect(() => {
        console.log("email:", email);
      }, [email]);
      useEffect(() => {
        console.log("number:", number);
      }, [number]);
    return(
        <Box       
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}>
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
                    }}>Registrate!</h1>
                </Grid>
                <Grid item xs={12} sx={{marginBottom:2}}>
                <img src={user_registro} alt=""  style={{ width: '100px', height: '100px' }} />
                </Grid>
            </Grid>
            <form action="">
            <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center" sx={{ flexGrow: 1 }}>
                <Grid item xs={12}>
                    <TextField onChange={onchangeFirstName}  id="outlined-basic" label="Nombre" variant="outlined" fullWidth sx={{marginBottom:2}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={onchangeLastname}  id="outlined-basic" label="Apellido" variant="outlined" fullWidth sx={{marginBottom:2}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={onchangePassword}  id="outlined-basic" label="Contraseña" variant="outlined" type="password" fullWidth sx={{marginBottom:2}}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    onChange={onchangeEmail}
                    id="outlined-basic2"
                    label="Correo"
                    variant="outlined"
                    fullWidth
                    sx={{marginBottom:2}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    onChange={onchangeNumber}
                    id="outlined-basic2"
                    label="Teléfono"
                    variant="outlined"
                    fullWidth
                    sx={{marginBottom:2}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" fullWidth onClick={onclickSingUp}>
                    Registrarse
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
                    Ya tienes una cuenta? <Link to='/login'>Iniciar Sesión</Link> 
                    </p>
                </Grid>
            </Grid>
        </form>
      </Container>

        </Box>
    )
}

export default SingUpForm