import styled from "styled-components";

const InputContainer = styled.div`
  width: 50%;
  max-width: 575px;
  margin-top: 3px;
`;

const StyledTextArea = styled.textarea`
  font-size: 20px;
  color: black;
  width: 100%;
  background-color: grey;
  height: 495px;
  border-radius: 5px solid black;
`;
interface MarkdownInputProps {
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const MarkdownInput = ({ value, handleOnChange }: MarkdownInputProps) => {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={handleOnChange}></StyledTextArea>
    </InputContainer>
  );
};
export default MarkdownInput;
