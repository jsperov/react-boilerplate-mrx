import styled from 'styled-components';

export const GlobalStyledBox = styled.div`
  background: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.milk};
  font-size: 32px;

  a {
    color: ${({ theme }) => theme.colors.milk};
    text-decoration: none
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
