/**
 * @author Lnden
 * @date 2018/11/14
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */
import React, { Component } from 'react'

// function formatName(user){
//     return user.firstName+''+user.lastName
// }
// const user = {
//     firstName:'Tom',
//     lastName:'Ding'
// };
// const element = (
//     <h1>
//         hello,{formatName(user)}!
//     </h1>
// );
//
// function getGreeting(user){
//     if(user){
//         return <h1>hello,{formatName(user)}</h1>
//     }else{
//         return <h1>hello,stranger</h1>
//     }
// }

// function Welcome(props){
//     return <h1>hello,{props.firstName}</h1>
// }

// class Welcome extends Component {
//     render(){
//         return <h1>hello,{this.props.name}</h1>
//     }
// }

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {date:new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillMount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date:new Date()
        })
    }

    render(){
        return (
            <div>
                <h1>hello,react</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}


export default class App extends Component {
    render(){
        return (
            <div>
                <Clock/>
            </div>

        )
    }
}