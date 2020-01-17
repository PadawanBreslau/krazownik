import React from 'react';
import PropTypes from 'prop-types';
import withApiWrite from 'hoc/apiHOC/Write';
import withApiRead from 'hoc/apiHOC/Read';

export default (hocOptions) => (PageComponent) => {
  @withApiRead(hocOptions)
  @withApiWrite(hocOptions)
  class ReadWriteHOC extends React.PureComponent {
    componentDidUpdate(prevProps) {
      if (
        !prevProps.data.initiated &&
        this.props.data.initiated &&
        !hocOptions.noReinitialization
      ) {
        const { dispatch, data } = this.props;
        const { initialize } = hocOptions;
        const adaptedData =
          initialize && data ? initialize(data.payload, this.props) : data.payload;
        dispatch(this.props.initialize(adaptedData));
      }
    }

    render() {
      const { data, handleSubmit } = this.props;
      return <PageComponent {...this.props} handleSubmit={handleSubmit} data={data} />;
    }
  }
  ReadWriteHOC.propTypes = {
    data: PropTypes.object,
    handleSubmit: PropTypes.func,
    initialize: PropTypes.func,
    dispatch: PropTypes.func,
  };
  return ReadWriteHOC;
};
