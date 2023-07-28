import styled from 'styled-components'
import { Flex } from 'rebass'

import html from 'assets/html.png'
import css from 'assets/css.png'
import javascript from 'assets/js.png'
import typescript from 'assets/typescript.png'
import react from 'assets/react.jpeg'
import redux from 'assets/redux.jpeg'

const Head = styled(Flex)`
  width: 100%;
  height: 100%;
  padding: 70px 20px 20px 55px;
  flex-direction: column;
  background-color: #fefafa;
  background-image: url('https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/shape1-horiz.png');
  background-repeat: no-repeat;
`

const H3 = styled.h3`
  color: #002d5b;
  line-height: 1.2em;
  margin: 0;
  font-size: 2.25rem;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 921px) {
    font-size: 30px;
  }

  @media (max-width: 769px) {
    font-size: 25px;
  }
`

const Border = styled.div`
  border: 1px solid #ec5b53;
  width: 3%;
`

const Box = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-right: 35px;
  margin-bottom: 20px;
`

const Text = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6em;
  word-wrap: break-word;
  text-align: center;
  margin-top: 7px;
  @media (max-width: 1025px) {
    font-size: 0.9rem;
  }

  @media (max-width: 921px) {
    font-size: 0.8rem;
  }

  @media (max-width: 769px) {
    font-size: 0.8rem;
  }
`

const skills = [
  { name: 'HTML', src: html },
  { name: 'CSS', src: css },
  { name: 'Javascript', src: javascript },
  { name: 'Typescript', src: typescript },
  { name: 'React', src: react },
  { name: 'Redux', src: redux },
]

const Skills = () => (
  <Head>
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      style={{ marginBottom: '70px', paddingRight: '35px' }}
    >
      <H3>Skills</H3>
      <Border />
    </Flex>
    <Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >
      {skills.map(({ name, src }) => (
        <Box>
          <img src={src} width="85px" height="100px" />
          <Text>{name}</Text>
        </Box>
      ))}
    </Flex>
  </Head>
)

export default Skills
