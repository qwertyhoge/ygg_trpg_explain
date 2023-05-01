import PageBase from "./PageBase";
import ProgressCard from "./ProgressCard";
import ProgressCardLinks from "./ProgressCardLinks";
import ProgressParagraph from "./ProgressParagraph";

function Battle(props){
    const battleFlowLinks = <ProgressCardLinks
    reference="external:http://ygg.sakura.ne.jp/yg88.html"
    pageSetter={props.pageSetter}>
    </ProgressCardLinks>
    const actionEffectLinks = <ProgressCardLinks
    reference="external:http://ygg.sakura.ne.jp/yg35.html"
    pageSetter={props.pageSetter}>
    </ProgressCardLinks>;
    const burstLinks = <ProgressCardLinks
    reference="external:http://ygg.sakura.ne.jp/yg90.html"
    pageSetter={props.pageSetter}>
    </ProgressCardLinks>
    const actionLinks = <ProgressCardLinks
    reference="external:http://ygg.sakura.ne.jp/yg123.html"
    pageSetter={props.pageSetter}>
    </ProgressCardLinks>

    return <PageBase header={props.header}>
        <ProgressCard title="アクションエフェクトについて" links={actionEffectLinks}>
            <ProgressParagraph>
                多くのアクションエフェクト(AE)は戦闘中に使うことになるので、ここで触れておく。重ねがけ制限など細かい点には言及しないので、サイトも参照のこと。
            </ProgressParagraph>
            <ProgressParagraph>
                特殊な行動の宣言などは基本的にAEとして宣言することになるが、それ以上に判定補正のAE群は概要を把握しておきたい。これらは探索の技能判定でも使える。
            </ProgressParagraph>
            <ul>
                <li>
                    コンセントレイション
                    <ul>
                        <li>
                            様々なダイス判定や能力値の参照に固定値を上乗せ(1PP=>+1)する。
                        </li>
                        <li>
                            意外と宣言できる対象が多いのでよく読んでおくとよい。
                        </li>
                    </ul>
                </li>
                <li>
                    ブースト
                    <ul>
                        <li>
                            様々なダイス判定のダイスを増やす(3PP=>+1d6)。
                        </li>
                        <li>
                            ダイス判定にはクリティカル・ファンブルがあるが、当然ブーストで追加されたダイスも適用対象。
                        </li>
                        <li>
                            このシステムではダイス1個の期待値は217/60(≒3.61666...)なのでコンセより平均は高くなる(計算が間違ってなければ)。
                        </li>
                    </ul>
                </li>
                <li>
                    エール
                    <ul>
                        <li>
                            他キャラクターにブーストLv.1(4PP=>+1d6)効果。
                        </li>
                    </ul>
                </li>
                <li>
                    死力
                    <ul>
                        <li>
                            必要分のPP1pをHP2pでまかなう。暴走率は本来の必要PP分に死力Lvを加算。
                        </li>
                        <li>
                            別に判定補助ではないのだが、公式で同時に紹介されているので紹介しておく。
                        </li>
                        <li>
                            本来の消費分は、累計PP消費5pごとの因子ダイス授与にカウントするのに注意。
                        </li>
                    </ul>
                </li>
            </ul>
        </ProgressCard>
        <ProgressCard title="バーストについて" links={burstLinks}>
            <ProgressParagraph>
                AEと同様の理由でここで紹介しておく。ものによって使用可能タイミングがかなり異なるので、戦闘の仕様を把握してから再確認するとよい。
            </ProgressParagraph>
            <ProgressParagraph>
                いずれも因子ダイスを対価として他にはない効果や回復を得る。何個消費するかはバーストの種類による。
            </ProgressParagraph>
            <ProgressParagraph>
                特に即席の貴重な回復手段として使うことも多いHP/PPバーストや、特有の効果を発揮する発動バーストや解除バーストは重宝する。
            </ProgressParagraph>
        </ProgressCard>
        <ProgressCard title="戦闘の流れ" links={battleFlowLinks}>
            ラウンド制で進んでいく。ラウンド1つはこれら3つのフェイズで構成されている。詳細はさらに後述。
            <ul>
                <li>
                    イニシアティブフェイズ
                    <ul>
                        <li>
                            行動順を決める。
                        </li>
                    </ul>
                </li>
                <li>
                    アクションフェイズ
                    <ul>
                        <li>
                            各キャラクターがどんな行動を起こし、またどう反応し、どんな結果になるのかを処理する。
                        </li>
                    </ul>
                </li>
                <li>
                    エンドフェイズ
                    <ul>
                        <li>
                            ラウンド終了処理と次ラウンドの準備をする。
                        </li>
                    </ul>
                </li>
            </ul>
        </ProgressCard>
        <ProgressCard title="イニシアティブフェイズ">
            <ProgressParagraph>
                行動順を決めるフェイズ。コンセを宣言して行動値を補正できたり、トラップなど一部のSEが付いた能力の行使タイミングであったりする。
            </ProgressParagraph>
            <ProgressParagraph>
                ここでの宣言は予め決めておき、一斉に公開するものとする。
            </ProgressParagraph>
        </ProgressCard>
        <ProgressCard title="アクションフェイズ" links={actionLinks}>
            行動値が高いものから行動を行うフェイズ。このフェイズ自体も4つの段階に分かれている。
            <ol>
                <li>
                    プリアクション(宣言)
                    <ul>
                        <li>
                            どんな攻撃をするなど、アクションの内容を決定する。AEの宣言などもここで。
                        </li>
                        <li>
                            ただし、AEの宣言ができない刹那対抗も存在する。あんまりないが。
                        </li>
                        <li>
                            他プレイヤーが割り込みたい場合はここで宣言する。
                        </li>
                    </ul>
                </li>
                <li>
                    リアクション(対抗)
                    <ul>
                        <li>
                            アクション対象がどのような対応を取るか決定する。
                        </li>
                        <li>
                            AEを宣言して回避などを有利に行うこともできる。
                        </li>
                        <li>
                            リアクションでAE宣言があった場合、アクション側がAEを追加で宣言し返せる。これをAE対抗と呼ぶ。
                        </li>
                        <li>
                            AE対抗はアクション側が追加宣言するとまたリアクション側も追加宣言可能になり……と、どちらかが終えるまで続く。
                        </li>
                    </ul>
                </li>
                <li>
                    アクション(判定)
                    <ul>
                        <li>
                            行動した結果、具体的にどうなるかを判定のもと決定する。
                        </li>
                        <li>
                            おなじみの命中回避判定だが、色々とダメージ追加条件やカウンター条件が存在する。
                        </li>
                        <li>
                            そのあたりの条件を考慮に入れて命中ブーストなどかけられると上手い。
                        </li>
                    </ul>
                </li>
                <li>
                    ポストアクション(結果)
                    <ul>
                        <li>
                            行動の後処理。この処理もさらに3段階に分かれている。
                            <ol>
                                <li>
                                    解除判定(右の公式解説)
                                </li>
                                <li>
                                    PP消費処理
                                </li>
                                <li>
                                    活性化、暴走/臨界ロール
                                </li>
                            </ol>
                        </li>
                    </ul>
                </li>
            </ol>
        </ProgressCard>
        <ProgressCard title="エンドフェイズ">
            回復などのバースト宣言がここで可能。復活バーストも可能だが、全員が瀕死以上の状態だと全滅扱い。解除バーストも可能なので、ポストアクションの解除判定は捨ててしまうのも一つの手。
        </ProgressCard>
    </PageBase>
}

export default Battle;