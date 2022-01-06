import {Box,Stack,GridItem, Heading ,Center,Image,Button,Input,Tag,SimpleGrid,Spinner,StackDivider } from "@chakra-ui/react";

import {useEffect, useRef, useState} from "react";
import Header from "./Header";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from 'axios';
import { Copyright } from './JSX/Copyright';
import { SocialMediaLinks } from './JSX/SocialMediaLinks';


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
function Store({items,onItemAdd }) {
    const[filteredItems,setFilteredItems] = useState([]);
    const [storeItem,setStoreItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(({data}) =>{
          setStoreItem(data);
          setLoading(false);
          setFilteredItems(data);
        })
      }, []);
      
    const itemNameRef = useRef();
    const itemPriceRef = useRef();
    return (
      <Box p={4}>
          <Header title="Edgar's Store"/>
          {loading ? <Spinner/>:

          <Box p={2}>

          <Input onChange={(e)=>{
            let f = storeItem.filter((item) => 
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
                 <Link to={ {pathname:`/product/${item.id}`, state:item,}}>
                <StoreItem {...item} />
                </Link>
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

           });

       }} mt={2}>Add Item</Button>
        <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{
      base: '4',
      md: '8',
    }}
  >

    <Stack>
      <Stack direction="row" spacing="4" align="stretch" justify="space-between">
        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box>
      </Box>
        );
        
    }

  export default Store;
