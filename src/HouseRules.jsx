import PageBase from "./PageBase";
import ProgressCard from "./ProgressCard";
import ProgressParagraph from "./ProgressParagraph";

function HouseRules(props){
    return <PageBase header={props.header}>
        <ProgressCard title="防御発動の補正先決">
            防御発動は防御力と精神抵抗を上げることができるが、どちらを上げるかは能力作成の段階で1つに定める。
        </ProgressCard>
        <ProgressCard title="行為発動のコスト0">
            <ProgressParagraph>
                行為発動の応用技をフレーバー目的で行使する際、コスト0でよい(特殊武装【アタッチメント】に準拠)。
            </ProgressParagraph>
            <ProgressParagraph>
                ただし能力が有利に働く場面ではGMに相談の上コスト消費し、有利な判定を行ってもよい。
            </ProgressParagraph>
        </ProgressCard>
        <ProgressCard title="イニシアティブフェイズの一斉宣言">
            コンセによる行動値補正などの宣言は予め決めておき、一斉に公開する。
        </ProgressCard>
        <ProgressCard title="同行動値の並列処理">
            同じ時系列でアクションフェイズを処理した扱いとし、原則として片方の結果がもう片方の結果に影響を及ぼすことはない。
        </ProgressCard>
        <ProgressCard title="疲労状態の事後適用">
            PPが0となったとき疲労状態となるが、PPが0になる原因となった判定などは通常通りに処理する。それ以降の処理には疲労状態を適用する。
        </ProgressCard>
        <ProgressCard title="PPの過剰消費不可">
            <ProgressParagraph>
                今持っているPP以上を要求するAE宣言などは不可とする。
            </ProgressParagraph>
            <ProgressParagraph>
                意図せずそのような消費になってしまった場合、PPをコストにする効果は全て不発とした上でPPを0にする(SO発動の消費負荷系に準拠)。
            </ProgressParagraph>
            <ProgressParagraph>
                また、暴走率の上昇は実際の消費(=持っていたPP全部)ではなく、本来の消費分行われる。例えばPP5で8の過剰消費をした場合、PPは0となり暴走率は8%上がる。5pで因子ダイスの累計消費PPカウントもこれに合わせる。
            </ProgressParagraph>
        </ProgressCard>
        <ProgressCard title="抑制ロールの逐一振り">
            因子ダイスが尽きるまで、任意の個数を任意の回数振ってよいものとする。節約したければ1個ずつどうぞ。
        </ProgressCard>
    </PageBase>
}

export default HouseRules;