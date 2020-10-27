import styled from "styled-components";
import { Form } from "react-bootstrap";

export const FormSelect = styled(Form.Control)`
  @media screen and (max-width: 425px) {
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  width: 20%;
`;
