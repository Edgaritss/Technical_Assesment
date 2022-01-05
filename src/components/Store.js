import {Box, Heading ,Stack,Button,Input,Text,Flex,Spacer,Tag,SimpleGrid} from "@chakra-ui/react"
import {useRef} from "react";
import Header from "./Header";
const StoreItem = ({title,price}) =>{

    return( <Box p={4} borderRadius="lg" borderWidth="1px">
        <Heading noOfLines={2} size="sm" fontWeight="normal">{title}</Heading>
        <Tag mt={4}>${price}</Tag>
    </Box>
    );
};

function Store({ items , onItemAdd }) {
    const itemNameRef = useRef();
    const itemPriceRef = useRef();
    return (
      <Box p={4}>
          <Header title="Edgar's Store"/>

          <SimpleGrid columns={4} spacing={4}>
        {items.map((item) => {
          return (
            <StoreItem title={item.title} price = {item.price}/>
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
