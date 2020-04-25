import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken } from "polished";
import { P } from "@hakof/ui";
// import { Rating } from "../Rating";
import { User } from "../User";

import { Comment } from ".";

const CommentWrapper = styled.div`
  margin: 1rem 0;
`;

const CommentFooter = styled.div`
  display: flex;
  align-items: center;
`;

const ReplyBtn = styled(P)`
  color: ${({ theme: { colors } }) => colors.gray};
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    color: ${({ theme: { colors } }) => darken(0.2, colors.gray)};
  }
`;

const RepliesWeapper = styled.div`
  margin-left: 2rem;
`;

const CommentView = ({ text, author, likes, dislikes, replies }) => (
  <Fragment>
    <CommentWrapper>
      <User {...author} />
      <P>{text}</P>
      <CommentFooter>
        {/* <Rating likes={likes} dislikes={dislikes} /> */}
        <ReplyBtn>Reply</ReplyBtn>
      </CommentFooter>
    </CommentWrapper>
    {replies && (
      <RepliesWeapper>
        {replies.map(reply => (
          <Comment key={`comment-${reply.id}`} {...reply} />
        ))}
      </RepliesWeapper>
    )}
  </Fragment>
);

CommentView.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  likes: PropTypes.shape({
    count: PropTypes.number.isRequired
  }).isRequired,
  dislikes: PropTypes.shape({
    count: PropTypes.number.isRequired
  }).isRequired,
  author: PropTypes.object.isRequired
};

export { CommentView };
