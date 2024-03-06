import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const OutputContainer = styled.div`
  border-radius: 5px solid black;
  font-size: 20px;
  color: black;
  background-color: grey;
  height: 500px;
  border-radius: 5px solid black;
  width: 100%;
  max-width: 600px;
  margin-top: 3px;
`;
interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput = ({ markdown }: MarkdownOutputProps) => {
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
