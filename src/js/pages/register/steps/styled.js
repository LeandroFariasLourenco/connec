import styled from 'styled-components';
import { rem } from 'polished';

export const StepWrapper = styled.div`
  width: 100%;
  padding: ${rem(50)};
  
  .steps {
    display: flex;
    flex-flow: column;
    width: 20%;
  
    h2 {
      font-weight: 400;
      font-size: ${rem(35)};
      color: ${({ theme }) => theme.blue};
      padding-left: ${rem(20)};
      margin-bottom: ${rem(40)};
      text-align: center;
    }

    span {
      width: 100%;
      height: 24px;
      display: block;
      margin: ${rem(14)} 0;
      padding-left: ${rem(50)};
      position: relative;
      color: ${({ theme }) => theme.blue};
      font-weight: 14px;
      &.active{
        &:nth-of-type(2),
        &:nth-of-type(3) {
          &:after {
            background-color: ${({ theme }) => theme.purple};
          }
          &:before {

          }
        }

        &:before {
          background-color: ${({ theme }) => theme.purple}
        }
      }

      &:before {
        content: '';
        border-radius: 100%;
        width: 24px;
        height: 24px;
        border: 2px solid #929292;
        position: absolute;
        left: 10px;
        padding: ${rem(3)};
        background-clip: content-box;
      }
      
      &:nth-of-type(1),
      &:nth-of-type(2) {
        &:after {
          content: '';
          height: 30px;
          width: ${rem(1.5)};
          color: ${({ theme }) => theme.grey};
          position: absolute;
          left: ${rem(22)};
          top: ${rem(24)};
        }
      }
    }
    button {
      width: 80%; 
      margin: 0 auto;
      margin-top: ${rem(30)};
    }
  }
`;
