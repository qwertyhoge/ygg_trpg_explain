import styled from "styled-components";

const Card = styled.div`
min-height: 200px;
background-color: #ededed;
box-shadow: 1px 2px 4px 0px #4f4f4f;
display: flex;
font-size: 1.3em;
@media(max-width:480px){
    min-height: 100px;
}
`;

function ProgressCard(props) {
    const headerStyles = {
        borderBottom: '1px solid black',
        fontSize: '1.8em',
        padding: '5px'
    };
    const wrapperStyles = {
        maxWidth: '1280px',
        margin: '40px auto',
        padding: '0px 10px'
    }
    const paragraphStyles = {
        margin: '5px'
    };

    return (
        <div className="progress-card-wrapper" style={wrapperStyles}>
            <Card>
                <div style={{flexGrow: 1}}>
                    <div style={headerStyles}>
                        {props.title}
                    </div>
                    <div style={paragraphStyles}>
                        {props.children}
                    </div>
                </div>
                {props.links}
            </Card>
        </div>
    );
}
  
export default ProgressCard;