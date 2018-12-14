import styled from 'styled-components';

export const MenuBox = styled.ul`
  margin: 0;
  padding: 0;
  height: 50px;
  background: ${({ theme }) => theme.colors.timberGreen};

  .main-menu__link {
    padding: 3px 10px;
    font-size: 21px;
  }
`