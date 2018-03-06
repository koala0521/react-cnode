import React, { Component } from 'react';
import { Card } from 'antd';

export default class PublicCard extends Component{
    
    render() {
        
        let {data} = this.props;

        let cards = data.map(( item )=>{
            return (
                <div className="wrap" >                
                    <Card        
                        title={ item.title }
                        loading={ false }
                        type="inner"
                        key={ Math.random() }
                    >   
                        
                        {/* dangerouslySetInnerHTML 类似原生的 innerHTML ,接收一个对象 ，key值为 __html  */} 
                        <div
                            dangerouslySetInnerHTML={ {__html : item.content} }
                        >
                        
                        </div>
                    </Card>
                </div>
            )
        });
        
        return (
            <div>
                { cards }
            </div>
        );
    }
}