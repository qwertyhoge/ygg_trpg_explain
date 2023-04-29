function AppHeader(props){
    const headerStyles = {
        background: '#f6f8ff',
        minHeight: '90px',
        position: 'relative',
        paddingTop: '10px'
    };
    const breadcrumbStyles = {
        position: 'absolute',
        bottom: '5px'
    };

    const pageTitleStyles = {
        textAlign: 'center',
        fontSize: '2.6em',
        letterSpacing: '0.2em',
        color: '#3b3c98e8',
        textShadow: '1px 1px #ccd2e4',
        margin: '0px'
    }
    
    return (
    <header className="app-header" style={headerStyles}>
        <div style={breadcrumbStyles}>
            {props.breadcrumb}
        </div>
        {props.pageTitle && 
        <p style={pageTitleStyles}>
            {props.pageTitle}
        </p>
        }
    </header>
    )
}

export default AppHeader;