import styled from 'styled-components';
import SidebarBG from '@Images/login/sidebar.png';

export const Options = styled.div`
  width: 30%;
  height: 100%;
  background: url(${SidebarBG});
  background-size: cover;
  background-position: 0px 90%;
  display: flex;
  flex-flow: column;

  div {
    width: 100%;
    flex: 0.30;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;

    img {
      width: 100px;
      &:nth-of-type(2) {
        transform: translate(10px, -20px);
      }
    }

    &.support {
      display: flex;
      flex-flow: row;
      justify-content: flex-start;
      align-items: flex-end;
      padding-bottom: 10px;
      padding-left: 30px;
      
      img {
        width: 20px;
      }

      p {
        font-weight: bold;
        display: flex;
        align-items: flex-end;
        padding: 0 10px;
        color: white;
        span {
          margin: 0 5px;
        }
      }
    }
  }

  nav {
    width: 100%;
    flex: 0.50;
    display: flex;
    justify-content: flex-end;

    ul {
      width: 20%;
      height: auto;
      
      li {
        border-radius: 10px 0 0 10px;
        width: 100%;
        padding: 15px 0;
        text-align: center;
        cursor: pointer;
        text-transform: uppercase;
        position: relative;
        color: white;
        &.active {
          color: ${({ theme }) => theme.blue};
          font-size: 16px;
          background: white;
        }
      }
    }
  }
`;
