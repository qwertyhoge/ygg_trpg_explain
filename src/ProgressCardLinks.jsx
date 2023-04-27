import bookSvg from './book.svg'
import loupeSvg from './loupe.svg'

function ProgressCardLinks(props){
    const infoStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxSizing: 'border-box',
        borderLeft: '1px solid #d2d2d2',
        padding: '0px 12px'
    };

    const buttonStyles = {
        width: '40px',
        border: '0px',
        padding: '0px',
        margin: '0px',
        cursor: 'pointer'
    };

    return (
    <div className="links" style={infoStyles}>
        {props.reference && 
        <button onClick={() => props.pageSetter(props.reference)} style={buttonStyles}>
            <img src={bookSvg} style={{width: '100%'}}>
            </img>
        </button>
        }
        {props.detail && 
        <button onClick={() => props.pageSetter(props.detail)} style={buttonStyles}>
            <img src={loupeSvg} style={{width: '100%'}}>
            </img>
        </button>
        }
    </div>
    );
}

export default ProgressCardLinks;