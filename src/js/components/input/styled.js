import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  img.icon {
    width: ${rem(12)};
    position: absolute;
    left: 2%;
    top: 50%;
    transform: translateY(-50%);
    padding-bottom: 5px;
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1.5px solid #707070;
    padding-left: ${rem(25)};
    padding-bottom: ${rem(5)};
    padding-top: ${rem(5)};
    transition: 200ms;
    &:focus {
      border-bottom: 1.5px solid ${({ theme }) => theme.purple};
    }
  }
`;