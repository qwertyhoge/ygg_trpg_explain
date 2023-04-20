function ProgressCard(props) {
    const headerStyles = {
        borderBottom: '1px solid black',
        fontSize: '1.5em'
    };

    return (
        <div className="progress-card">
            <div style={headerStyles}>
                props.title
            </div>
            <div>
                props.paragraph
            </div>
            {props.link && <a href={props.link}><img src="./hint.jpg"></img></a>}
        </div>
    );
}
  
export default ProgressCard;