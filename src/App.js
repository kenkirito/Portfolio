import { IconButton } from "@chakra-ui/button";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin} from 'react-icons/fa';
import { useColorMode } from "@chakra-ui/color-mode";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    
      <VStack p={5}>
        <Flex w="100%">
        <Heading
        ml="8" size="md" fontWeight="semibold" color="cyan.400"
         >
         Lakshya's Portfolio
        </Heading>
        <Spacer></Spacer>
        <IconButton ml={2} icon={ <FaGithub /> } isRound="true" ></IconButton>
        <IconButton ml={2} icon={ <FaLinkedin /> } isRound="true"></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        </Flex>
        <Header></Header>
        <Social></Social>
        <Profile></Profile>
      </VStack>
  );
}

export default App;


