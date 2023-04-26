function Breadcrumb(props) {
    const breadcrumbOlStyles = {
        display: 'inline-block',
        listStyleType: 'none',
        fontSize: 0,
    };
    const breadcrumbLiStyles = {
        display: 'inline-block',
        fontSize: '1.1rem',
    };

    const changePage = (pageName) => {
        props.pageSetter(pageName);
    };

    const arrayToBreadcrumb = (arr) => {
        return <ol className="breadcrumb" style={breadcrumbOlStyles}>
            {
            arr.map((l, i) => {
                let liClass = "breadcrumb-item";
                if(i == 0){
                    liClass += " breadcrumb-item-start"
                }else if(i == arr.length - 1){
                    liClass += " breadcrumb-item-end"
                }else{
                    liClass += " breadcrumb-item-way"
                }
                return <li className={liClass} style={breadcrumbLiStyles} key={l.key}>
                    <button className="breadcrumb-link" onClick={() => changePage(l.id)}>
                        {l.name}
                    </button>
                </li>
            })
            }
        </ol>
    }

    return (
    props.route && arrayToBreadcrumb(props.route)
    );
}

export default Breadcrumb;