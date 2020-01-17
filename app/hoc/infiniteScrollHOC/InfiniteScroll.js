import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { prepareEndpoint } from 'utils/Url';
import generateActions from 'redux/infiniteScroll/actions';
import withRedux from 'hoc/infiniteScrollHOC/ReduxConnect';
import { isTalentAdvocateOrSourcer } from 'helpers/User';

export default (hocOptions) => (PageComponent) => {
  @withRedux({
    ...hocOptions,
    mapDispatchToProps: (dispatch) => ({
      dispatch,
      onComponentMounted: (endpoint, props) => {
        const actions = generateActions(hocOptions.storeName);
        const formattedEndpoint = prepareEndpoint(endpoint, props);
        const {
          match: { params },
        } = props;

        if (!formattedEndpoint.includes('undefined'))
          dispatch(actions.loadPageData(formattedEndpoint));
        else dispatch(actions.clearPageData(formattedEndpoint));
        if (
          isTalentAdvocateOrSourcer() &&
          params.searchId &&
          params.search.length === 0 &&
          !params.id
        ) {
          dispatch(
            push({
              search: `?${new URLSearchParams({ page: 1 }).toString()}`,
            }),
          );
        }
      },
      onScrollFinish: (endpoint, payload) => {
        const actions = generateActions(hocOptions.storeName);
        if (hocOptions.api.post) {
          dispatch(actions.submitPageData(endpoint, 'post', payload));
        } else {
          const getEndpoint = hocOptions.api.get.substring(0, hocOptions.api.get.lastIndexOf('/'));
          const formattedEndpoint = `${getEndpoint}?page=${payload.page}`;
          dispatch(actions.submitPageData(formattedEndpoint, 'get', payload));
        }
      },
      onPageChange: (page, props, callback) => {
        const { loadPageData } = generateActions(hocOptions.storeName);
        const formattedProps = props;
        formattedProps.location.search = `?page=${page}`;
        const formattedEndpoint = prepareEndpoint(hocOptions.api.get, formattedProps);
        const resultsContainer = document.querySelector('#candidateContainer');
        resultsContainer.scrollIntoView();
        dispatch(loadPageData(`${formattedEndpoint}`, callback));
        dispatch(
          push({
            search: `?${new URLSearchParams({ page }).toString()}`,
          }),
        );
      },
    }),
  })
  class InfiniteScrollHOC extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        // eslint-disable-next-line react/no-unused-state
        scrollY: 0,
        scrollBarRate: 0,
      };
      this.scrollRateCalculation = this.scrollRateCalculation.bind(this);
      this.setContainer = this.setContainer.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
      const { api } = hocOptions;
      if (api.get) {
        this.props.onComponentMounted(api.get, this.props);
      }
      if (this.scrollContainer) {
        this.scrollRateCalculation();
      }

      window.addEventListener('hashchange', this.ScrollRateCalculation);
      document.addEventListener('click', this.ScrollRateCalculation);
    }

    setContainer(element) {
      this.scrollContainer = element;
    }

    scrollRateCalculation() {
      const innerHeight = this.scrollContainer.getBoundingClientRect().height;
      const {
        data: { meta },
      } = this.props;
      const { totalPages } = meta;
      const { totalCount } = meta;
      const { currentPage } = meta;
      const bodyElement = document.querySelector('#candidateContainer');
      const rect = bodyElement.getBoundingClientRect();
      const heightIsHtml = rect.height;
      let scrollMax = 0;
      if (currentPage === totalPages) {
        // last page has already whole container = easiest way
        scrollMax = Math.ceil(heightIsHtml - innerHeight);
      } else {
        const heightPerPage = heightIsHtml / currentPage;
        const candidatesPerPage = meta.pageSize || 10;
        const heightPerCandidate = heightPerPage / candidatesPerPage;
        scrollMax = Math.ceil(heightPerCandidate * totalCount - innerHeight);
      }
      const scrollY = this.scrollContainer.scrollTop || document.body.scrollTop;
      const scrollRate = parseInt((scrollY / scrollMax) * 100, 10);
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        scrollY,
        scrollBarRate: scrollRate,
      });
    }

    handleScroll() {
      const { api } = hocOptions;
      const {
        data: { meta, loading },
        onScrollFinish,
      } = this.props;
      const currentEndpoint = api.post;
      const page = meta.nextPage;
      const { searchId } = meta;
      const payload = { page, searchId };
      const shouldUpdateList =
        Math.round(this.scrollContainer.clientHeight) +
          Math.round(this.scrollContainer.scrollTop) >=
          this.scrollContainer.scrollHeight - 10 &&
        !loading &&
        meta.nextPage !== null;

      this.scrollRateCalculation();
      if (shouldUpdateList) {
        onScrollFinish(currentEndpoint, payload);
        this.scrollRateCalculation();
      }
    }

    render() {
      const { data } = this.props;

      return (
        <PageComponent
          {...this.props}
          data={data}
          setContainer={this.setContainer}
          handleScroll={this.scrollContainer ? this.handleScroll : null}
          scrollBarRate={this.state.scrollBarRate}
        />
      );
    }
  }
  InfiniteScrollHOC.propTypes = {
    data: PropTypes.object,
    onComponentMounted: PropTypes.func,
    onScrollFinish: PropTypes.func,
  };
  return InfiniteScrollHOC;
};
