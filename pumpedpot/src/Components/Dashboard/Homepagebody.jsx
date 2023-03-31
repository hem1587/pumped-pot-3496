import { Box, Heading, Text,Center,Image,Container,VStack,Flex } from "@chakra-ui/react";
import Carousel from "./Corousel"

 export default function HomepageBanner() {
  return (
    <>
    <Box bg="yellow.400"  w="100%" borderRadius="md">
          <Text fontSize="md" fontWeight="bold" color="white">
            Use code SPRINGSALE at checkout.
          </Text>
        </Box>
        <Carousel/>
       
    
        
     <Center>
    <Box py={4}>
    <Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip2-14Mar23.jpg"/>
    </Box>
    </Center>
    
    <Heading textAlign="left" marginLeft="110px" py={2} as='h3' size='lg' colour="black.400" >Our Benefits</Heading>
    
    <Center>
      <Box py={4}>
    <Flex>
    
        <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-22Feb2023.jpg" />
        <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-22Feb2023.jpg" />
        <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-22Feb2023.jpg" />
    
    </Flex>
    </Box>  
    </Center>
    <Center>
    <Box py={4}>
    <Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip3-30Mar2023.jpg"/>
    </Box>
    </Center>
    <Heading textAlign="left" marginLeft="110px" py={2} as='h3' size='lg' colour="black.400" >Unmissable Offers</Heading>
    
    </>
  );
}
