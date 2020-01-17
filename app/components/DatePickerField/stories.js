import React from 'react';
import { storiesOf } from '@storybook/react';
import { FormProvider } from '../../../.storybook/provider';
import DatePickerField from './index';

storiesOf('Page component: datePicker', module)
  .addDecorator((story) => <FormProvider story={story} />)
  .add('datePicker', () => (
    <DatePickerField label="RTW - visa expiration date" fieldName="visa_expiration_date" />
  ));
