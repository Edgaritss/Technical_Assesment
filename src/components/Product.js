import {Image, Heading,Box,Text,Tag ,Stack,HStack,Button, SimpleGrid,GridItem,Center,} from "@chakra-ui/react";

import { FaFacebook } from "react-icons/fa";


const Header = ({title}) => <Box p={4} shadow='md'>
    <Heading>{title}</Heading>
</Box>

function Product({location}){
    const{ state } = location;

    if (!state){
        window.location = "/";
    }
    return <Box >
        <Header  title={state.title}/>
        <Box p={8} d='flex' alignItems='center'>
        
        </Box>
        <Box ml={4}>
            <SimpleGrid spacing={4} columns={{base:1, md:5}}>
                <GridItem colSpan={2}>
                    <Center>
                    <Image w={48} src={state.image}/>
                    </Center>
                </GridItem>
                <GridItem colSpan={3}>
            <Stack spacing="4">
                <Box>
                <Heading>Price:${state.price}</Heading>
                <Tag mt={2} as="i">{state.category}</Tag>
                </Box>
                <Text >{state.description}</Text>
                <HStack>
                <Button w="xs" size="sm" colorScheme="messenger">Buy Now</Button>
                <Button w="xs" size="sm" colorScheme='facebook' leftIcon={<FaFacebook />}></Button>
                </HStack>
            </Stack>
            </GridItem>
            </SimpleGrid>
        </Box>
    </Box>;
}

export default Product;