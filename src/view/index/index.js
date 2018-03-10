import React , { Component } from 'react';
import { Row , Col } from 'antd';
import LeftMenu from '../leftMenu';
import List from '../list';

export default class IndexPage extends Component{

    constructor(...arg){
        super(...arg);
    };

    render() {  
        let tab  = this.props.match.params.id;
        return (
            <div className="wrap" >
                <Row>
                    <Col  md={ 6 } xs={ 0 } className="indexSider" >  
                        <LeftMenu id="indexMenu" mode="vertical"  />
                    </Col>
                    
                    <Col  md={ 0 } xs={ 24 } >  
                    
                        <LeftMenu id="indexXsMenu" mode="horizontal"  />
                    </Col>

                    <Col md={ 18 } xs={ 24 } className="indexList"  >
                        <List tab={ tab } />
                    </Col>
                </Row>
            </div>
        );
    }
}
