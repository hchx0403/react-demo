import React from 'react'
import { Button } from '../../antd';	//引入按钮
import '../../antd/dist/antd.css';   //还需要引入css样式


export default class App extends Component {
  render() {
    return (
      <div>
        <Button>我是antd的按钮哦</Button>
      </div>
    )
  }
}
