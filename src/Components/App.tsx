import { useState } from "react";
import Header from "./Header";
import MarkdownCheatSheet from "./MarkdownCheatSheet";
import MarkdownInput from "./MarkdownInput";
import MarkdownOutput from "./MarkdownOutput";
import styled from "styled-components";

const FinalContainer= styled.div`
 display: flex;
 flex-direction:row;
 justify-content: space-between;
`
const App = () => {
  const [CheatSheet, setCheatSheet] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>("# Hello World");

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  const handleToggleGuide = () => {
    setCheatSheet(!CheatSheet);
  };
  return (
    <div>
      <Header onToggleGuide={handleToggleGuide}></Header>
      {CheatSheet && <MarkdownCheatSheet />}

<FinalContainer>
      <MarkdownInput
        value={markdown}
        handleOnChange={handleInput}
      ></MarkdownInput>
      <MarkdownOutput markdown={markdown}></MarkdownOutput>
      </FinalContainer>
    </div>
  );
};

export default App;
