import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error){
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo){
        console.log(error)
        console.log(errorInfo)
    }

    render(){
        if(this.state.hasError){
            console.log('error');
            return <div>ded</div>
        }

        return this.props.children;
    }
}

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </React.StrictMode>
    ,document.getElementById('root')
);