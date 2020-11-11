import styled from 'styled-components';
import Select from '@material-ui/core/Select';

export const SelectField = styled(Select)`
  & .MuiFilledInput-input {
    padding: 17px 4px 17px;
  }

  & .MuiSelect-iconFilled {
    right: 15%;
    top: 65%;
  }

  & .MuiInputBase-input {
    text-align: center;
    font-size: 12px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletFrom} {
    & .MuiFilledInput-input {
      padding: 17px 27px 17px;
    }

    & .MuiSelect-iconFilled {
      right: 7px;
      top: 25%;
    }

    & .MuiInputBase-input {
      font-size: 16px;
    }
  }
`;
