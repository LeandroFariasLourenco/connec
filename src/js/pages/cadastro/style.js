import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;

  section {
    flex: 0.90;
    
    .return {
      width: 100%;
      height: 90px;
      display: flex;
      align-items: flex-end;
      padding-left: 60px;
    }
  }
`;
