"use client"
import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
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
        <Box w={"100%"} textAlign={"center"} mt={3}  >
            <LinkBox
                as={Link}
                href={`/${category}/${id}`}
                scroll={false}
                cursor="pointer"
            >
                <Image
                    src={thumbnail}
                    alt={title}
                    className="rounded-lg"
                    placeholder="blur"
                />
                <LinkOverlay as={"div"}
                    href={`/${category}/${id}`}

                >
                    <Text fontSize={20} >
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14} >
                    {children}
                </Text>
            </LinkBox>
        </Box>
    )
}