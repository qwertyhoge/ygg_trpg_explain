import {useState} from 'react';
import Overall from "./Overall";
import CharacterMaking from './CharacterMaking';
import Breadcrumb from './Breadcrumb';
import AppHeader from './AppHeader';

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

    const content = ((stPage) => {
        if(stPage === 'character_making'){
            return constructCharacterMaking();
        }else if(stPage === 'overall'){
            return constructOverall();
        }
    })(page);

    return content;
}


export default App;