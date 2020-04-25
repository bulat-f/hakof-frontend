import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken, lighten } from "polished";

import { User } from "../User";

import { getMeasureUnit } from "../../helpers";

const CommentInputWrapper = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: ${({ theme: borderRadius }) => getMeasureUnit(borderRadius)};
  padding: 1rem;
  margin-bottom: 2rem;
`;

const TextArea = styled.textarea.attrs({
  rows: 4
})`
  border: none;
  width: 100%;
  outline: none;
  font-family: ${({ theme: { basicFont } }) => basicFont};
  font-size: 1rem;
  resize: none;
`;

const CommentInputFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SendBtn = styled.button`
  border: none;
  border-radius: ${({ theme: { borderRadius } }) =>
    getMeasureUnit(borderRadius)};
  background-color: ${({ theme: { colors } }) => colors.success};
  color: white;
  font-family: ${({ theme: { basicFont } }) => basicFont};
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 0.1px;
  padding: 0.25rem 1rem;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { colors } }) => darken(0.1, colors.success)};
  }

  &:active {
    background-color: ${({ theme: { colors } }) =>
      lighten(0.05, colors.success)};
  }

  &:disabled {
    background-color: ${({ theme: { colors } }) =>
      lighten(0.05, colors.success)};
    cursor: not-allowed;
  }
`;

const CommentInputView = ({
  comment,
  user,
  submitting,
  handleChange,
  handleChangeName,
  handleSubmit
}) => (
  <CommentInputWrapper>
    <TextArea
      placeholder="Write your comment"
      value={comment}
      onChange={handleChange}
      disabled={submitting}
    />
    <CommentInputFooter>
      <User {...user} editable onChange={handleChangeName} />
      <SendBtn onClick={handleSubmit} disabled={!comment || submitting}>
        Send
      </SendBtn>
    </CommentInputFooter>
  </CommentInputWrapper>
);

CommentInputView.propTypes = {
  comment: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export { CommentInputView };
