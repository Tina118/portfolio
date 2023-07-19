import styled from 'styled-components'
import { Flex } from 'rebass'

const Head = styled(Flex)`
  width: 100%;
  height: 100%;
  padding: 70px 55px;
  flex-direction: column;
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

const H5 = styled.h5`
  color: #002d5b;
  line-height: 1.3em;
  margin: 0;
  font-size: 1.85rem;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  margin-bottom: 20px;

  @media (max-width: 921px) {
    font-size: 30px;
  }

  @media (max-width: 769px) {
    font-size: 25px;
    margin-top: 20px;
  }
`

const Border = styled.div`
  border: 1px solid #ec5b53;
  width: 7%;
  margin-bottom: 30px;

  @media (max-width: 769px) {
    margin-bottom: 10px;
  }
`

const Description = styled.div`
  width: 90%;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6em;
  word-wrap: break-word;
  margin-bottom: 20px;
  margin-top: -14px;

  @media (max-width: 1025px) {
    font-size: 0.9rem;
  }

  @media (max-width: 921px) {
    font-size: 0.8rem;
    margin-top: -12px;
  }

  @media (max-width: 769px) {
    width: 100%;
    font-size: 0.8rem;
    text-align: left;
  }
`

const Info = styled.ul`
  margin-left: 10px;
  padding: 10px;
`

const Details = styled.li`
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
`

const Photo = styled.img`
  width: 65%;
  height: 90%;
  border-radius: 15px;
  position: absolute;
  top: 13%;
  left: 25%;

  @media (max-width: 1025px) {
    width: 70%;
    height: 80%;
    left: 15%;
  }

  @media (max-width: 921px) {
    height: 75%;
    width: 78%;
    left: 17%;
    top: 14%;
  }

  @media (max-width: 769px) {
    height: 87%;
    width: 45%;
    top: 9%;
    left: 24%;
  }

  @media (max-width: 601px) {
    margin-top: 10px;
    height: 220px;
    width: 80%;
    top: 10%;
    left: 5%;
  }
`

const Box = styled.div`
  border: 15px solid #ec5b53;
  border-radius: 15px;
  width: 58%;
  height: 100%;
  background-color: #ec5b53;
  margin-right: 30px;

  @media (max-width: 1025px) {
    width: 65%;
    height: 90%;
  }

  @media (max-width: 921px) {
    height: 85%;
    width: 70%;
    margin-right: 0px;
  }

  @media (max-width: 769px) {
    width: 40%;
    height: 400px;
  }

  @media (max-width: 601px) {
    width: 75%;
    height: 230px;
  }
`

const aboutMe = [
  `Hello! My name is Tina Shah & I enjoy creating things that live on the internet. I'm a passionate frontend developer, with strong administrative and communcation skills, good attention to detail & the ability to write efficient code.`,
  `Experience React Developer with a solid track record of almost 2.5 years in the industry.`,
  `Proficient in creating robust and scalable web applications, leveraging React's component-based architecture, state management, and ecosystem of tools and libraries. Strong problem-solving skills and a keen eye for UI/UX, ensuring the delivery of high-quality and user-friendly applications.`,
]

const AboutMe = () => (
  <Head>
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <H3>About Me</H3>
      <Border />
    </Flex>
    <Flex
      width="100%"
      sx={{
        [`@media (max-width: 769px)`]: {
          flexDirection: 'column-reverse',
        },
      }}
    >
      <Flex
        width="60%"
        alignItems="flex-start"
        justifyContent="flex-start"
        flexWrap="wrap"
        flexDirection="column"
        sx={{
          paddingTop: '50px',
          [`@media (max-width: 769px)`]: {
            width: '100%',
            paddingTop: '20px',
          },
          [`@media (max-width: 601px)`]: {
            width: '100%',
            paddingTop: '5%',
          },
        }}
      >
        <H5>Developing With Passion</H5>
        <Border />
        <Info>
          {aboutMe.map((desc) => (
            <Details>
              <Description>{desc}</Description>
            </Details>
          ))}
        </Info>
      </Flex>
      <Flex
        width="40%"
        justifyContent="flex-end"
        sx={{
          paddingTop: '50px',
          position: 'relative',
          [`@media (max-width: 769px)`]: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '20px',
          },
        }}
      >
        <Box />
        <Photo
          decoding="async"
          src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1.jpg"
        />
      </Flex>
    </Flex>
  </Head>
)

export default AboutMe
