import ProgressCard from "./ProgressCard";
import ProgressCardLinks from "./ProgressCardLinks";
import PageBase from "./PageBase";

function Overall(props){
    const characterMakingLinks = <ProgressCardLinks
        pageSetter={props.pageSetter}
        reference="external:http://ygg.sakura.ne.jp/yg002.html"
        detail="character_making"
    ></ProgressCardLinks>;
    const gamePlayLinks = <ProgressCardLinks
        pageSetter={props.pageSetter}
        detail="game_play"
    >
    </ProgressCardLinks>;

    return (
        <PageBase header={props.header}>
            <ProgressCard
            title="キャラクター作成"
            paragraph="プロフィールだけでなくライフパスといったキャラクターの背景を描くための要素が豊富にあり、ロールプレイを好むユグドラTRPGの性格が如実に表れている。そしてこのシステムの真骨頂が能力作成。コンセプトを決め、詳細をじっくりと練って作りたい。"
            links={characterMakingLinks}
            >
            </ProgressCard>
            <ProgressCard
                title="シナリオ決め"
                paragraph="主に人数を考慮して探す。が、マイナーなシステムなのでいかんせんシナリオが少ないので作るかもしれない。その場合、キャラクター作成との順番は要相談。"
            >
            </ProgressCard>
            <ProgressCard
                title="ゲームプレイ"
                paragraph="シナリオに沿って実際にプレイする。暴走率を上げすぎると後遺症が残ったり、最悪の場合ロストしたりするので注意。"
                links={gamePlayLinks}
            >
            </ProgressCard>
        </PageBase>
    )
}

export default Overall;