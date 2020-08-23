import styled, { keyframes } from 'styled-components';

import { rem } from 'polished';

import Button from '@Components/Button';

const animation = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

export const SearchTerm = styled.div`
margin-top: ${rem(10)};
width: 100%;
display: flex;
flex-flow: column;
align-items: center;
animation: ${animation} 100ms linear;

span {
  font-weight: bold;
  margin-left: ${rem(5)};
  margin-top: ${rem(10)};
  padding: ${rem(5)} ${rem(20)};
  border-radius: 10px;
  background: rgb(109,113,249, .2);
  box-shadow: 0 0 5px rgb(109,113,249, .2);
  display: flex;
  justify-content: space-around;
}
`;

export const Delete = styled(Button)`
margin-left: ${rem(5)};

img {
  width: ${rem(16)};
  height: ${rem(16)};
}
`;
