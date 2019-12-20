import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Container, Header, Content, Sidebar as RSSidebar } from 'rsuite';
import Appbar from '../appbar/Appbar';
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';
import { getProfile, getRefresh } from '../../services/auth/authAction';
import Loader from '../loading/Loader';
import indexedRoutes from '../../routes/routes';
import restaurantRouotes from '../../routes/RestaurantRoutes';
import preOrderRoutes from '../../routes/PreorderOnlineShopRoutes';
import inventoryRoutes from '../../routes/InventoryBasedOnlineShopRoutes';
import PrivateRoute from '../../routes/PrivateRoute';
import lotteryRoutes from '../../routes/LotteryRoute';

const Layout = props => {
  useEffect(() => {
    const profiledata = props.getProfile;
    const refresh = props.getRefresh;
    profiledata();
    refresh();
  }, [props.getProfile, props.getRefresh]);
  const [expand, setExpand] = useState(false);
  const { authPending, authUser } = props;

  const template = authUser && authUser.business && authUser.business.template;

  let routes;

  if (template === 'RESTAURANT') {
    routes = [...restaurantRouotes, ...indexedRoutes];
  }
  if (template === 'PRE_ORDER_ONLINE_SHOPPING') {
    routes = [...preOrderRoutes, ...indexedRoutes];
  }
  if (template === 'INVENTORY_BASED_ONLINE_SHOPPING') {
    routes = [...inventoryRoutes, ...indexedRoutes];
  }
  if (template === 'LOTTERY') {
    routes = [...lotteryRoutes, ...indexedRoutes];
  }

  if (authPending) {
    return <Loader />;
  }

  return (
    <Container style={{ width: '100%', height: '100%' }}>
      {!_.isEmpty(authUser) && (
        <RSSidebar
          width={expand ? 250 : 56}
          collapsible
          className={styles.rssSidebar}
        >
          <Sidebar expand={expand} authUser={authUser} routes={routes} />
        </RSSidebar>
      )}

      <Container>
        <Header>
          <Appbar
            onToggle={() => setExpand(!expand)}
            expand={expand}
            authUser={authUser}
          />
        </Header>

        <Content className={styles.layoutContent}>
          <Switch>
            {routes &&
              routes.map(
                ({
                  name,
                  path,
                  key,
                  component,
                  showDate,
                  hasAnyRoles,
                  nested,
                  subRoutes,
                }) => {
                  if (nested) {
                    return _.map(subRoutes, r => (
                      <PrivateRoute
                        exact
                        key={r.key}
                        path={r.path}
                        render={r.component}
                        name={r.name}
                        showDate={r.showDate}
                        hasAnyRoles={r.hasAnyRoles}
                      />
                    ));
                  }
                  return (
                    <PrivateRoute
                      exact
                      key={key}
                      path={path}
                      render={component}
                      name={name}
                      showDate={showDate}
                      hasAnyRoles={hasAnyRoles}
                    />
                  );
                }
              )}
          </Switch>
        </Content>
      </Container>
    </Container>
  );
};

const mapStateToProps = ({ auth }) => ({
  authPending: auth.isPending,
  authUser: auth.user,
});

export default connect(
  mapStateToProps,
  { getProfile, getRefresh }
)(Layout);
