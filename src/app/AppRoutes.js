import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const RtlLayout = lazy(() => import('./layout/RtlLayout'));

const Widgets = lazy(() => import('./widgets/Widgets'));

const Accordions = lazy(() => import('./basic-ui/Accordions')); 
const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Badges = lazy(() => import('./basic-ui/Badges'));
const Breadcrumbs = lazy(() => import('./basic-ui/Breadcrumbs'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Modals = lazy(() => import('./basic-ui/Modals'));
const Progress = lazy(() => import('./basic-ui/Progress'));
const Paginations = lazy(() => import('./basic-ui/Paginations'));
const TabsPage = lazy(() => import('./basic-ui/TabsPage'));
const Typography = lazy(() => import('./basic-ui/Typography'));
const Popups = lazy(() => import('./basic-ui/Popups'));

const Dragula = lazy(() => import('./advanced-ui/Dragula'));
const Clipboard = lazy(() => import('./advanced-ui/Clipboards'));
const ContextMenu = lazy(() => import('./advanced-ui/ContextMenus'));
const Sliders = lazy(() => import('./advanced-ui/Sliders'));
const Carousel = lazy(() => import('./advanced-ui/Carousel'));
const Loaders = lazy(() => import('./advanced-ui/Loaders'));
const TreeView = lazy(() => import('./advanced-ui/TreeView'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));
const AdvancedElements = lazy(() => import('./form-elements/AdvancedElements'));
const Wizard = lazy(() => import('./form-elements/Wizard'));

const BasicTable = lazy(() => import('./tables/BasicTable'));
const ReactTable = lazy(() => import('./tables/ReactTable'));
const SortableTable = lazy(() => import('./tables/SortableTable'));

const VectorMap = lazy(() => import('./maps/VectorMap'));
const SimpleMap = lazy(() => import('./maps/SimpleMap'));


const Mdi = lazy(() => import('./icons/Mdi'));
const FlagIcons = lazy(() => import('./icons/FlagIcons'));
const FontAwesome = lazy(() => import('./icons/FontAwesome'));
const SimpleLine = lazy(() => import('./icons/SimpleLine'));
const Themify = lazy(() => import('./icons/Themify'));
const TypIcons = lazy(() => import('./icons/TypIcons'));

const ChartJs = lazy(() => import('./charts/ChartJs'));
const C3Charts = lazy(() => import('./charts/C3Charts'));
const Chartist = lazy(() => import('./charts/Chartist'));
const GoogleCharts = lazy(() => import('./charts/GoogleCharts'));
const SparkLineCharts = lazy(() => import('./charts/SparkLineCharts'));
const GuageChart = lazy(() => import('./charts/GuageChart'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const LandingPage = lazy(() => import('./general-pages/LandingPage'));
const BlankPage = lazy(() => import('./general-pages/BlankPage'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route exact path="/layout/RtlLayout" component={ RtlLayout } />

          <Route exact path="/widgets" component={ Widgets } />


          <Route path="/basic-ui/accordions" component={ Accordions } />
          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/badges" component={ Badges } />
          <Route path="/basic-ui/breadcrumbs" component={ Breadcrumbs } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/modals" component={ Modals } />
          <Route path="/basic-ui/progressbar" component={ Progress } />
          <Route path="/basic-ui/pagination" component={ Paginations } />
          <Route path="/basic-ui/tabs" component={ TabsPage } />
          <Route path="/basic-ui/typography" component={ Typography } />
          <Route path="/basic-ui/popups" component={ Popups } />

          <Route path="/advanced-ui/dragula" component={ Dragula } />
          <Route path="/advanced-ui/clipboard" component={ Clipboard } />
          <Route path="/advanced-ui/context-menu" component={ ContextMenu } />
          <Route path="/advanced-ui/sliders" component={ Sliders } />
          <Route path="/advanced-ui/carousel" component={ Carousel } />
          <Route path="/advanced-ui/loaders" component={ Loaders } />
          <Route path="/advanced-ui/tree-view" component={ TreeView } />

          <Route path="/form-Elements/basic-elements" component={ BasicElements } />
          <Route path="/form-Elements/advanced-elements" component={ AdvancedElements } />
          <Route path="/form-Elements/wizard" component={ Wizard } />

          <Route path="/tables/basic-table" component={ BasicTable } />
          <Route path="/tables/react-table" component={ ReactTable } />
          <Route path="/tables/sortable-table" component={ SortableTable } />

          <Route path="/maps/vector-map" component={ VectorMap } />
          <Route path="/maps/simple-map" component={ SimpleMap } />
          

          <Route path="/icons/mdi" component={ Mdi } />
          <Route path="/icons/flag-icons" component={ FlagIcons } />
          <Route path="/icons/font-awesome" component={ FontAwesome } />
          <Route path="/icons/simple-line" component={ SimpleLine } />
          <Route path="/icons/themify" component={ Themify } />
          <Route path="/icons/typicons" component={ TypIcons } />

          
          <Route path="/icons/themify" component={ Themify } />

          <Route path="/charts/chart-js" component={ ChartJs } />
          <Route path="/charts/c3-chart" component={ C3Charts } />
          <Route path="/charts/chartist" component={ Chartist } />
          <Route path="/charts/google-charts" component={ GoogleCharts } />
          <Route path="/charts/sparkline-charts" component={ SparkLineCharts } />
          <Route path="/charts/guage-chart" component={ GuageChart } />


          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Route path="/general-pages/blank-page" component={ BlankPage } />
          <Route path="/general-pages/landing-page" component={ LandingPage } />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;