import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
  color: #A65EC6;
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;