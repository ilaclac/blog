import React from "react";
import { Container, List } from "@components/Layout/Header/index.style";
import LinkTo from "@components/LinkTo";

const Header = () => {
  return (
    <Container>
      <List>
        <LinkTo href={"/"}>
          <li>Home</li>
        </LinkTo>
        <span>|</span>
        <LinkTo href={"/posts"}>
          <li>Posts</li>
        </LinkTo>
      </List>
    </Container>
  );
};

export default Header;
