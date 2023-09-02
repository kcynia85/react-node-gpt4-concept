import { useState } from "react";
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
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const getMessages = async () => {
    console.log("Wartość value:", value);

    try {
      const response = await axios.post(
        "http://localhost:8000/completions",
        {
          message: value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      setMessage(data.choices[0].message);
    } catch (error) {
      console.error("Błąd podczas przetwarzania zapytania:", error);
    }
  };

  return (
    <StyledMainSection>
      <StyledMainHeader>KamilGPT</StyledMainHeader>

      <StyledMainFeed>
        {message && (
          <div>
            <div>Role: {message.role}</div>
            <div>Content: {message.content}</div>
          </div>
        )}
      </StyledMainFeed>

      <StyledMainPromptSection>
        <StyledMainPromptContainer>
          <StyledMainPromptInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              console.log(value);
            }}
          />
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
