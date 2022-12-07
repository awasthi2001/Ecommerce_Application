import React from "react";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import { useContext } from "react";
import { Table, TableContainer, Tbody, Th,Td ,Tr, Heading,Button, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter} from "@chakra-ui/react";


const Cart = () => {
  let {addToCartdata,settotalamount,totalamount,handleRemove,handleCheckOut} =  useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  let tp = 0;
  const handleOrder=()=>{
   handleCheckOut();
   onClose();
  }
  return <>
  <br />
  <br />
  <br/>
  <TableContainer>
    <Table>
      <Tr>
    <Th>PRODUCT NAME</Th>
    <Th>PRODUCT PRICE</Th>
    <Th>REMOVE ITEM</Th>
    </Tr>
    <Tbody>
      {
     addToCartdata.map((data)=>{
      //settotalamount((prev)=>prev+price)
      tp+=data.price;
       return <Tr key={data.id}>
        <Td>{data.title}</Td>
        <Td>{data.price}</Td>
        <Td><Button onClick={()=>handleRemove(data)}>Remove</Button></Td>
       </Tr>
     })
      }
    </Tbody>
    </Table>
  </TableContainer>
  <br />
  <br />
  <Heading as='h2' textAlign='center'>Final Price : {tp}</Heading>
  <br />
  <br />
  <br />
  <Button colorScheme='blue'  display='block' alignItems='center' margin='auto' onClick={onOpen}>Place Order</Button>
  <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Place Order
            </AlertDialogHeader>

            <AlertDialogBody>
            Are you sure you want to place this order ?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleOrder} ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
  </>;
};

export default Cart;