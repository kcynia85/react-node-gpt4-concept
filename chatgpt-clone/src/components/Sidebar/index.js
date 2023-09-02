import {
  StyledSidebar,
  StyledSidebarButton,
  StyledSidebarHistoryList,
  StyledSidebarNavigation,
  StyledSidebarNavigationItem,
} from "./styled";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledSidebarButton>+ New Chat</StyledSidebarButton>
      <StyledSidebarHistoryList>
        <StyledSidebarNavigationItem>History Item</StyledSidebarNavigationItem>
      </StyledSidebarHistoryList>
      <StyledSidebarNavigation>
        <StyledSidebarNavigationItem>Made by Kamil</StyledSidebarNavigationItem>
      </StyledSidebarNavigation>
    </StyledSidebar>
  );
};

export default Sidebar;
