import styled from 'styled-components';
import Colors from '@Global/colors';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  img.icon {
    width: 12px;
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
    padding-left: 25px;
    padding-bottom: 5px;
    padding-top: 5px;
    transition: 200ms;
    &:focus {
      border-bottom: 1.5px solid ${Colors.PURPLE};
    }
  }
`;
