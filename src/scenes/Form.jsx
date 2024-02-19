import React from 'react';
import {Formik} from 'formik'
import * as yup from 'yup'
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {TextField,Box,useMediaQuery,Button,Typography} from '@mui/material'
import FlexBetween from '../component/FlexsBetween';



const initialStateLogin ={
    username:"",
    password:""
}
// loginSchema for validation using yup
const loginSchema = yup.object().shape({
     username:yup.string().required('Please enter UserName'),
     password:yup.string().min(6).required('Please enter the valid password')
});



const Form = () => {
      const history = useNavigate();
      const isNonMobile = useMediaQuery('(min-width:600px)');

    

// logic to fetch login details from dummyjson
   const login = async(values,onSubmitProps)=>{
    try {
        
 
    
    const loggedIn = await fetch('https://dummyjson.com/auth/login',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(values)
    });

    const loginSuccess = await loggedIn.json();
    // extracting the login token
    const token = loginSuccess.token;
    onSubmitProps.resetForm();
    if(token){
        localStorage.setItem('Authorization',token)
        history('/home')
    }else{
        history('/')
    }

} catch (error) {
        console.log(error.message)
}
   }


   const handleFormSubmit = async (values,onSubmitProps)=>{
     await login(values,onSubmitProps)
   }

    return (
    <Formik
    onSubmit={handleFormSubmit}
    initialValues={initialStateLogin}
    validationSchema={loginSchema}
    >
 {({values,handleBlur,handleSubmit,handleChange,
errors,touched,handleClick})=>(
<form onSubmit={handleSubmit}>
    <Box
    display={'grid'}
    gap={'30px'}
    gridTemplateColumns={'repeat(2,minmax(100px,1fr))'}
    sx={{
        "& > div":{gridColumn:isNonMobile ? undefined :"span 2" }
    }}
    >
        <TextField
        label="UserName"
        name='username'
        value={values.username}
        onBlur={handleBlur}
        sx={{
            gridColumn:"span 2"
        }}
        onChange={handleChange}
        error={Boolean(errors.username) && Boolean(touched.username)}
        helperText={ touched.username && errors.username}

        />
        <TextField
        label='Password'
        name='password'
        value={values.password}
        onBlur={handleBlur}
        sx={{gridColumn:"span 2"}}
        onChange={handleChange}
        error={Boolean(errors.password) && Boolean(touched.password)}
       helperText={touched.password && errors.password}
/>

{/* Button */}
<FlexBetween
>

<Button
fullWidth
type='submit'
onClick={handleClick}
sx={{
    alignItems:"center",
    justifyContent:"center",
    p:"1rem",
    m:"2rem 0",
    backgroundColor:"#89CFF0",
    color:'blue',
    "&:hover":{color:'red'}
}}
>
    <Typography>
        Login
    </Typography>
</Button>
</FlexBetween>


    </Box>


</form>

)

}

    </Formik>
  )
}

export default Form;