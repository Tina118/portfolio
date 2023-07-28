import styled from 'styled-components'
import { Flex } from 'rebass'

const Head = styled(Flex)`
  width: 100%;
  height: 100%;
  padding: 70px 0px 20px 55px;
  flex-direction: column;
  background-color: #fefafa;
  background-image: url('https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/shape1.png');
  background-repeat: no-repeat;

  @media (max-width:769px){
    padding:70px 55px;
  }
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
  margin-bottom: 30px;

  @media (max-width: 769px) {
    margin-bottom: 10px;
  }
`

const Box = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 25px 30px;
`

const Text = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6em;
  word-wrap: break-word;
  margin-bottom: 20px;

  @media (max-width: 1025px) {
    font-size: 0.9rem;
  }

  @media (max-width: 921px) {
    font-size: 0.8rem;
  }

  @media (max-width: 769px) {
    font-size: 0.8rem;
    text-align: left;
  }
`

const Description = styled.div`
  font-weight: 400;
  font-size: 0.85rem;
  line-height: 1.6em;
  word-wrap: break-word;
  margin-bottom: 20px;

  @media (max-width: 1025px) {
    font-size: 0.75rem;
  }

  @media (max-width: 921px) {
    font-size: 0.6rem;
  }

  @media (max-width: 769px) {
    font-size: 0.8rem;
    text-align: left;
  }
`

const experienceInfo = [
  {
    companyAndRole: 'Associate System Engineer, IBM',
    experience: 'Jan 2021 - Oct 2022',
    responsibilities: `During the project, my dedication to maintaining code quality and reliability through thorough testing significantly contributed to the project's success. The seamless translation of designs into top-notch code allowed for a visually appealing user interface, enhancing the overall user experience. Collaborating with the team, I also demonstrated proficiency in creating reusable components, fostering a culture of efficiency and productivity. Furthermore, my commitment to inclusivity and accessibility in the application design ensured that all users, including those with different abilities, could easily navigate and interact with platform, making it more user-friendly. This approach garnered positive feedback and reinforced the project's success with HSBC Bank.`,
  },
  {
    companyAndRole: 'SDE-1, ReBid',
    experience: 'Feb 2023 - July 2023',
    responsibilities: `During my tenure, I drove innovation and efficiency, leading the development of a real-time alert mechanism and enhancing the analytics system with multiple graphs. I prioritized user-friendly design by revamping an existing React page, resulting in a more intuitive experience. My proficiency in Backbone.js facilitated prompt feature delivery and bug fixes, while translating Figma designs into interactive pages maintained design fidelity. I promoted code scalability and efficiency by developing highly reusable React components. Collaborating with the team, I contributed significantly to improving the functionality and usability of Buy and Console products, earning recognition for my dedication to excellence.`,
  },
]

const Experience = () => (
  <Head>
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <H3>Work Experience</H3>
      <Border />
    </Flex>
    <Flex
      width="100%"
      sx={{
        [`@media (max-width: 769px)`]: {
          flexDirection: 'column',
        },
      }}
    >
      {experienceInfo.map(
        ({ companyAndRole, experience, responsibilities }) => (
          <Flex
            width="50%"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            flexDirection="column"
            sx={{
              padding: '50px 55px 50px 0px',
              marginRight: '45px',
              [`@media (max-width: 769px)`]: {
                width: '100%',
                margin: 0,
                padding: '25px 50px 25px 0px',
              },
            }}
          >
            <Box>
              <Text style={{ marginBottom: '20px' }}>{companyAndRole}</Text>
              <Text style={{ marginBottom: '20px', color: '#ec5b53' }}>
                {experience}
              </Text>
              <Description>{responsibilities}</Description>
            </Box>
          </Flex>
        ),
      )}
    </Flex>
  </Head>
)

export default Experience
