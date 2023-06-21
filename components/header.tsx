"use client";
import { NavItem } from "../types/types";
import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

const navItems: NavItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Home",
    path: "/",
  },
];

export default function Header() {
  return (
    <>
      <Box bg='gray.100' p={4}>
        <Flex maxW='800px' mx='auto' align='center'>
          <NextLink href='/' passHref>
            <Link fontSize='xl' fontWeight='bold'>
              My Website
            </Link>
          </NextLink>
        </Flex>
      </Box>
    </>
  );
}
