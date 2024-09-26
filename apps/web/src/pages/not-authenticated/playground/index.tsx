import { Button, Card, Col, Grid, Layout, Row  } from 'antd';
import Logo from '../../../assets/logo/Logo.png';

import DropDownButton from '../../../components/button/user-button';

const { Content, Header } = Layout;

export function PlayGroundPage(){

    return(
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',  
                    padding: '0 150px',
                }}
            >
                <img src={Logo} alt="Logo" style={{ height: '40px', borderRadius: '8px' }} />
                <DropDownButton />
            </Header>
            <Content
            style={{
                padding: '0 150px',
                margin: 0,
            }}
            >
                
                <Row
                style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    gap: '10px'
                }}
                >
                    <Col 
                    span={6}
                    style={{
                        height: '50px',
                        alignContent: 'center',
                        textAlign: 'center',
                        backgroundColor: 'blue',
                    }}
                    >col-6</Col>
                    <Col span={6}
                    style={{
                        height: '50px',
                        alignContent: 'center',
                        textAlign: 'center',
                        backgroundColor: 'green',
                    }}
                    >col-6</Col>
                    <Col span={6}
                    style={{
                        height: '50px',
                        alignContent: 'center',
                        textAlign: 'center',
                        backgroundColor: 'orange',
                    }}
                    >col-6</Col>
                    <Col span={6}
                    style={{
                        height: '50px',
                        alignContent: 'center',
                        textAlign: 'center',
                        backgroundColor: 'yellow',
                    }}
                    >col-6</Col>
                </Row>
               
            </Content>
        </Layout>
    )
}

export default PlayGroundPage;