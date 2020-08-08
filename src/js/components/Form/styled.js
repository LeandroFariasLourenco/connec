import styled, { css } from 'styled-components';

export const FormModel = styled.form`
  ${(props) => props.active ? formShow : formHide}
`;

const formHide = css`
  opacity: 0;
  z-index: -1;
`;

const formShow = css`
  opacity: 1;
  z-index: 3;
`;
