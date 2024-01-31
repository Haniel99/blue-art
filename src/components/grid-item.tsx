"use client"
import { Box, LinkBox, LinkOverlay, Text, useColorModeValue } from "@chakra-ui/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react"


export const WorkGridItem = ({
    children,
    category = 'works',
    id,
    title,
    thumbnail
}: Readonly<{
    children: React.ReactNode;
    category: string;
    id: string | number;
    title: string;
    thumbnail: string | StaticImport
}>) => {
    return (
        <Box
            w={"100%"}
            textAlign={"center"}
            mt={2}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            
            rounded={"lg"}

        >
            <LinkBox
                as={Link}
                href={`/${category}/${id}`}
                scroll={false}
                cursor="pointer"
            >
                <Image
                    src={thumbnail}
                    alt={title}
                    className="rounded-t-lg"
                    placeholder="blur"
                />
                <Box
                >
                    <LinkOverlay as={"div"}
                        href={`/${category}/${id}`}
                        pt={2}
                    >
                        <Text fontSize={20}  >
                            {title}
                        </Text>
                    </LinkOverlay>
                    <Text fontSize={14} px={2} pt={1} pb={3}   >
                        {children}
                    </Text>
                </Box>
            </LinkBox>
        </Box>
    )
}