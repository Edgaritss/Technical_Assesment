
import {Flex,Heading,Input,Button,useColorMode,FormControl ,useColorModeValue} from '@chakra-ui/react';
import {useState} from "react";
import { fire } from '../fireconfig';

const LoginPage =() =>{
    const {toggleColorMode} = useColorMode()
    const formBackground = useColorModeValue("gray.100", "gray.700")
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    const registerUser =(e) =>{
        console.log("email",email,"password",pass)
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(email,pass)
        .then((res) => alert('Succesfully created'))
    }
    return(
    <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={8} rounded={6}>
            <Heading textAlign="center" mb={6}>Log in</Heading>
            <Input onChange={(e) => {setEmail(e.target.value)}} placeholder="EDGAR ROJAS" variant="filled" mb={3} type="email"/>

            <Input onChange={(e) => {setPass(e.target.value)}}  placeholder="******" variant="filled" mb={6} type="password"/>

            <Button mt={2} onClick={registerUser} colorScheme="teal" >Log in</Button>
            <Button mt={2} onClick={registerUser} colorScheme="blue" >Google</Button>
            <Button mt={2} onClick={toggleColorMode} >Dark Mode</Button>

        </Flex>
    </Flex>
    )
}

export default LoginPage;