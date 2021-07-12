import { IconButton } from "@chakra-ui/button";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaYoutube, FaTwitter} from 'react-icons/fa';
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
        
        <IconButton ml={2} icon={ <FaGithub /> } isRound="true"
        onClick={() =>
                        window.open("https://github.com/kenkirito")}
         ></IconButton>
         
        <IconButton ml={2} icon={ <FaLinkedin /> } isRound="true"
         onClick={() =>
                        window.open("https://www.linkedin.com/in/lakshya-mishra-61aa33191/")}
        ></IconButton>
        <IconButton ml={2} icon={ <FaYoutube /> } isRound="true"
         onClick={() =>
                        window.open("https://www.youtube.com/channel/UCmyEipN5pT6sxp1h2tX9xNA")}
        ></IconButton>
        <IconButton ml={2} icon={ <FaTwitter /> } isRound="true"
         onClick={() =>
                        window.open("https://twitter.com/LakshyaMishra56")}
        ></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        </Flex>
        <Header />
        <Social />
        <Profile />
      </VStack>
  );
}

export default App;
