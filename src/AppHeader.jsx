function AppHeader(props){
    const headerStyles = {
        background: '#fefcea',
        minHeight: '50px'
    };
    
    return (
    <header className="app-header" style={headerStyles}>
        {props.breadcrumb}
    </header>
    )
}

export default AppHeader;