
import {Box} from "@chakra-ui/react"
import WithSubnavigation from "./Navbar"

import HomepageBanner from "./Homepagebody"



 export default function Dashboard(){
    return(
        <Box>
        <WithSubnavigation/>
        <HomepageBanner/>
        </Box>
    )

}