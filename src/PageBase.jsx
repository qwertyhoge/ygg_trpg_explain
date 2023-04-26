function PageBase(props){
    const mainStyle = {
        maxWidth: '1020px',
        margin: '10px auto'
    };

    return (
        <div className="app">
            {props.header}
            <div className="main" style={mainStyle}>
                {props.progressCards}
            </div>
        </div>
    );
}

export default PageBase;