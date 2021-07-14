import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMailBulk,
} from "react-icons/fa";

function Social() {
  return (
    <HStack spacing="24">
      <Icon
        as={FaTwitter}
        style={{ cursor: "pointer" }}
        boxSize="50"
        onClick={() => window.open("https://twitter.com/LakshyaMishra56")}
      />
      <Icon
        as={FaLinkedinIn}
        style={{ cursor: "pointer" }}
        boxSize="50"
        onClick={() =>
          window.open("https://www.linkedin.com/in/lakshya-mishra-61aa33191/")
        }
      />
     
      <Icon
        as={FaMailBulk}
        boxSize="50"
        style={{ cursor: "pointer" }}
        onClick={() => window.open("mailto:lakshya.mishra56@gmail.com")}
      />
    </HStack>
  );
}

export default Social;
