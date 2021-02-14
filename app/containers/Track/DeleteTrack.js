import React from 'react';
import { withApiWrite } from 'hoc/apiHOC';
import { showUiSuccess } from 'redux/UI/actions';
import DeleteTrackForm from 'components/TrackView/DeleteTrackForm'

@withApiWrite({
  storeName: 'DeleteTrack',
  formName: 'DeleteTrack',
  api: {
    delete: '/tracks/:id',
  },
  successRedirectUrl: '/tracks',
  successCallbackActions: [showUiSuccess('Trasa została usunięta')]
})
export class DeleteTrack extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props;

    return (
      <DeleteTrackForm handleSubmit={handleSubmit}/>
    );
  }
}


export default DeleteTrack;
