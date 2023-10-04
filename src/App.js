import React from "react";
import "./App.css";
import {Col, Input, Row} from 'antd';

export const App = () => (
    <Row justify="center" align="middle">
        <Col>
            <Input prefix="USD"/>
        </Col>
    </Row>
);
