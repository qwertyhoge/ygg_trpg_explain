import PageBase from "./PageBase";
import openAppScript from "./openAppScript.png"
import openLibrary from "./openLibrary.png"
import editCode from "./editCode.png"
import newTab from "./newTab.png"
import showDetail from "./showDetail.png"
import movePage from "./movePage.png"
import copyText from "./copyText.png"
import selectVersion from "./selectVersion.png"
import ProgressCard from "./ProgressCard";
import styled from "styled-components";

const quoteStyles = {
    padding: "3px",
    margin: "2px 10px",
    backgroundColor: "#aaa",
    borderRadius: "8px"
};

const textareaStyles = {
    maxWidth: "300px",
    width: "100%",
    maxHeight: "80px",
    height: "100px",
    margin: "5px 15px",
    backgroundColor: "#fffbe1"
};

const ImgDiv = styled.div`
    background-color: #ccc;
    padding: 10px;
    width: fit-content;
`;

function AutoCharacterSymbolCreation(props){
    const code = `function onOpen(){
    autoSymbolMaker.addMenu(true, "autoSymbolMaker");
}`;
    return <PageBase header={props.header}>
        <ProgressCard title="Apps Script起動">
            「拡張機能」タブから「Apps Script」を開く。
            <ImgDiv>
                <img src={openAppScript}>
                </img>
            </ImgDiv>
        </ProgressCard>
        <ProgressCard title="ライブラリ追加">
            Apps Scriptの画面からライブラリを開く。
            <ImgDiv>
                <img src={openLibrary}>
                </img>
            </ImgDiv>
            <div style={quoteStyles}>
                1qmpCc1LGZjZHeatuEE9YtNDS8BkaS5n6ttFGuhaYoJmNORv0SVBDQcqr
            </div>
            このIDを検索欄に貼り付け、検索してそのまま追加。
        </ProgressCard>
        <ProgressCard title="コード呼び出し">
            最初からあるコード.gsの中身を次のものに書き換える。
            <div>
                <textarea value={code} style={textareaStyles}></textarea>
            </div>
            <ImgDiv>
                <img src={editCode}>
                </img>
            </ImgDiv>
        </ProgressCard>
        <ProgressCard title="自動作成実行">
            スプレッドシートのページをF5で再読み込みして少し待つ。正しくライブラリが入っていれば、「自動処理」というタブが追加されるので、そのまま「CCFOLIAコマデータ作成」を選択。
            <ImgDiv>
                <img src={newTab}>
                </img>
            </ImgDiv>
        </ProgressCard>
        <ProgressCard title="アクセス許可">
            スクリプトの実行にはアクセス許可が必要。許可していけばいいのだが、わかりにくいところがある。詳細を表示してから許可を続行しなければならない。
            <ImgDiv>
                <img src={showDetail}>
                </img>
            </ImgDiv>
            <ImgDiv>
                <img src={movePage}>
                </img>
            </ImgDiv>
            かなりの量の権限を要求しているが、正直なぜそこまで要求しているのかわからない。やっているのはスプレッドシートの参照とウィンドウの表示くらい。中身が気になるならこのライブラリはキャラシのひな形から配信しているので、そこを確認するといい。
        </ProgressCard>
        <ProgressCard title="再実行">
            同じ操作をして再度実行。するとウィンドウのテキストボックスにコマデータが生成される。ボックスをクリックしてからCtrl+A→Ctrl+Cで全体コピーができる。
            <ImgDiv>
                <img src={copyText}>
                </img>
            </ImgDiv>
        </ProgressCard>
        <ProgressCard title="貼り付けて作成">
            この後はCCFOLIAの部屋の適当な場所をクリックしてCtrl+Vを押せばコマが作られる。画像や色は自分で用意してもらう。
        </ProgressCard>
    </PageBase>
}

export default AutoCharacterSymbolCreation;