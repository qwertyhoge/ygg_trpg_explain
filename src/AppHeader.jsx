import styled from "styled-components";

const Header = styled.header`
background: #f6f8ff;
min-height: 90px;
position: relative;
padding-top: 10px;
@media(max-width:480px){
    min-height: 60px;
    padding-top: 2px;
}
`;

function AppHeader(props){
    const breadcrumbStyles = {
        position: 'absolute',
        bottom: '5px'
    };

    const pageTitleStyles = {
        textAlign: 'center',
        fontSize: '2.6em',
        letterSpacing: '0.2em',
        color: '#3b3c98e8',
        textShadow: '1px 1px #ccd2e4',
        margin: '0px'
    }
    
    return (
    <Header className="app-header">
        <div style={breadcrumbStyles}>
            {props.breadcrumb}
        </div>
        {props.pageTitle && 
        <p style={pageTitleStyles}>
            {props.pageTitle}
        </p>
        }
    </Header>
    )
}

export default AppHeader;