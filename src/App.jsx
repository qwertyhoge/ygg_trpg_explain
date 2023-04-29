import {useState} from 'react';
import AppHeader from './AppHeader';
import Breadcrumb from './Breadcrumb';
import Overall from "./Overall";
import CharacterMaking from './CharacterMaking';
import AbilityMaking from './AbilityMaking';
import GamePlay from './GamePlay';

function App(props) {
    const [page, setPage] = useState('overall');

    const constructOverall = () => {
        const breadcrumb = <Breadcrumb
            route={[
                {
                    id: 'overall',
                    name: '全体',
                    key: 'overall'
                }
            ]}
            pageSetter={setPage}
        >
        </Breadcrumb>;
        const header = <AppHeader
            breadcrumb={breadcrumb}
            pageTitle="全体像"
        ></AppHeader>

        return <Overall
            header={header}
            pageSetter={setPage}
        ></Overall>
    };

    const constructCharacterMaking = () => {
        const breadcrumb = <Breadcrumb
            route={[
                {
                    id: "overall",
                    name: "全体",
                    key: 'overall'
                },
                {
                    id: "character_making",
                    name: "キャラクター作成",
                    key: 'character_making'
                }
            ]}
            pageSetter={setPage}
        ></Breadcrumb>;
        const header = <AppHeader
            breadcrumb={breadcrumb}
            pageTitle="キャラクター作成"
        ></AppHeader>

        return <CharacterMaking
            header={header}
            pageSetter={setPage}
        ></CharacterMaking>
    }

    const constructAbilityMaking = () => {
        const breadcrumb = <Breadcrumb
            route={[
                {
                    id: 'overall',
                    name: '全体',
                    key: 'overall'
                },
                {
                    id: 'character_making',
                    name: 'キャラクター作成',
                    key: 'character_making'
                },
                {
                    id: 'ability_making',
                    name: '能力作成',
                    key: 'ability_making'
                }
            ]}
            pageSetter={setPage}
        ></Breadcrumb>;
        const header = <AppHeader
            breadcrumb={breadcrumb}
            pageTitle='能力作成'
        ></AppHeader>

        return <AbilityMaking
            header={header}
            pageSetter={setPage}
        ></AbilityMaking>
    }
    const constructGamePlay = () => {
        const breadcrumb = <Breadcrumb
            route={[
                {
                    id: 'overall',
                    name: '全体',
                    key: 'overall'
                },
                {
                    id: 'game_play',
                    name: 'ゲームプレイ',
                    key: 'game_play'
                }
            ]}
            pageSetter={setPage}
        ></Breadcrumb>;
        const header = <AppHeader
            breadcrumb={breadcrumb}
            pageTitle='ゲームプレイ'
        ></AppHeader>;
        return <GamePlay
        header={header}
        pageSetter={setPage}
        ></GamePlay>
    }

    const content = ((stPage) => {
        if(stPage === 'character_making'){
            return constructCharacterMaking();
        }else if(stPage === 'overall'){
            return constructOverall();
        }else if(stPage === 'ability_making'){
            return constructAbilityMaking();
        }else if(stPage === 'game_play'){
            return constructGamePlay();
        }
    })(page);

    return content;
}


export default App;