import bookSvg from './book.svg'
import loupeSvg from './loupe.svg'
import transitionPage from './transitionpage';
import styled from 'styled-components';

const LinkTitle = styled.p`
margin: 4px 0px;
font-size: 0.7em;
@media(max-width:480px){
    font-size: 0.4em;
}
`;

const IconButton = styled.button`
width: 35px;
border: 0px;
padding: 0px;
margin: 0px;
cursor: pointer;
@media(max-width:480px){
    width: 20px;
}
`;

function ProgressCardLinks(props){
    const infoStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxSizing: 'border-box',
        borderLeft: '1px solid #d2d2d2',
        padding: '0px 10px'
    };

    return (
    <div className="links" style={infoStyles}>
        {props.reference && 
        <IconButton onClick={() => transitionPage(props.pageSetter, props.reference)}>
            <img src={bookSvg} style={{width: '100%'}}>
            </img>
            <LinkTitle>
                公式
            </LinkTitle>
        </IconButton>
        }
        {props.detail && 
        <IconButton onClick={() => transitionPage(props.pageSetter, props.detail)}>
            <img src={loupeSvg} style={{width: '100%'}}>
            </img>
            <LinkTitle>
                詳細
            </LinkTitle>
        </IconButton>
        }
    </div>
    );
}

export default ProgressCardLinks;