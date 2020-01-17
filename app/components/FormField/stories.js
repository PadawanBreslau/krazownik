import React from 'react';
import { storiesOf } from '@storybook/react';
import { FormProvider } from '../../../.storybook/provider';
import FormField from './index';

storiesOf('Page component: FormField', module)
  .addDecorator((story) => <FormProvider story={story} />)
  .add('text field', () => <FormField label="First name" type="text" fieldName="example" />);
