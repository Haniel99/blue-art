"use client"
import { DeleteIcon, EditIcon, ViewIcon, ArrowUpDownIcon } from "@chakra-ui/icons";
import { FaFileExcel, FaFilterCircleXmark } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
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
    Button,
    Flex,
    useColorModeValue,
    Select,
    Grid
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
        <Box
            display={"flex"}
            flexDirection={"column"}
            gap={4}
        >
            <Filtros />
            <TableContainer
                bg={useColorModeValue("#fafafa", "#333333")}
                rounded={"lg"}
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
                                        icon={<DeleteIcon />}
                                    />
                                    <StackItemAction
                                        text="ver"
                                        icon={<ViewIcon />}
                                    />
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

const Filtros = () => {
    return (
        <Box
            bg={useColorModeValue("#fafafa", "#333333")}
            rounded={"lg"}
            p={3}
        >
            <Flex
                justify={"space-between"}
                gap={1}
            >
                <Box>
                    <Select placeholder='Filtros'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Box>

                <Box

                >
                    <Box
                    display={"flex"}
                    gap={2}
                    alignItems={"center"}
                    >
                        <Button
                            leftIcon={<FaFilter />}
                        >Aplicar</Button>
                        <Button
                            leftIcon={<FaFilterCircleXmark />}
                        >Limpiar</Button>
                    </Box>
                    <Button
                        leftIcon={<FaFileExcel />}
                    >Exportar</Button>
                </Box>
            </Flex>
            <Box>

            </Box>
        </Box>
    )
}

export default BlueArtTable;