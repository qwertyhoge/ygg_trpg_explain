import ProgressCard from "./ProgressCard";

function CharacterMaking(props){
    const mainStyle = {
        maxWidth: '1020px',
        margin: '10px auto'
    };
    const headerStyles = {
        background: '#fefcea'
    }
    
    return (
    <div className="app">
        <header className="app-header" style={headerStyles}>
            {props.breadcrumb}
        </header>
        <div className="main" style={mainStyle}>
            <ProgressCard
                title="t"
                paragraph="t2"
            >
            </ProgressCard>
        </div>
    </div>
    )
}


export default CharacterMaking;