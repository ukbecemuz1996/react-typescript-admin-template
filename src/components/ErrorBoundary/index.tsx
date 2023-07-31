import { Alert, AlertTitle } from '@mui/material';
import React from 'react';

type Props = {
    children:JSX.Element
}

type State = {
    hasError:boolean,
    error:Error | null,
    errorInfo:React.ErrorInfo | null
}

class ErrorBoundary extends React.Component<Props,State> {
    constructor(props:Props) {
        super(props);
        this.state = {hasError:false,error:null,errorInfo:null};
    }

    static getDerivedStateFromError(error:Error,errorInfo:React.ErrorInfo) {
        return {hasError:true,error,errorInfo};
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error(error,errorInfo);
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return (
                <Alert severity="error">
                    <AlertTitle>{this.state.error?.name}</AlertTitle>
                    {this.state.error?.message}
                </Alert>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;