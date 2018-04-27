import React, { Component } from 'react';
import { Collapse } from 'antd'
import 'antd/dist/antd.css'

class Item extends Component {
    render() {
        const Panel = Collapse.Panel;
        let {keyObject,keyArr} = this.props;
        //用于默认key的数组
        let arr = Object.keys(keyObject);
        function callback(key) {
            console.log(key);
        }

        return (
            <Collapse defaultActiveKey={arr} onChange={callback}>
                {
                    keyArr.map(item => {
                        return (<Panel header={item[0][0]} key={item[0][0]}>
                            {
                                item[0][1].map(item=>{
                                    return(
                                        <p key={item}>{item}</p>
                                    )
                                })
                            }
                            
                        </Panel>)
                    })
                }
            </Collapse>
        );
    }
}

export default Item;
