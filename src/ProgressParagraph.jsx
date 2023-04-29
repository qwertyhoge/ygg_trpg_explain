import styled from "styled-components";

const Paragraph = styled.p`
margin: 5px 0px;
`;

function ProgressParagraph(props){
    return <Paragraph>
        {props.children}
    </Paragraph>
}

export default ProgressParagraph;