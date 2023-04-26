import ProgressCard from "./ProgressCard";
import PageBase from "./PageBase";

function CharacterMaking(props){
    const cards = <ProgressCard
            title="t"
            paragraph="t2"
        >
        </ProgressCard>
    
    return <PageBase
        header={props.header}
        progressCards={cards}
    ></PageBase>
}


export default CharacterMaking;