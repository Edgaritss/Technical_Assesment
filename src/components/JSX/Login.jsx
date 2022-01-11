
import {Flex,Heading,Input,Button,useColorMode,Link  ,useColorModeValue} from '@chakra-ui/react';
import {ArrowBackIcon } from '@chakra-ui/icons'
import {useState} from "react";
import { fire } from '../fireconfig';
import firebase from 'firebase/compat/app';




const LoginPage =() =>{
    const {toggleColorMode} = useColorMode()
    const formBackground = useColorModeValue("gray.100", "gray.700")
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    const registerUser =(e) =>{
        console.log("email",email,"password",pass)
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(email,pass)
        .then((res) =>{ alert('Succesfully created')  })
        
    } /* Registrar usuario con Correo y contraseña*/

  

    const SignInWithFirebase =() =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((re)=>{
            console.log(re);
        })
        .catch((err) =>{
            console.log(err);
    }) /* Registrar usuario con Google*/
}

    return(
    <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={8} rounded={6}>
            <Heading textAlign="center" mb={6}>Log in</Heading>
            <Input onChange={(e) => {setEmail(e.target.value)}} placeholder="Edgar@edgar.com" variant="filled" mb={3} type="email"/>
           
            <Input onChange={(e) => {setPass(e.target.value)}}  placeholder="******" variant="filled" mb={6} type="password"/>
  
            <Button mt={2} onClick={registerUser} colorScheme="teal" >Log in</Button>
            <Button mt={2} onClick={SignInWithFirebase} colorScheme="blue" >Google</Button>
   
            <Button mt={2} onClick={toggleColorMode} >Dark Mode</Button>
            <Link justifyContent="center" href='./Welcome' >
            <Button leftIcon={<ArrowBackIcon />} mt={2} colorScheme="blue" >Return</Button>
            </Link>

        </Flex>
    </Flex>
    )
}

export default LoginPage;