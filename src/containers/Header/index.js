import styled from 'styled-components'

const Head = styled.div`
  width: 100%;
  background-color: #fefafa;
  padding: 0px 35px;

  @media (max-width: 601px) {
    padding: 0px 20px;
  }
`

const Image = styled.img`
  width: 70px;
  height: 70px;
  padding: 1rem 0;

  @media (max-width: 601px) {
    width: 50px;
    height: 50px;
  }
`

const Header = () => (
  <Head>
    <Image
      decoding="async"
      src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1-70x70.png"
    />
  </Head>
)

export default Header
