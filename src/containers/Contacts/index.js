import styled from 'styled-components'
import { Flex } from 'rebass'
import { GiSmartphone } from 'react-icons/gi'
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'

const Head = styled(Flex)`
  width: 100%;
  height: 100%;
  padding: 70px 20px 70px 55px;
  background-color: #fefafa;
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

const Border = styled.div`
  border: 1px solid #ec5b53;
  width: 7%;
`

const Box = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 25px 30px 25px 30px;
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

const Description = styled.span`
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.6em;
  word-wrap: break-word;

  @media (max-width: 1025px) {
    font-size: 0.75rem;
  }

  @media (max-width: 921px) {
    font-size: 0.6rem;
  }

  @media (max-width: 769px) {
    font-size: 0.8rem;
  }
`

const Contacts = () => (
  <Head>
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      style={{ marginBottom: '70px', paddingRight: '35px' }}
    >
      <H3>Contact Me</H3>
      <Border />
    </Flex>
    <Flex
      width="100%"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexWrap="wrap"
      sx={{
        [`@media (max-width: 769px)`]: {
          flexDirection: 'column',
        },
      }}
    >
      <Flex
        width="33.3%"
        sx={{
          [`@media (max-width: 769px)`]: {
            width: '100%',
          },
        }}
      >
        <Box>
          <Text>Mobile No</Text>
          <Border style={{ margin: `10px auto`, width: '10%' }} />
          <Flex
            width="100%"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: '20px' }}
          >
            <GiSmartphone size={22} style={{ marginRight: '10px' }} />
            <Description>+91 9967340744</Description>
          </Flex>
        </Box>
      </Flex>
      <Flex
        width="33.3%"
        sx={{
          [`@media (max-width: 769px)`]: {
            width: '100%',
          },
        }}
      >
        <Box>
          <Text>LinkedIn</Text>
          <Border style={{ margin: `10px auto`, width: '10%' }} />
          <Flex
            width="100%"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: '20px' }}
          >
            <AiOutlineLinkedin size={22} style={{ marginRight: '10px' }} />
            <Description style={{ textDecoration: 'underline',cursor:'pointer' }}>
              Profile
            </Description>
          </Flex>
        </Box>
      </Flex>
      <Flex
        width="33.3%"
        sx={{
          [`@media (max-width: 769px)`]: {
            width: '100%',
          },
        }}
      >
        <Box>
          <Text>Mail Id</Text>
          <Border style={{ margin: `10px auto`, width: '10%' }} />
          <Flex
            width="100%"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: '20px' }}
          >
            <AiOutlineMail size={22} style={{ marginRight: '10px' }} />
            <Description>tinashah1998@gmail.com</Description>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  </Head>
)

export default Contacts
