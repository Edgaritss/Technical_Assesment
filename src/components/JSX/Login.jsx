
import {Flex,Heading,Input,Button,useColorMode, useColorModeValue} from '@chakra-ui/react'
import React,{useState} from 'React';
import {auth} from '../fireconfig';

const LoginPage =() =>{
    const {toggleColorMode} = useColorMode()
    const formBackground = useColorModeValue("gray.100", "gray.700")
    return(
    <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
            <Heading textAlign="center" mb={6}>Log in</Heading>
            <Input placeholder="EDGAR ROJAS" variant="filled" mb={3} type="email"/>
            <Input placeholder="******" variant="filled" mb={6} type="password"/>
            <Button colorScheme="teal" >Log in</Button>
            <Button onClick={toggleColorMode} >Dark Mode</Button>

        </Flex>
    </Flex>
    )
}

export default LoginPage;