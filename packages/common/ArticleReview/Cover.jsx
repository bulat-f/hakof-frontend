import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  flex-basis: 35%;
  min-height: 10rem;
`; 

const Inner = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2px 0 0 2px;
  @media screen and (max-width: ${({ theme }) => `${theme.mediaSizes.smMin}px`}) {
    border-radius: 2px 2px 0 0;
  }
`;

class Cover extends React.PureComponent
{
  render() {
    const { src } = this.props;

    return (
      src && <Wrapper>
        <Inner src={src} />
      </Wrapper>
    );
  }
}

export default Cover;