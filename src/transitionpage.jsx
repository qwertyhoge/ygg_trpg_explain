function transitionPage(pageSetter, link){
    if(link.startsWith('external:')){
        const colonPos = link.indexOf(':');
        const externalLink = link.substring(colonPos + 1);
        window.open(externalLink);
    }else{
        pageSetter(link);
    }
}

export default transitionPage;