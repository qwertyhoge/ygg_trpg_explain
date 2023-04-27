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
        title="キャラクター作成"
        paragraph="プロフィールだけでなくライフパスといったキャラクターの背景を描くための要素が豊富にあり、ロールプレイを好むユグドラTRPGの性格が如実に表れている。そしてこのシステムの真骨頂が能力作成。コンセプトを決め、詳細をじっくりと練って作りたい。"
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