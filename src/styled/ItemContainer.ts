import styled from "styled-components";

export const ItemContainer = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 80%;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 17%;
  margin: auto;
`;
