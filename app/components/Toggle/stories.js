import React from 'react';
import { storiesOf } from '@storybook/react';
import { Field } from 'redux-form';
import { FormProvider } from '../../../.storybook/provider';
import Toggle from './index';

storiesOf('Page component: Toggle', module)
  .addDecorator((story) => <FormProvider story={story} />)
  .add('Toggle', () => <Field name="toggle" component={Toggle} />);
