import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import ConfirmationModal from 'components/ConfirmationModal';
import Layout from 'components/Layout/Layout';
import LayoutSimplified from 'components/Layout/LayoutSimplified';
import LayoutCandidate from 'components/Layout/LayoutCandidate';
import LayoutNavbar from 'components/Layout/LayoutNavbar';
import LayoutSignup from 'components/Layout/LayoutSignup';
import withUI from 'hoc/uiHOC';

export default function withLayout({ navigation, type, url }) {
  return (PageComponent) => {
    @withUI()
    class layoutHOC extends React.PureComponent {
      render() {
        const { ui } = this.props;
        switch (type) {
          case 'candidate':
            return (
              <LayoutCandidate {...this.props}>
                <PageComponent {...this.props} />
              </LayoutCandidate>
            );
          case 'simplified':
            return (
              <LayoutSimplified {...this.props}>
                <PageComponent {...this.props} />
              </LayoutSimplified>
            );
          case 'navbar':
            return (
              <LayoutNavbar containerData={this.props.data} url={url} {...this.props}>
                <PageComponent {...this.props} />
                <Modal visible={ui.modal.visible} content={ui.modal.content} />
                <ConfirmationModal
                  visible={ui.confirmation.visible}
                  content={ui.confirmation.content}
                />
              </LayoutNavbar>
            );
          case 'signup':
            return (
              <LayoutSignup {...this.props}>
                <PageComponent {...this.props} />
              </LayoutSignup>
            );
          default:
            return (
              <Layout
                navigation={navigation}
                containerData={this.props.data}
                url={url}
                {...this.props}
              >
                <PageComponent {...this.props} />
                <Modal visible={ui.modal.visible} content={ui.modal.content} />
                <ConfirmationModal
                  visible={ui.confirmation.visible}
                  content={ui.confirmation.content}
                />
              </Layout>
            );
        }
      }
    }
    layoutHOC.propTypes = {
      ui: PropTypes.object,
      data: PropTypes.object,
    };

    return layoutHOC;
  };
}
