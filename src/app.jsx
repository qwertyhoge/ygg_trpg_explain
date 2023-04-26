import {useState} from 'react';
import Overall from "./Overall";
import CharacterMaking from './CharacterMaking';
import Breadcrumb from './Breadcrumb';

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

        return <Overall
            breadcrumb={breadcrumb}
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

        return <CharacterMaking
            breadcrumb={breadcrumb}
            pageSetter={setPage}
        ></CharacterMaking>
    }

    const content = ((stPage) => {
        if(stPage === 'character_making'){
            return constructCharacterMaking()
        }else{
            return constructOverall();
        }
    })(page);

    return content;
}


export default App;