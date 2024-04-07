import React, { useState } from "react";
import { Box, Button, Center, Container, Heading, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [latexCode, setLatexCode] = useState("");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onUploadClick = () => {
    // TODO: Implement image processing logic here
    // 1. Transcribe Korean text
    // 2. Convert mathematical expressions to LaTeX
    // 3. Preserve graphs and geometric figures as images in LaTeX
    // For demonstration purposes, we'll just set some dummy LaTeX code
    setLatexCode(
      `\\documentclass{article}
\\usepackage{graphicx}
\\usepackage{kotex}

\\begin{document}
이것은 한국어 텍스트입니다.

\\begin{equation}
y = mx + b
\\end{equation}

\\begin{figure}[h]
\\centering
\\includegraphics[width=0.5\\textwidth]{https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxncmFwaCUyMG9mJTIwYSUyMGZ1bmN0aW9ufGVufDB8fHx8MTcxMjQ5MTI0M3ww&ixlib=rb-4.0.3&q=80&w=1080}
\\caption{그래프}
\\end{figure}

\\end{document}`,
    );
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Center>
        <VStack spacing={8} align="center" textAlign="center">
          <Heading as="h1" size="2xl">
            Math Problem Image Processor
          </Heading>
          <Text fontSize="xl">Upload an image of a math problem to convert it to LaTeX, preserving Korean text, equations, and graphs.</Text>
          <Stack direction={["column", "row"]} spacing={4}>
            <Input type="file" onChange={onImageChange} display="none" id="image-upload" />
            <Button leftIcon={<FaUpload />} onClick={() => document.getElementById("image-upload").click()}>
              Select Image
            </Button>
            <Button colorScheme="blue" onClick={onUploadClick}>
              Process Image
            </Button>
          </Stack>
          {selectedImage && (
            <Box borderWidth={1} borderRadius="lg" p={4}>
              <Image src={selectedImage} alt="Uploaded Image" />
            </Box>
          )}
          {latexCode && (
            <Box borderWidth={1} borderRadius="lg" p={4} overflowX="auto">
              <pre>{latexCode}</pre>
            </Box>
          )}
        </VStack>
      </Center>
    </Container>
  );
};

export default Index;
