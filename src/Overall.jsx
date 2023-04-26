import ProgressCard from "./ProgressCard";
import ProgressCardLinks from "./ProgressCardLinks";
import PageBase from "./PageBase";

function Overall(props){
    const test1CardLinks = <ProgressCardLinks
        pageSetter={props.pageSetter}
        reference={"test"}
        detail={"character_making"}
    ></ProgressCardLinks>;

    const cards = <>
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
    </>;

    return (
        <PageBase
            header={props.header}
            progressCards={cards}
        >
        </PageBase>
    )
}

export default Overall;