import ContainerBlueArtTable from "./container-blueart-table";
import BlueArtTable from "./bluerart-table";
import {
    Container
} from '@chakra-ui/react'

const PostPage = () => {

    return (
        <Container>
            <ContainerBlueArtTable
            >
               <BlueArtTable/>
            </ContainerBlueArtTable>
        </Container>
    )
}

export default PostPage;