import styled from "styled-components";

export const StyledMainSection = styled.main`
  display: grid;
  align-content: space-between;
  align-items: center;
  text-align: center;
`;

export const StyledMainHeader = styled.h1``;

export const StyledMainFeed = styled.ul``;

export const StyledMainPromptSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledMainPromptContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const StyledMainPromptInput = styled.input`
  width: 750px;
  color: white;
  border: none;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 16px;
  border-radius: 8px;
  margin: 0 16px 0 32px;
  font-size: 20px;
`;

export const StyledMainPromptSubmit = styled.button`
  margin-right: 32px;
  padding-right: 16px;
  padding-left: 16px;
  border-radius: 4px;
  border: none;
  font-size: 32px;
`;

export const StyledMainPromptInfo = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  padding: 12px;
`;
