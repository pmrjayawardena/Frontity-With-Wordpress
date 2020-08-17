import React from "react";
import { connect, styled } from "frontity";

const link = ({ href, actions, children }) => {
  return (
    <Link>
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          actions.router.set(href);
        }}
      >
        {children}
      </a>
    </Link>
  );
};

export default connect(link);

const Link = styled.div`
  border-radius: 6px;
  background: #f2f2f2;
  box-shadow: 20px 20px 60px #cecece, -20px -20px 60px #ffffff;
  margin-bottom: 1rem;
  cursor: pointer;

  a {
    display: block;
    width: 100%;
  }
`;
