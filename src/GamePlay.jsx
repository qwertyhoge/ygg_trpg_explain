import ProgressCard from "./ProgressCard";
import ProgressCardLinks from "./ProgressCardLinks";
import PageBase from "./PageBase";

function GamePlay(props){
    const battleLinks = <ProgressCardLinks
    reference="external:http://ygg.sakura.ne.jp/yg88.html"
    detail="battle">
    </ProgressCardLinks>
    const clearLinks = <ProgressCardLinks
    reference="external:http://ygg.sakura.ne.jp/yg94.html">
    </ProgressCardLinks>

    return <PageBase header={props.header}>
        <ProgressCard title="コンディションロール">
            HP、PPそれぞれに2d6を振り、シナリオ中の最大値をその分加算する。特にPPの分は同時に同値だけ暴走率を上昇させる。キャラシの進行表タブにコンディションロールを記載するところがあるので、利用してみるとよい。特に暴走率・PP管理が便利。
        </ProgressCard>
        <ProgressCard title="導入">
            <p>
                導入。説明不要。
            </p>
            <p>
                このタイミングで世界観の整理をするのも一興。
            </p>
        </ProgressCard>
        <ProgressCard title="シーン進行">
            ユグドラTRPGではゲームプレイをシーン単位で進めていく(必ずではないが)。これ自体は普通だが、このシステム特有の処理もぼちぼちある。
            <ul>
                <li>
                    シーンに登場する(自発的な行動をする)たび暴走チェック(1d6か2d6)。ダイスの値だけ暴走率を上げる。
                    <ul>
                        <li>
                            この性質上、シナリオ後半になるほど戦闘が過熱していく。
                        </li>
                    </ul>
                </li>
                <li>
                    戦闘か探索かはシーン次第。PLが決めることもありえる。
                </li>
                <li>
                    PP消費のたびに同値だけ暴走率を上昇させる。
                </li>
                <li>
                    また累計PP消費5ずつで因子ダイスを1取得する。手では記録が面倒なので進行表を使うとよい。
                </li>
            </ul>
        </ProgressCard>
        <ProgressCard title="戦闘" links={battleLinks}>
            戦闘も処理が結構めんどくさい。1ラウンドにも慣れないとなかなか時間がかかる印象。特にAEの種類が多く混乱するが、とりあえずはブーストコンセを覚えておけばなんとかなる。
        </ProgressCard>
        <ProgressCard title="クリア処理" links={clearLinks}>
            下記の順で処理を行う。
            <ol>
                <li>
                    因子ダイス報酬
                    <ul>
                        <li>
                            バトル面などいくつかの賞をキャラクターに分配し、それに応じた因子ダイスを報酬として与える。
                        </li>
                        <li>
                            シナリオの独自報酬もあるので、まあまあ融通は利く。
                        </li>
                    </ul>
                </li>
                <li>
                    抑制ロール
                    <ul>
                        <li>
                            シナリオ内や報酬で手に入れた因子ダイスを消費し、暴走率を下げる。
                        </li>
                        <li>
                            終了時の暴走率次第で後遺症が残ったり、次回セッションの初期暴走率が上がったりする。
                        </li>
                        <li>
                            ダイスの譲渡も可能。またここでは抑制ロールは何度でも1d6ずつ振ってよいものとする。
                        </li>
                    </ul>
                </li>
                <li>
                    カルマ取得
                    <ul>
                        <li>
                            様々な条件に応じてクリアカルマの取得が可能。50種ある。
                        </li>
                        <li>
                            なお、既存のカルマはシナリオクリア時点で消滅する。
                        </li>
                    </ul>
                </li>
                <li>
                    アイテム購入
                    <ul>
                        <li>
                            抑制ロールを経て残った因子ダイスでアイテムを購入する。
                        </li>
                        <li>
                            それでも残った因子ダイスは5個まで次回セッションに持ち越しできる。
                        </li>
                    </ul>
                </li>
            </ol>
        </ProgressCard>
        <ProgressCard title="エンディングなど">
            シナリオの結末を描く。後日談なども必要に応じて。クリア処理で起こったことをRPに起こしてみるのも面白い。
        </ProgressCard>
    </PageBase>
}

export default GamePlay;