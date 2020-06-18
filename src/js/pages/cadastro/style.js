import styled from 'styled-components';
import Colors from '@Global/colors';

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

    .register {
      width: 100%;
      padding: 50px;
      
      &__steps {
        display: flex;
        flex-flow: column;
        width: 20%;
      
        h2 {
          font-weight: 400;
          font-size: 35px;
          color: ${Colors.BLUE};
          padding-left: 20px;
          margin-bottom: 40px;
          text-align: center;
        }

        span {
          width: 100%;
          height: 24px;
          display: block;
          margin: 15px 0;
          padding-left: 50px;
          position: relative;
          color: ${Colors.BLUE};
          font-weight: 14px;
          &.active{
            &:nth-of-type(1),
            &:nth-of-type(2) {
              &:after {
                background-color: ${Colors.PURPLE}
              }
            }

            &:before {
              background-color: ${Colors.PURPLE}
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
            padding: 3px;
            background-clip: content-box;
          }
          
          &:nth-of-type(1),
          &:nth-of-type(2) {
            &:after {
              content: '';
              height: 30px;
              width: 1.5px;
              background: ${Colors.GREY};
              position: absolute;
              left: 22px;
              top: 24px;
            }
          }
        }
      }

      button {
        width: 80%; 
        margin: 0 auto;
        margin-top: 30px;
      }
    }
  }
`;
