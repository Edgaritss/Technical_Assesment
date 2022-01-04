import {Box, Heading ,Stack,Button,Input,Text} from "@chakra-ui/react"

const StoreItem = ({title,price}) =>{
    return <Box p={4} borderRadius="lg" borderWidth="1px">
        <Heading size="md">{title}</Heading>
        <Text>{price}</Text>
    </Box>
}

function Store({ items }) {
    return (
      <Box p={4}>
          <Stack>
        {items.map((item) => {
          return (
            <StoreItem title={item.title} price = {item.price}/>
        );
       })}
       </Stack>
       <Input mt={10} placeholder="Search"/>
       <Button mt={2}>Add Item</Button>
      </Box>
        );
    }
  export default Store;
