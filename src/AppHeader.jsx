function AppHeader(props){
    const headerStyles = {
        background: '#fefcea',
        minHeight: '70px',
        position: 'relative'
    };
    const breadcrumbStyles = {
        position: 'absolute',
        bottom: '3px'
    };
    
    return (
    <header className="app-header" style={headerStyles}>
        <div style={breadcrumbStyles}>
            {props.breadcrumb}
        </div>
    </header>
    )
}

export default AppHeader;