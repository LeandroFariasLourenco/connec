import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const FormWrapper = styled.section`
  flex: 0.9;
`;

export const BackButtonWrapper = styled.div`
  width: 100%;
  height: ${rem(90)};
  display: flex;
  align-items: flex-end;
  padding-left: ${rem(90)};
`;
