import PageBase from "./PageBase";
import ProgressCard from "./ProgressCard";
import ProgressCardLinks from "./ProgressCardLinks";
import ProgressParagraph from "./ProgressParagraph";

function AbilityMaking(props){
    const abilityDecisionLinks = <ProgressCardLinks
        reference="external:http://ygg.sakura.ne.jp/yg23.html"
    ></ProgressCardLinks>
    const abilityEffectLinks = <ProgressCardLinks
        reference="external:http://ygg.sakura.ne.jp/yg30.html"
    >
    </ProgressCardLinks>
    const subEffectLinks = <ProgressCardLinks
        reference="external:http://ygg.sakura.ne.jp/yg31.html">
    </ProgressCardLinks>
    const chainLinks = <ProgressCardLinks
    reference="external:http://ygg.sakura.ne.jp/yg119.html">
    </ProgressCardLinks>

    return <PageBase header={props.header}>
        <ProgressCard title="能力決め" links={abilityDecisionLinks}>
            キャラクターの能力タイプに合った超能力を決める。よほどOPだったりしなければ本当に自由に決めていい。
        </ProgressCard>
        <ProgressCard title="応用技考案">
            <ProgressParagraph>
                その能力を使ってどんな攻撃や行動ができるのか、色々と考えてみる。作れるのは8個まで。大抵のものは実現できるシステムになっているので、先に内容を考えるとよい。
            </ProgressParagraph>
            <ProgressParagraph>
                効果を色々載せると必要スペックがかさんでいき、キャラのスペックを越えると発動時(SO発動)にデメリットがあるので注意。
            </ProgressParagraph>
        </ProgressCard>
        <ProgressCard title="発動系統の決定">
            応用技は必ず発動系統を持つ。応用技がどういう発動の仕方をするのかを分類して決める。発動系統を組み合わせてもいいし、防御発動は複数重ねられる。
            <ul>
                <li>
                    攻撃発動
                    <ul>
                        <li>
                            能力を使った攻撃的な技の発動。
                        </li>
                    </ul>
                </li>
                <li>
                    精神発動
                    <ul>
                        <li>
                            目に見えない、精神に干渉する効果を持つ技の発動。
                        </li>
                        <li>
                            単体では使えない。他の系統と組み合わせ、精神攻撃や鼓舞・支配などを作るのに使う。
                        </li>
                        <li>
                            戦闘処理的には命中回避判定をSS判定に変えたりする効果がある。
                        </li>
                    </ul>
                </li>
                <li>
                    防御発動
                    <ul>
                        <li>
                            能力を駆使して身を固める技の発動。
                        </li>
                        <li>
                            防御、精神抵抗のどちらを上げるかは能力作成段階で決めることとする。
                        </li>
                        <li>
                            両方上げたいなら後述するチェイン発動を活用のこと。
                        </li>
                    </ul>
                </li>
                <li>
                    付加発動
                    <ul>
                        <li>
                            後述する付加効果を目的とした技の発動。
                        </li>
                        <li>
                            何かに付け加えて発動するという意味ではない。付加効果を持った技を発動するの意。
                        </li>
                    </ul>
                </li>
                <li>
                    行為発動
                    <ul>
                        <li>
                            これ自体には処理上の効果はない、主にフレーバー目的での発動。
                        </li>
                        <li>
                            フレーバー的な発動では基本的にコストは支払わなくてよいものとする。(特殊武装【アタッチメント】に準拠)
                        </li>
                        <li>
                            探索など、場合によっては能力がよく刺さる場面もあるだろう。
                        </li>
                        <li>
                            そこで能力を使って有利な判定をしたい場合、コスト消費の上で認める場合がある。
                        </li>
                    </ul>
                </li>
            </ul>
        </ProgressCard>
        <ProgressCard title="付加発動の効果決定" links={abilityEffectLinks}>
            付加発動を選択した場合、どんな付加効果をその応用技に付けるのか選ぶ。使いたい付加効果を選んで、そのルールを確認しておくとよい。
        </ProgressCard>
        <ProgressCard title="SE付け" links={subEffectLinks}>
            どの発動にもサブエフェクトを付けることで、全体化や溜め、トラップ設置など様々な特殊効果を付けられる。
        </ProgressCard>
        <ProgressCard title="AE【重撃】での利用">
            <ProgressParagraph>
                攻撃発動を除いて、武器攻撃・格闘攻撃に乗せる形で能力を使うことができる。武器・格闘バージョンの攻撃発動+他の発動のような感じ。それを想定して応用技を作っておくのもよい。
            </ProgressParagraph>
            <ProgressParagraph>
                キャラシでは発動系統の一つにこれがあるが、重撃専用の応用技を作る必要はないものとする。
            </ProgressParagraph>
        </ProgressCard>
        <ProgressCard title="チェイン発動の考案" links={chainLinks}>
            作った応用技を組み合わせて一度に発動することもできる。たぶん即興でやってもいいが、スペック含むコスト計算のためにも事前に作っておいたほうがいい。色々制約があるので注意。
        </ProgressCard>
    </PageBase>
}

export default AbilityMaking;