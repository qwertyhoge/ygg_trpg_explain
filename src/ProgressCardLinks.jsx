import bookSvg from './book.svg'
import loupeSvg from './loupe.svg'
import transitionPage from './transitionpage';
import styled from 'styled-components';

const LinkTitle = styled.p`
margin: 4px 0px;
font-size: 0.7em;
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

    const buttonStyles = {
        width: '35px',
        border: '0px',
        padding: '0px',
        margin: '0px',
        cursor: 'pointer'
    };


    return (
    <div className="links" style={infoStyles}>
        {props.reference && 
        <button onClick={() => transitionPage(props.pageSetter, props.reference)} style={buttonStyles}>
            <img src={bookSvg} style={{width: '100%'}}>
            </img>
            <LinkTitle>
                公式
            </LinkTitle>
        </button>
        }
        {props.detail && 
        <button onClick={() => transitionPage(props.pageSetter, props.detail)} style={buttonStyles}>
            <img src={loupeSvg} style={{width: '100%'}}>
            </img>
            <LinkTitle>
                詳細
            </LinkTitle>
        </button>
        }
    </div>
    );
}

export default ProgressCardLinks;