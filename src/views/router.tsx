import { Layout } from 'antd';
import { Footer, Header, history, Nav } from 'components';
import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
const { Content } = Layout;
export default () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Nav />
    <Layout>
      <Header />
      <Content style={{ margin: '0 16px' }}>
        <div
          style={{
            padding: 24,
            background: '#fff',
            minHeight: 360,
            margin: '16px 0',
          }}
        >
          <Router history={history}>
            <Switch>
              <Route exact={true} path='/' render={() => 'Hello'} />
            </Switch>
          </Router>
        </div>
      </Content>
      <Footer />
    </Layout>
  </Layout>
);
