import React from 'react';
import { withApiWrite } from 'hoc/apiHOC';
import { showUiSuccess } from 'redux/UI/actions';
import DeletePhotoForm from 'components/TeamView/DeletePhotoForm';

@withApiWrite({
  storeName: 'DeletePhoto',
  formName: 'DeletePhoto',
  api: {
    delete: '/team_task_photos/:id',
  },
  successRedirectUrl: '/teams/panel',
  successCallbackActions: [showUiSuccess('Zdjęcie zostało usunięta')],
})
export class DeletePhoto extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props;

    return <DeletePhotoForm handleSubmit={handleSubmit} />;
  }
}

export default DeletePhoto;
