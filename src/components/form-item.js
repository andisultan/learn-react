import styled from 'styled-components';

const FormItem = styled.div`
  display: block;
  padding: 10px 0;

  label {
    display: block;
    padding: 5px 0;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  input[type="number"],
  input[type="password"],
  input[type="file"],
  textarea {
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #EEEEEE;
    border-radius: 4px;
  }
`;

export default FormItem;