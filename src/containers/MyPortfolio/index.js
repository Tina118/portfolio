import styled from 'styled-components'
import { Flex } from 'rebass'
import { MdReadMore } from 'react-icons/md'
import { AiFillEye } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

const Head = styled(Flex)`
  width: 100%;
  height: 100%;
  padding: 0px 20px 0px 55px;
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

const Description = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.6em;
  word-wrap: break-word;
  margin-bottom: 20px;
  margin-top: 20px;
  height: 90px;

  @media (max-width: 1025px) {
    font-size: 0.75rem;
  }

  @media (max-width: 921px) {
    font-size: 0.6rem;
  }

  @media (max-width: 769px) {
    font-size: 0.8rem;
    text-align: left;
    height: auto;
  }
`

const Desc = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.6em;
  word-wrap: break-word;
  margin-bottom: 20px;
  margin-top: 20px;
  height: 20px;

  @media (max-width: 1025px) {
    font-size: 0.75rem;
  }

  @media (max-width: 921px) {
    font-size: 0.6rem;
  }

  @media (max-width: 769px) {
    font-size: 0.8rem;
    text-align: left;
    height: auto;
  }
`

const redirect = (url) => window.open(url, '_blank')

const portfolio = [
  {
    name: 'Landing Page - Beer Launch',
    description:
      'This project is a simple single page application of a product launch with great UI and user experience of a beer bottle.',
    techStack: 'HTML, CSS, Javascript, React, styled-components',
    moreDetails: 'https://github.com/Tina118/beer-launch/blob/main/README.md',
    website: 'https://tina118.github.io/beer-launch/',
    github: 'https://github.com/Tina118/beer-launch',
  },
  {
    name: 'Amazon Music - Home Page',
    description:
      'This project is a clone of amazon music home page where you can play/pause and change to next or previous music.',
    techStack:
      'HTML, CSS, Javascript, React, React Hooks, Recoil, material-ui, styled-components',
    moreDetails: 'https://github.com/Tina118/amazon-music/blob/main/README.md',
    website: 'https://tina118.github.io/amazon-music/',
    github: 'https://github.com/Tina118/amazon-music',
  },
  {
    name: 'Blogs of Images',
    description:
      'This page displays blogs with API integrated in it. On click of any blog, details of a particular will be displayed. It also has features like paginagtion, login and logout etc.',
    techStack: 'HTML, CSS, Bootstrap, Typescript, React, React Router',
    moreDetails: 'https://github.com/Tina118/blogs/blob/master/README.md',
    website: 'https://tina118.github.io/blogs/posts',
    github: 'https://github.com/Tina118/blogs',
  },
  {
    name: 'Static Single Page',
    description:
      'This project is a single page application with table added and shows data of default option in the top section of table and updates it as per the data of clicked row in the table.',
    techStack:
      'HTML, CSS, Javascript, React, React Hooks, Recoil, material-ui, useTable, useQuery, styled-components',
    moreDetails:
      'https://github.com/Tina118/Shopping-Website/blob/main/README.md',
    website: 'https://tina118.github.io/Shopping-Website/',
    github: 'https://github.com/Tina118/Shopping-Website',
  },
  {
    name: 'My Portfolio',
    description:
      'This project is my portfolio which has details about me, my experience, projects worked on, skills and contact details.',
    techStack: 'HTML, CSS, Javascript, React, styled-components',
    moreDetails: 'https://github.com/Tina118/portfolio/blob/master/README.md',
    website: '',
    github: 'https://github.com/Tina118/portfolio',
  },
]

const MyPortfolio = () => (
  <Head>
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      style={{ marginBottom: '70px', paddingRight: '35px' }}
    >
      <H3>My Portfolio</H3>
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
      {portfolio.map(
        ({ name, description, techStack, moreDetails, website, github }) => (
          <Flex
            width="33.3%"
            sx={{
              [`@media (max-width: 769px)`]: {
                width: '100%',
              },
            }}
          >
            <Box>
              <Text>{name}</Text>
              <Border style={{ margin: `10px auto`, width: '20%' }} />
              <Description>{description}</Description>
              <Desc>
                <span style={{ color: '#ec5b53' }}>Tech Stack:&nbsp;</span>
                {techStack}
              </Desc>
              <Flex
                width="100%"
                justifyContent="space-between"
                style={{ paddingTop: '30px' }}
              >
                <MdReadMore
                  size="30"
                  title="Read More"
                  fill="#002d5b"
                  onClick={() => redirect(moreDetails)}
                  style={{ cursor: 'pointer' }}
                />
                <AiFillEye
                  size="30"
                  title="View Website"
                  fill="#002d5b"
                  onClick={() => redirect(website)}
                  style={{ cursor: 'pointer' }}
                />
                <BsGithub
                  size="30"
                  title="View Code"
                  fill="#002d5b"
                  onClick={() => redirect(github)}
                  style={{ cursor: 'pointer' }}
                />
              </Flex>
            </Box>
          </Flex>
        ),
      )}
    </Flex>
  </Head>
)

export default MyPortfolio
