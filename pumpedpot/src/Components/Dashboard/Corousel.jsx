import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  SlideFade,
  Text,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const images = [
  {
    id: 1,
    src: "https://via.placeholder.com/500x250/008000/FFFFFF?text=Image+1",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://via.placeholder.com/500x250/FF0000/FFFFFF?text=Image+2",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://via.placeholder.com/500x250/0000FF/FFFFFF?text=Image+3",
    alt: "Image 3",
  },
];

const Carousel = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevious = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    onToggle();
  };

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    onToggle();
  };

  return (
    <Center>
    <Box position="relative" mb="4" w="700px" h="300px">
      <SlideFade in={isOpen} offsetY="-20px">
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontWeight="bold"
        >
          {images[currentImage].alt}
        </Text>
      </SlideFade>
      <Flex
        position="absolute"
        top="50%"
        left="0"
        transform="translateY(-50%)"
        w="100%"
        h="100%"
        justify="space-between"
        alignItems="center"
      >
        <IconButton
          aria-label="Previous"
          icon={<ArrowBackIcon />}
          onClick={handlePrevious}
          bg="transparent"
          color="white"
        />
        <IconButton
          aria-label="Next"
          icon={<ArrowForwardIcon />}
          onClick={handleNext}
          bg="transparent"
          color="white"
        />
      </Flex>
      <img
        src={images[currentImage].src}
        alt={images[currentImage].alt}
        width="100%"
        height="auto"
        onMouseEnter={onToggle}
        onMouseLeave={onToggle}
      />
    </Box>
    </Center>
  );
};

export default Carousel;