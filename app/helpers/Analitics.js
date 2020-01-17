import Connection from 'helpers/Connection';
import { getFromStorage } from 'helpers/Headers';
import { prepareEndpoint } from 'helpers/Url';
import { isCompany, isTalentAdvocateOrSourcer } from 'helpers/User';

export default function handleAnalitics(event, candidateId, clickType) {
  const userRole = getFromStorage('user-role');

  if (isCompany(userRole) || (isTalentAdvocateOrSourcer(userRole) && clickType === 'email')) {
    event.stopPropagation();
    const formattedEndpoint = prepareEndpoint('/clicks');
    Connection.post(formattedEndpoint, { data: { attributes: { candidateId, clickType } } });
  }

  return false;
}
