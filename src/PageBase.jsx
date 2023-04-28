function PageBase(props){
    const mainStyle = {
        margin: '10px 0px'
    };

    return (
        <div className="app">
            {props.header}
            <div className="main" style={mainStyle}>
                {props.children}
            </div>
        </div>
    );
}

export default PageBase;