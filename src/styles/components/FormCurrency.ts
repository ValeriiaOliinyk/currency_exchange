import styled from "styled-components";
import { Form } from "react-bootstrap";

export const FormCurrency = styled(Form)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 90%;
  }

  margin: auto;
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 20px;
  border-radius: 20px;
`;
