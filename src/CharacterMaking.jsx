import ProgressCard from "./ProgressCard";
import ProgressCardLinks from "./ProgressCardLinks";
import PageBase from "./PageBase";

function CharacterMaking(props){
    const preparationLinks = <ProgressCardLinks
    reference="external:http://ygg.sakura.ne.jp/yg12.html"
    pageSetter={props.pageSetter}
    >
    </ProgressCardLinks>
    const abilityMakingLinks = <ProgressCardLinks
    detail="ability_making"
    pageSetter={props.pageSetter}
    >
    </ProgressCardLinks>

    return <PageBase header={props.header}>
        <ProgressCard
        title="事前準備"
        paragraph="公式ページからステータス算出表のxlsをダウンロードする。ステータス算出表とは言うが、事実上のキャラシ。結構複雑なので、公式ページを参照の上作成されたし。ちなみにキャラ作成には乱数が絡まず、望み通りのキャラを作れる。"
        links={preparationLinks}
        >

        </ProgressCard>
        <ProgressCard
        title="プロフィール作成"
        paragraph="ユグドラTRPG自体がロールプレイを重視している傾向にある。GMもRPが好き。ここで背景設定をしっかりと練るとRP方針が固めやすいはず。ライフパスから先にプロフィールを考え始めるのも一つの手。"
        >

        </ProgressCard>
        <ProgressCard
        title="タイプ決定"
        paragraph="ここで決定するタイプは活性タイプ、身体タイプ、能力タイプの三つ。活性は暴走率上昇でどんなメリットを受けるか、身体タイプはどのステータスが1伸びるか、能力タイプは伸びるステータスに影響する。身体、能力タイプにシステム上の制限はないが、キャラ設定に合ったものを選んでほしい。"
        >
        </ProgressCard>
        <ProgressCard
        title="パラメータ決定・算出"
        paragraph="10pと5p相当のキャラ特性(フレーバー付き割り振り)を自由に6種のパラメータに振り分けることができる。また、ステータスに応じて格闘・武器・能力攻撃力を調整できる。キャラシに適切に書き込めば、各種数値の算出は勝手にやってくれる。"
        >

        </ProgressCard>
        <ProgressCard
        title="能力作成"
        paragraph="ユグドラTRPGの醍醐味にして死ぬほど複雑なシステム。複雑さを代償とした分、作りたい能力はだいたいなんでも作れるようになっている。なんならここを考えるのがこのシステムで一番楽しい。"
        detail="ability_making"
        links={abilityMakingLinks}
        >

        </ProgressCard>
        <ProgressCard
        title="装備等決め"
        paragraph="使用制限付きのやつとかを決める。キャラごとの汎用切り札となるSPE、シナリオごとの汎用切り札となるカルマ、能力を使わずとも特殊攻撃や特殊効果を得られる特殊武装、回復アイテムなどの所持品を設定する。ノーマルは能力がない分RPの幅が少なくなるが、特殊武装のアタッチメントでキャラクターらしさを出せるはず。"
        >
        </ProgressCard>
    </PageBase>
}


export default CharacterMaking;