import { Switch, Route } from 'react-router-dom';
import NavMenuDesktop from './NavMenuDesktop';
import RightSidePanel from './RightSidePanel';
import QuesListPage from '../pages/QuesListPage';
import AllTagsPage from '../pages/AllTagsPage';
import AllUsersPage from '../pages/AllUsersPage';
import QuestionPage from '../pages/QuestionPage';
import AskQuestionPage from '../pages/AskQuestionPage';

import { Container, Grid } from '@material-ui/core';

const Routes = () => {
  return (
    <Container disableGutters>
      <Grid container direction="row" wrap="nowrap" justify="space-between">
        <Switch>
          <Route exact path="/">
            <NavMenuDesktop />
            <QuesListPage />
            <RightSidePanel />
          </Route>
          <Route exact path="/ask">
            <NavMenuDesktop />
            <AskQuestionPage />
            <RightSidePanel />
          </Route>
          <Route exact path="/tags">
            <NavMenuDesktop />
            <AllTagsPage />
          </Route>
          <Route exact path="/users">
            <NavMenuDesktop />
            <AllUsersPage />
          </Route>
          <Route exact path="/questions/:quesId">
            <NavMenuDesktop />
            <QuestionPage />
          </Route>
          <Route exact path="/tags/:tagName">
            <NavMenuDesktop />
            <QuesListPage tagFilterActive={true} />
            <RightSidePanel />
          </Route>
        </Switch>
      </Grid>
    </Container>
  );
};

export default Routes;
