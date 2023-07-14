import styled from 'styled-components'

const Head = styled.div`
  width: 100%;
  background-color: #fefafa;
  padding: 0px 35px;
`

const Header = () => (
  <Head>
    <img
      style={{ padding: `1rem 0` }}
      width="70"
      height="70"
      src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1-70x70.png"
    />
  </Head>
)

export default Header
