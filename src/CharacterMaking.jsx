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
        <ProgressCard title="事前準備" links={preparationLinks}>
            公式ページからステータス算出表のxlsをダウンロードする。ステータス算出表とは言うが、事実上のキャラシ。結構複雑なので、公式ページを参照の上作成されたし。ちなみにキャラ作成には乱数が絡まず、望み通りのキャラを作れる。
        </ProgressCard>
        <ProgressCard title="プロフィール作成">
            ユグドラTRPG自体がロールプレイを重視している傾向にある。GMもRPが好き。ここで背景設定をしっかりと練るとRP方針が固めやすいはず。ライフパスから先にプロフィールを考え始めるのも一つの手。
        </ProgressCard>
        <ProgressCard title="タイプ決定">
            ここで決定するタイプは活性タイプ、身体タイプ、能力タイプの三つ。
            <ul>
                <li>
                    活性タイプ
                    <ul>
                        <li>
                            暴走率が一定まで上昇するとメリットとデメリットが得られる。
                        </li>
                        <li>
                            どんな面でメリットを得られるかを決めるのがこの活性タイプ。
                        </li>
                    </ul>
                </li>
                <li>
                    身体タイプ
                    <ul>
                        <li>
                            キャラクターの肉体がどんなものか、また何由来かを示すタイプ。
                        </li>
                        <li>
                            ステータスにプラス補正が乗るほか、ロールプレイの補強にもなる。
                        </li>
                    </ul>
                </li>
                <li>
                    能力タイプ
                    <ul>
                        <li>
                            どういう性質の超能力を得ているかを示すタイプ。ノーマルは非能力者。
                        </li>
                        <li>
                            自分が作りたい能力に応じて選択する。
                        </li>
                        <li>
                            いずれもステータスが計3p伸びるが、ノーマルだけは自由に割り振れる。
                        </li>
                    </ul>
                </li>
            </ul>
        </ProgressCard>
        <ProgressCard title="パラメータ決定・算出">
            計10p(マイナス含)と計5p相当のキャラ特性(フレーバー付き割り振り)を自由に6種のパラメータに振り分けることができる。また、ステータスに応じて格闘・武器・能力攻撃力を調整できる。キャラシに適切に書き込めば、各種数値の算出は勝手にやってくれる。
        </ProgressCard>
        <ProgressCard title="能力作成" links={abilityMakingLinks}>
            ユグドラTRPGの醍醐味にして死ぬほど複雑なシステム。複雑さを代償とした分、作りたい能力はだいたいなんでも作れるようになっている。なんならここを考えるのがこのシステムで一番楽しい。後述するSPEやカルマ、果てはAEやバーストをフレーバーの特殊技として作っておくこともできる。
        </ProgressCard>
        <ProgressCard title="装備等決め">
            使用制限付きのやつとかを決める。
            <ul>
                <li>
                    SPE
                    <ul>
                        <li>
                            キャラに割り当てる汎用切り札。
                        </li>
                        <li>
                            SPEによって決まる使用回数制限がある。
                        </li>
                        <li>
                            発動にあたってはRPによる演出が推奨されている。
                        </li>
                        <li>
                            特殊技の一環として予め演出を決めておくのもよい。
                        </li>
                        <li>
                            ノーマルでも例えば呼吸法みたいな感じで作れると思う。
                        </li>
                    </ul>
                </li>
                <li>
                    カルマ
                    <ul>
                        <li>
                            キャラに割り当てる汎用切り札。
                        </li>
                        <li>
                            SPEとは違い、シナリオごとに付け替えることになる。
                        </li>
                        <li>
                            初期のみ取れるカルマ、クリアで取れるカルマなど取得条件がある。
                        </li>
                        <li>
                            これもRP推奨、カルマに応じて使用回数制限あり。
                        </li>
                        <li>
                            こちらも特殊技での演出を付けてよい(予め作るとシナリオごとにやらないといけないので大変かも)。
                        </li>
                    </ul>
                </li>
                <li>
                    特殊武装
                    <ul>
                        <li>
                            能力を使わずとも特殊攻撃や特殊効果を得られる。
                        </li>
                        <li>
                            ノーマルは能力の分RPの幅が狭まるが、アタッチメントを使えば演出に幅が出る。
                        </li>
                    </ul>
                </li>
                <li>
                    所持品
                    <ul>
                        <li>
                            おなじみのアイテム。
                        </li>
                        <li>
                            アイテムは本来、因子ダイスというものを対価に買う。
                        </li>
                        <li>
                            キャラ作成では2個分を自由に所持していい。ダイスの持ち越しは不可。
                        </li>
                    </ul>
                </li>
            </ul>
        </ProgressCard>
    </PageBase>
}


export default CharacterMaking;