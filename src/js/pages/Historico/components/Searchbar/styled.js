import styled from 'styled-components';

import { rem } from 'polished';

import Form from '@Components/Form';
import Button from '@Components/Button';

export const SearchWrapper = styled(Form)`
  width: 30%;
  border-radius: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const SearchInput = styled.input`
  padding: ${rem(10)};
  margin-right: ${rem(5)};
  width: 70%;
  text-align: center;
  border-radius: 10px;
  transform: translateY(-10px);
  transition: 200ms;

  &:focus {
    background: rgba(109, 113, 249, .1);
  }
`;

export const Submit = styled(Button)`
  transform: translateY(-5px);

  img {
    width: ${rem(21)};
    height: ${rem(21)};
  }
`;
