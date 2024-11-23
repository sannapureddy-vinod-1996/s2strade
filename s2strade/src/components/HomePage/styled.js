import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const CustomNavbar = styled.nav`
  background-color: #007bff;
  padding: 1rem;
`;

export const CustomButton = styled(Button)`
  padding: 5px 15px; 
  margin-left: 10px;
`;

export const CustomFooter = styled.footer`
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 1rem;
`;

export const ClickableText = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: blue;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const TableCellImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const TableTitle = styled.th`
  text-align: center;
`;

export const CenteredTable = styled.table`
  width: 100%;
  border: 1px solid #ccc;
  text-align: center;
`;

