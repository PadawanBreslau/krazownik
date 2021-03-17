import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import OwnResults from 'containers/Crypto/CryptoOwnResults'
import CryptoResults from 'containers/Crypto/CryptoResults';
import styles from './styles.scss';

const CryptoPanel = ({ handleSubmit }) => (
  <div className={styles.crypto}>
    <div className={styles.cryptoPanel}>
      <Form handleSubmit={handleSubmit} />
      <OwnResults />
    </div>
    <CryptoResults />
  </div>
);

CryptoPanel.propTypes = {
  handleSubmit: PropTypes.func,
};

export default CryptoPanel;
