import styled from 'styled-components'
import { Flex } from 'rebass'

import photo from 'assets/image.png'

const Head = styled(Flex)`
  width: 100%;
  background-color: #fefafa;
  padding: 0 55px;

  @media (max-width: 601px) {
    flex-direction: column-reverse;
  }
`

const H1 = styled.h1`
  color: #002d5b;
  line-height: 1.3em;
  margin: 0;
  font-size: 4rem;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  margin-bottom: 30px;

  @media (max-width: 921px) {
    font-size: 30px;
  }

  @media (max-width: 769px) {
    font-size: 25px;
  }

  @media (max-width: 601px) {
    width: 100%;
    font-size: 20px;
    margin-bottom: 20px;
  }
`

const Description = styled.div`
  width: 80%;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.6em;
  word-wrap: break-word;
  margin-bottom: 20px;

  @media (max-width: 921px) {
    width: 90%;
    font-size: 0.95rem;
  }

  @media (max-width: 769px) {
    font-size: 0.8rem;
  }

  @media (max-width: 601px) {
    width: 100%;
    font-size: 0.7rem;
  }
`

const Button = styled.button`
  background-color: #ec5b53;
  color: #ffffff;
  border: none;
  border-color: #ec5b53;
  font-size: 0.95rem;
  line-height: 1em;
  border-radius: 5px;
  padding: 15px 30px;
  margin-top: 35px;

  @media (max-width: 601px) {
    width: 100%;
    margin-top: 20px;
  }
`

const Photo = styled.img`
  border-radius: 50%;
  width: 85%;
  height: 85%;
  border: 2px solid #ec5b53;

  @media (max-width: 601px) {
    height: 50%;
    max-width: 50%;
  }
`

const Introduction = () => (
  <Head>
    <Flex
      width="60%"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexWrap="wrap"
      flexDirection="column"
      sx={{
        paddingTop: '50px',
        [`@media (max-width: 601px)`]: {
          width: '100%',
          justifyContent: 'center',
          alignContent: 'center',
          textAlign: 'center',
          paddingTop: '20px',
        },
      }}
    >
      <H1>
        I'm Web Developer <br /> Tina Shah
      </H1>
      <Description>
        Resolving design problems, building smart user interfaces, and useful
        interactions, developing rich web applications and seamless web
        experiences.
      </Description>
      <Button>Resume</Button>
    </Flex>
    <Flex
      width="40%"
      justifyContent="flex-end"
      sx={{
        [`@media (max-width: 601px)`]: {
          width: '100%',
          justifyContent: 'center',
          alignContent: 'center',
        },
      }}
    >
      <Photo src={photo} />
    </Flex>
  </Head>
)

export default Introduction
