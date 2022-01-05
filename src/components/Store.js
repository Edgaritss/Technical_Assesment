import {Box, Heading ,Center,Image,Stack,Button,Input,Text,Flex,Spacer,Tag,SimpleGrid} from "@chakra-ui/react"
import {useRef} from "react";
import Header from "./Header";
const StoreItem = ({title,price,image}) =>{

    return( <Box p={4} borderRadius="lg" borderWidth="1px">
        <Center>
        <Image src={image} w={24}/>
        </Center>
        <Heading noOfLines={2} size="sm" fontWeight="normal">{title}</Heading>
        <Center>
        <Tag mt={4}>${price}</Tag>
        </Center>
    </Box>
    );
};

function Store({ items , onItemAdd }) {
    const itemNameRef = useRef();
    const itemPriceRef = useRef();
    return (
      <Box p={4}>
          <Header title="Edgar's Store"/>

          <SimpleGrid columns={4} spacing={4} mt={4} p={2}>
        {items.map((item) => {
          return (
            <StoreItem {...item} />
        );
       })}
       </SimpleGrid>
       <Input ref={itemNameRef} mt={10} placeholder="Name"/>
       <Input ref= {itemPriceRef} mt={2} placeholder="Price " type="number"/>
       <Button onClick={() =>{
           onItemAdd({
               title:itemNameRef.current.value,
               price:itemPriceRef.current.value

           })

       }} mt={2}>Add Item</Button>
      </Box>
        );
    }
  export default Store;
