import ProgressCard from "./ProgressCard";
import Breadcrumb from "./Breadcrumb"

function App(props) {
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
                <Breadcrumb
                    route={[
                        {
                            href: "",
                            name: "全体",
                            key: 'index'
                        },
                        {
                            href: "",
                            name: "テスト",
                            key: 'test'
                        }
                    ]}
                >
                </Breadcrumb>
            </header>
            <div className="main" style={mainStyle}>
                <ProgressCard
                    title="test1"
                    paragraph="test2 progress"
                    reference="test reference"
                    detail="test detail"
                >
                </ProgressCard>
                <ProgressCard
                    title="test"
                    paragraph="test progress"
                >
                </ProgressCard>
            </div>
        </div>
    );
}

export default App;