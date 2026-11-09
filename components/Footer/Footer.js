"use client";

import { useState } from "react";
import {
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { COMPANY_ADDRESS, FOOTER_COLUMNS } from "@/constants/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast({ status: "error", title: "Please enter your email address" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast({ status: "success", title: "Subscribed! Thanks for joining." });
    }, 600);
  };

  return (
    <Box as="footer" bg="#fafafa" pt={{ base: 12, md: 20 }} pb={4}>
      <Container maxW="1214px" px={{ base: 6, md: 0 }}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 5 }}
          templateColumns={{ lg: "1.18fr 1fr 1fr 0.8fr 1.25fr" }}
          columnGap={{ base: 8, lg: 10 }}
          rowGap={{ base: 10, lg: 0 }}
          alignItems="start"
        >
          <Box>
            <Box w="195px" h="40px" mb={5}>
              <Image
                src="/images/logonew.jpg"
                alt="Bell Air Lux"
                w="100%"
                h="100%"
                objectFit="contain"
                objectPosition="left center"
              />
            </Box>
            <Text fontSize="16px" lineHeight="1.6" color="#111" fontFamily="Montserrat">
              {COMPANY_ADDRESS.line1}
              <br />
              {COMPANY_ADDRESS.line2}
              <br />
              Tel: {COMPANY_ADDRESS.phone}
            </Text>
          </Box>

          {FOOTER_COLUMNS.map((col) => (
            <Box key={col.title}>
              <Heading
                as="h2"
                fontSize="23px"
                lineHeight="1.2"
                mb={3}
                fontFamily="Montserrat"
                fontWeight="700"
                color="#111"
              >
                {col.title}
              </Heading>
              <Stack spacing={2}>
                {col.links.map((link) => (
                  <ChakraLink
                    as={NextLink}
                    key={link.label}
                    href={link.href}
                    fontSize="16px"
                    lineHeight="1.45"
                    color="#64686e"
                    fontFamily="Montserrat"
                    _hover={{ color: "#111", textDecoration: "none" }}
                  >
                    {link.label}
                  </ChakraLink>
                ))}
              </Stack>
            </Box>
          ))}

          <Box>
            <Heading
              as="h2"
              fontSize="23px"
              lineHeight="1.2"
              mb={3}
              fontFamily="Montserrat"
              fontWeight="700"
              color="#111"
            >
              Newsletter
            </Heading>
            <Text fontSize="14px" lineHeight="1.8" color="#222" mb={8}>
              Stay up to date with our latest news, receive exclusive deals, and more.
            </Text>
            <Input
              placeholder="Enter Your Email Address"
              variant="flushed"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fontSize="14px"
              bg="white"
              px={4}
              h="40px"
              mb={3}
            />
            <Button
              rightIcon={<ArrowForwardIcon />}
              onClick={handleSubscribe}
              isLoading={loading}
              size="sm"
              h="40px"
              px={3}
              border="1px solid"
              borderColor="#eeeeee"
              borderRadius="2px"
              bg="transparent"
              fontSize="13px"
              fontWeight="400"
              letterSpacing="1px"
              _hover={{ bg: "white" }}
            >
              SUBSCRIBE
            </Button>
          </Box>
        </SimpleGrid>

        <Text
          textAlign="center"
          fontSize="14px"
          color="#444"
          mt={{ base: 12, md: 20 }}
          fontFamily="Montserrat"
        >
          © BELL AIR LUX {new Date().getFullYear()}
        </Text>
      </Container>
    </Box>
  );
}
