import {
  StyledMainFeed,
  StyledMainHeader,
  StyledMainPromptSection,
  StyledMainSection,
  StyledMainPromptInput,
  StyledMainPromptSubmit,
  StyledMainPromptContainer,
  StyledMainPromptInfo,
} from "./styled";

const MainSection = () => {
  return (
    <StyledMainSection>
      <StyledMainHeader>KamilGPT</StyledMainHeader>

      <StyledMainFeed></StyledMainFeed>

      <StyledMainPromptSection>
        <StyledMainPromptContainer>
          <StyledMainPromptInput />
          <StyledMainPromptSubmit>➢</StyledMainPromptSubmit>
        </StyledMainPromptContainer>
        <StyledMainPromptInfo>
          Chat GPT Mar 25 Version. Free Research Preview Our Goal is to make AI
          systemss more natural and safe to interact with. Your feedback will
          help us improve.
        </StyledMainPromptInfo>
      </StyledMainPromptSection>
    </StyledMainSection>
  );
};

export default MainSection;
