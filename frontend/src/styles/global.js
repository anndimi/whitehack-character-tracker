import styled from 'styled-components';

export const PageTitle = styled.h1`
  text-align: center;
  color: white;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 80%;
  max-width: 1000px;
  padding-bottom: 50px;
  h1 {
    margin-top: 30px;
    margin-bottom: 0;
    text-align: center;
  }
`;

export const Divider = styled.img`
  width: 90% !important;
  opacity: 0.7 !important;
  align-self: center;
  padding: 20px 0;
`;
