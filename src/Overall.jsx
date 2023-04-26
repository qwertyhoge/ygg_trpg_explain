import ProgressCard from "./ProgressCard";
import ProgressCardLinks from "./ProgressCardLinks";

function Overall(props){
    const mainStyle = {
        maxWidth: '1020px',
        margin: '10px auto'
    };
    const headerStyles = {
        background: '#fefcea'
    };

    const test1CardLinks = <ProgressCardLinks
        pageSetter={props.pageSetter}
        reference={"test"}
        detail={"character_making"}
    ></ProgressCardLinks>;

    return (
    <div className="app">
        <header className="app-header" style={headerStyles}>
            {props.breadcrumb}
        </header>
        <div className="main" style={mainStyle}>
            <ProgressCard
                title="test1"
                paragraph="test2 progress"
                links={test1CardLinks}
            >
            </ProgressCard>
            <ProgressCard
                title="test"
                paragraph="test progress"
            >
            </ProgressCard>
        </div>
    </div>
    )
}

export default Overall;