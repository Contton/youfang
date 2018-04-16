import React, { Component } from 'react';
import ComponentFind from './ComponentFind';
import ComponentPlace from './ComponentPlace';

class ComponentAll extends React.Component{
    render(){
        return(
            <div className="place">
                <ComponentFind/>
                <ComponentPlace/>
            </div>
        );
    }
}
export default ComponentAll;