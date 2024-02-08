"use client"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { Badge, Box, Heading,  Link, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const Title = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <Box>
            <Link as={NextLink} href="/works"
                color={useColorModeValue('#3d7aed', '#ff63c3')} >
                Works
            </Link>
            <span>
                {' '}
                <ChevronRightIcon />
            </span>
            <Heading display={"inline-block"} as={"h3"}
                fontSize={20} mb={4}
            >{children}</Heading>
        </Box>
    )
}

export const WorkImage = ({ thumbnail, alt }: Readonly<{ thumbnail: string | StaticImport; alt: string; }>) => {
    return (
        <Image className="rounded-lg mb-3" src={thumbnail} alt={alt} />
    )
}

export const Meta = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (<Badge colorScheme="green" mr={2} >
        {children}
    </Badge>)
}