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
    const cardStyles = {
        minHeight: '200px',
        backgroundColor: '#ededed',
        boxShadow: '1px 2px 4px 0px #4f4f4f',
        display: 'flex',
        fontSize: '1.3em'
    };
    const paragraphStyles = {
        margin: '5px'
    };

    return (
        <div className="progress-card-wrapper" style={wrapperStyles}>
            <div className="progress-card" style={cardStyles}>
                <div style={{flexGrow: 1}}>
                    <div style={headerStyles}>
                        {props.title}
                    </div>
                    <div style={paragraphStyles}>
                        {props.children}
                    </div>
                </div>
                {props.links}
            </div>
        </div>
    );
}
  
export default ProgressCard;