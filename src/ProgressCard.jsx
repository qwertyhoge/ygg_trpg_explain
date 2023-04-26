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
    };

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
            {props.links}
        </div>
    );
}
  
export default ProgressCard;