import styled from "styled-components";

export const StyledSidebar = styled.section`
  background-color: #202123;
  width: 244px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledSidebarButton = styled.button`
  border: solid 0.5px rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border-radius: 4px;
  padding: 12px;
  margin: 12px;
  color: white;
`;

export const StyledSidebarNavigation = styled.nav`
  border-top: solid 0.5px rgba(255, 255, 255, 0.5);
  padding: 12px;
  margin: 12px;
`;

export const StyledSidebarHistoryList = styled.ul`
  padding: 12px;
  margin: 12px;
  height: 100%;
`;

export const StyledSidebarNavigationItem = styled.li`
  list-style-type: none;
  padding: 16px 0;
  cursor: pointer;
`;
