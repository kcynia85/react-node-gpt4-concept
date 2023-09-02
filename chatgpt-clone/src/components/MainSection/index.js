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
import axios from "axios";

const MainSection = () => {
  const getMessages = async () => {
    const options = {
      body: {
        message: "Hello ! How are you?",
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/completions",
        {
          options,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.error("Błąd podczas przetwarzania zapytania:", error);
    }
  };

  return (
    <StyledMainSection>
      <StyledMainHeader>KamilGPT</StyledMainHeader>

      <StyledMainFeed></StyledMainFeed>

      <StyledMainPromptSection>
        <StyledMainPromptContainer>
          <StyledMainPromptInput />
          <StyledMainPromptSubmit onClick={getMessages}>
            ➢
          </StyledMainPromptSubmit>
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
