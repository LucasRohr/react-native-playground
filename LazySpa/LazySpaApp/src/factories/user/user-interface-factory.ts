import { UserApiInterface, UserInterface } from '../../interfaces';

import { buildEmptyObject } from './build-empty-object';

export const userInterfaceFactory = (apiObject?: UserApiInterface): UserInterface => {
  if (!apiObject || !apiObject?.user) {
    return buildEmptyObject();
  }

  const {
    user: { id, email, name, phone, address, token },
  } = apiObject;

  return {
    id: id?.toString() ?? '',
    email: email ?? '',
    name: name ?? '',
    phone: phone ?? '',
    address: address ?? '',
    token: token ?? '',
  };
};
