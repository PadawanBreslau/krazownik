import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import CryptoResults from 'containers/Crypto/CryptoResults';
import styles from './styles.scss';

const CryptoPanel = ({ data, handleSubmit }) => (
  <div className={styles.cryptoPanel}>
    <Form handleSubmit={handleSubmit} />
    <CryptoResults />
  </div>
);

CryptoPanel.propTypes = {
  data: PropTypes.object,
  handleSubmit: PropTypes.func,
};

export default CryptoPanel;
