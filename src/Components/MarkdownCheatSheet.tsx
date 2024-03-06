import styled from "styled-components";

const GuideContainer= styled.div`
background-color:cyan;
padding:20px;
`

const MarkdownCheatSheet = () => {
  return (
    <GuideContainer>
        <ul>
            <li><code>#</code>-H1</li>
            <li><code>##</code>-H2</li>
            <li><code>###</code>H3</li>
            <li><code>**text**</code>-bold</li>
            <li><code>*text*</code>-italic</li>
            
        </ul>
    </GuideContainer>
  )
}

export default MarkdownCheatSheet
