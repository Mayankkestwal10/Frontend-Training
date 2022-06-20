class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        // runs if error occurs anywhere in the component or its children
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        // stack trace
    }

    render(){
        if(this.state.hasError){
            // fallback ui
            return <p>Something went wrong</p>
        }else{
            return this.props.children
        }
    }
}