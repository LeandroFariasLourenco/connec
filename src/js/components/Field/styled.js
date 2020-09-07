import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  ${({ reset }) => reset ? '' : 'display: flex;'}
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
`;
