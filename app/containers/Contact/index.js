import React from 'react';
import ContactInfo from 'components/ContactInfo';
import withLayout from 'hoc/layoutHOC';

@withLayout({
  type: 'simplified',
})
export class Contact extends React.PureComponent {
  render() {
    return <ContactInfo />;
  }
}
export default Contact;
