import bookSvg from './book.svg'
import loupeSvg from './loupe.svg'

function ProgressCard(props) {
    const headerStyles = {
        borderBottom: '1px solid black',
        fontSize: '2.0em',
        padding: '5px'
    };
    const cardStyles = {
        maxWidth: '1000px',
        minHeight: '200px',
        backgroundColor: '#ededed',
        boxShadow: '1px 2px 4px 0px #4f4f4f',
        margin: '20px 0px',
        display: 'flex',
        fontSize: '1.3em'
    };
    const paragraphStyles = {
        margin: '5px'
    }
    const infoStyles= {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '60px',
        boxSizing: 'border-box',
        borderLeft: '1px solid #d2d2d2',
        padding: '0px 12px'
    }

    return (
        <div className="progress-card" style={cardStyles}>
            <div style={{flexGrow: 1}}>
                <div style={headerStyles}>
                    {props.title}
                </div>
                <div style={paragraphStyles}>
                    {props.paragraph}
                </div>
            </div>
            <div className="info" style={infoStyles}>
                {props.reference && 
                <a href={props.reference}>
                    <img src={bookSvg} style={{width: '100%'}}>
                    </img>
                </a>
                }
                {props.detail && 
                <a href={props.detail}>
                    <img src={loupeSvg} style={{width: '100%'}}>
                    </img>
                </a>
                }
            </div>
        </div>
    );
}
  
export default ProgressCard;