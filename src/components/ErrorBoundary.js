import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info){
        console.log(error, info);
    }
    render(){
        return this.state.hasError ? <p>Loading failed! Please reload</p> : this.props.children
    }
}

export default ErrorBoundary;