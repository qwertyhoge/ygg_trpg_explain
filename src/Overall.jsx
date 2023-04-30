import ProgressCard from "./ProgressCard";
import ProgressCardLinks from "./ProgressCardLinks";
import PageBase from "./PageBase";

function Overall(props){
    const notificationLinks = <ProgressCardLinks
        pageSetter={props.pageSetter}
        detail="house_rules"
    ></ProgressCardLinks>
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
            <ProgressCard title="諸注意" links={notificationLinks}>
                セッション上留意してほしいこと色々。ハウスルールは右のリンクから。ただし用語の説明はしていないので、一通りルールを読んでから戻ってくるのを推奨。
                <ul>
                    <li>
                        システムがうるさいくらいにバランスブレイカーな設定を嫌っているので、良識の範囲内で作ってほしい。
                    </li>
                    <li>
                        RP推奨。初めて披露する技や行動回数制限付きの行動など。音声/テキストは問わない。
                        <ul>
                            <li>
                                予定ではGMは音声とテキストの両方をやります(RPとして+ログ残し)。
                            </li>
                            <li>
                                キャラクターの設定はしっかり練っておくとよいと思う。
                            </li>
                        </ul>
                    </li>
                    <li>
                        他PLの迷惑になるプレイングは控えてほしい(正直心配はしてません)。
                    </li>
                </ul>
            </ProgressCard>
            <ProgressCard title="キャラクター作成" links={characterMakingLinks}>
                プロフィールだけでなくライフパスといったキャラクターの背景を描くための要素が豊富にあり、ロールプレイを好むユグドラTRPGの性格が如実に表れている。そしてこのシステムの真骨頂が能力作成。コンセプトを決め、詳細をじっくりと練って作りたい。
            </ProgressCard>
            <ProgressCard title="シナリオ決め">
                主に人数を考慮して探す。が、マイナーなシステムなのでいかんせんシナリオが少ないので作るかもしれない。その場合、キャラクター作成との順番は要相談。
            </ProgressCard>
            <ProgressCard title="ゲームプレイ" links={gamePlayLinks}>
                シナリオに沿って実際にプレイする。暴走率を上げすぎると後遺症が残ったり、最悪の場合ロストしたりするので注意。
            </ProgressCard>
        </PageBase>
    )
}

export default Overall;