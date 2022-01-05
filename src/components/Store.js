import {Box,GridItem, Heading ,Center,Image,Stack,Button,Input,Text,Flex,Spacer,Tag,SimpleGrid,Spinner} from "@chakra-ui/react"
import {useEffect, useRef, useState} from "react";
import Header from "./Header";
const StoreItem = ({title,price,image}) =>{

    return( <Box p={4} borderRadius="lg" borderWidth="1px">
        <Center>
        <Image src={image} w={24}/>
        </Center>
        <Heading mt={4} noOfLines={2} size="sm" fontWeight="normal">{title}</Heading>
        <Center>
        <Tag mt={4}>${price}</Tag>
        </Center>
    </Box>
    );
};

function Store({ items ,loading ,onItemAdd }) {
    const[filteredItems,setFilteredItems] = useState(items);

    useEffect(()=> {
        setFilteredItems(items);
    },[items])

    const itemNameRef = useRef();
    const itemPriceRef = useRef();
    return (
      <Box p={4}>
          <Header title="Edgar's Store"/>
          {loading ? <Spinner/>:
          <Box p={2}>

          <Input onChange={(e)=>{
            let f = items.filter((item) => 
            item.title.toLowerCase().includes(e.target.value.toLocaleLowerCase())
            );
            console.log("F",f);
            setFilteredItems(f);
          }} 
          placeholder="Search" mt={4}/>

          <SimpleGrid columns={4} spacing={4} mt={4} p={2}>
        {filteredItems.map((item) => {
          return (
            <GridItem>  
                <StoreItem   {...item} />
            </GridItem>
        );
       })}
       </SimpleGrid>
       </Box>
    }
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
