"use client"
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Stack,
    StackItem,
    Text,
    Button
} from "@chakra-ui/react";
import { ReactElement } from "react";

const StackItemAction = ({
    text,
    icon }: Readonly<{
        text: string;
        icon: ReactElement
    }>
) => {
    return (
        <StackItem
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            cursor={"pointer"}
            _hover={{
                color: "gray.400"
            }}
        >
            {icon}
            <Text
                fontSize={"14px"}
            >{text}</Text>
        </StackItem>
    )
}

const BlueArtTable = () => {
    return (
        <Box>
            <Box>
                Filtros
            </Box>
            <TableContainer
            >
                <Table >
                    <TableCaption>Lista de elemtos para la tabla</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th >actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>
                                <Stack
                                display={"flex"}
                                direction={"row"}
                                >
                                    <StackItemAction
                                        icon={<EditIcon />}
                                        text="Editar"
                                    />
                                    <StackItemAction
                                        text="Eliminar"
                                        icon={<DeleteIcon />} />
                                </Stack>
                            </Td>
                        </Tr>

                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>

        </Box>
    )
}

export default BlueArtTable;