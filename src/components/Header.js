import React from 'react';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import {useMediaQuery} from '@chakra-ui/media-query';
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from '@chakra-ui/image';
import { Button, ButtonGroup, EmailIcon } from "@chakra-ui/react"
function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const email = <EmailIcon />;


    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
    return (
        <Stack>
         <Circle position="absolute" bg="blue.100" opacity="0.02" w="300px" h="300px" alignSelf="flex-end" 
         />
         <Flex direction={isNotSmallerScreen ? "row" : "column" }
         spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
         alignSelf="flex-start">
            <Box p={isNotSmallerScreen ? "0" : "16"}>
                <Text fontSize="5xl" fontWeight="semibold"> Hi, i am  </Text>
                <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" > Lakshya Mishra </Text>
                <Text color={isDark ? "gray.200" : "gray.500"}> mern stack, python, flutter, reactnative, devOps, threejs, Blenders 🍥🍥🍥</Text>
                <Button mt={8}  colorScheme="blue" >Hire Me</Button>
                <Button mt={8} leftIcon={<EmailIcon />}  ml="2" colorScheme="blue" > Email </Button>
                <Button mt={8} ml="2" colorScheme="blue" > Call </Button>
             🐍 
               
            </Box>
            <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                     boxShadow="lg" backgroundColor="transparent"
                     boxSize="300px"
             src='https://avatars.githubusercontent.com/u/68530218?s=400&u=96d067e5bda86c33d465812e98380a14b071b89f&v=4' />

         </Flex>
        </Stack>
    )
}

export default Header

