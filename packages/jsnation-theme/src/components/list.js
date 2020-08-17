import React, { Fragment } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
const list = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <Item>
      {data.items.map((item) => {
        const postItem = state.source.post[item.id];

        return (
          <Link key={item.id} href={postItem.link}>
            {postItem.title.rendered}
          </Link>
        );
      })}
    </Item>
  );
};
export default connect(list);

const Item = styled.div``;
