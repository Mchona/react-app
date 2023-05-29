import { Center, Icon, Button, Box, Avatar, Flex } from '@chakra-ui/react'



const Chakraui = () => {


  return (
    <div>
      <Center bg='tomato' h='100px' color='white'>
        This is the Center
      </Center>

      <Flex>
        <Icon viewBox='0 0 200 200' color='red.500'>
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>

        <Icon />
        <Button colorScheme='blue'>ChakraButton</Button>

        <Box>
          <Avatar size="xl" name="John Doe" src="/logo512.png" />
        </Box>
      </Flex>

    </div>
  );
};

export default Chakraui
