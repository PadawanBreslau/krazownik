import React from 'react';
import { storiesOf } from '@storybook/react';
import ArrowIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/arrow.svg';
import Button from './index';
import styles from './styles.scss';

storiesOf('Page component: Button', module)
  .add('with text', () => <Button>Span</Button>)
  .add('with icon', () => (
    <Button className={styles['button--icon']}>
      Next step
      <ArrowIcon />
    </Button>
  ));
