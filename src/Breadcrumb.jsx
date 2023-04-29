import styled from "styled-components"

const BreadcrumbLi = styled.li`
display: inline-block;
font-size: 1.1rem;
&:after{
    content: ">";
    padding: 0 0.2em;
    font-size: 0.7em;
    color: #444444;
}
&:last-child:after{
    content: "";
}
`;

const Button = styled.button`
margin: 2px 5px;
padding: 2px;
border: 1px #aaa solid;
border-radius: 5px;
background-color: #eff6ff;
cursor: pointer;
`;

function Breadcrumb(props) {
    const breadcrumbOlStyles = {
        display: 'inline-block',
        listStyleType: 'none',
        fontSize: 0,
    };


    const changePage = (pageName) => {
        props.pageSetter(pageName);
    };

    const arrayToBreadcrumb = (arr) => {
        return <ol className="breadcrumb" style={breadcrumbOlStyles}>
            {
            arr.map((l) => {
                return <BreadcrumbLi key={l.key}>
                    <Button className="breadcrumb-link" onClick={() => changePage(l.id)}>
                        {l.name}
                    </Button>
                </BreadcrumbLi>
            })
            }
        </ol>
    }

    return (
        props.route && arrayToBreadcrumb(props.route)
    );
}

export default Breadcrumb;