import React, { Component } from 'react';
import { Layout ,Row , Col , Divider , Icon , Dropdown , Button } from 'antd';

import Nav from './nav';
/**
 *  Layout 布局组件
 * 
 * Row , Col 栅格化组件
 * 
 * Divider 分割线组件
 * 
 * Icon 图标组件
 *  
 * Dropdown 下拉菜单基础组件   overlay={ 菜单项组件 }  Button 作为子组件 展示下拉菜单的按钮 
 * 
 * */ 

export default class User extends Component{

    render() {
        return (
            <div>
                <Layout.Header>
                    <Row className="wrap">                         
                        <Col md={ 6 } xs={ 24 } >
                        
                            <h1 id="logo" >cNode</h1>
                        </Col>
                        <Col md={ 18 }  xs={ 0 }  >
                            <Divider className="headerDivider" type="vertical" ></Divider>
                            <Nav mode="horizontal" id="nav" ></Nav>
                        </Col>
                        <Col className="xsNav"  md={ 0 }  xs={ 24 }  >
                            <Dropdown
                                overlay={ <Nav mode="vertical" id="xsNav" ></Nav> }
                                trigger={ ['click' , 'touch'] }
                            >
                                <Button>
                                    <Icon type="bars" />
                                </Button>
                            </Dropdown>
                        </Col>

                    </Row>
                </Layout.Header>
            </div>
        );
    }
}