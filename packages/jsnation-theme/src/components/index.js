import React from "react";
import { connect, Global, css, styled, Head } from "frontity";
import Link from "./link";
import List from "./list";
import Post from "./post";
import Page from "./page";
const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }

          nav {
            display: flex;
            width: 300px;
            justify-content: space-between;
            align-items: center;

            a {
              color: #000;
            }
          }
          img {
            max-width: 100%;
          }
          a {
            text-decoration: none;
          }
        `}
      />
      <Head>
        <title>My Frontity Testing Website</title>
        <meta name="description" content="Awesome" />
      </Head>
      <Header isPostType={data.isPostType}>
        <h1>Frontity Workshop</h1>
        {state.theme.isMenuOpen ? (
          <>
            <button onClick={actions.theme.closeMenu}>Close</button>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/page/2">More Posts</Link>
              <Link href="/lorem-ipsum">Lorem Ipsum</Link>
            </nav>
          </>
        ) : (
          <button onClick={actions.theme.openMenu}>Open</button>
        )}
      </Header>
      <hr />
      <Main>
        <main>
          <div className="container">
            {data.isArchive && <List />}
            {data.isPost && <Post />}
            {data.isPage && <Page />}
          </div>
        </main>
      </Main>
    </>
  );
};

export default connect(Root);

const Header = styled.header`
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${(props) => (props.isPostType ? "lightseagreen" : "maroon")};
  h1 {
    font-size: 25px;
  }
`;

const Main = styled.main`
  max-width: 900px;
  margin: auto;
  padding: 1rem;
`;
