/**
 * @Author: CJN
 * @Date: 2018/7/31
 * @Description: *
 */
import React, { Component } from 'react'



export default(title) => (WrappedComponent) => class HOC extends Component {
    render() {
        return <div>
            <div className="demo-header">
                {title
                    ? title
                    : '我是标题'}
            </div>
            <WrappedComponent {...this.props}/>
        </div>
    }
}