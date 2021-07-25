import './scss/main.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Component } from 'react'

class HelloMessage extends Component {
    render() {
        return <div>Hello from react tsx</div>
    }
}
 

let mountNode = document.getElementById('app') 
console.log(mountNode);         
ReactDOM.render(<HelloMessage></HelloMessage>, mountNode)