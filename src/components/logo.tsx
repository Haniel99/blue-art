"use client"
import Link from "next/link";
import { Text } from "@chakra-ui/react"
import styled from '@emotion/styled'
import { useColorModeValue } from "@chakra-ui/react";
import CarrotIcon from "./rabbit-icon";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <CarrotIcon></CarrotIcon>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
        >
          Anibal Laura
        </Text>
      </LogoBox>

    </Link>
  )
}

export default Logo;