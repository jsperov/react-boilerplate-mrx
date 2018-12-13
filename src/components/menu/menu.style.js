import styled from 'styled-components';

export const MenuBox = styled.ul`
  margin: 0;
  background: ${props => props.theme.colors.darkBlue};

  .main-menu__link {
    padding: 3px 10px;
    color: white;
  }
`