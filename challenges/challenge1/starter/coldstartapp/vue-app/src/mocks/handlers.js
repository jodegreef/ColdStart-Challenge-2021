import { rest } from 'msw';

export const handlers = [
  rest.get('/.auth/me', (req, res, ctx) => res(ctx.status(200), ctx.json({
    clientPrincipal: {
      identityProvider: 'twitter',
      userId: '1477a8e096434445ae096ab056e511f5',
      userDetails: 'fakeJo',
      userRoles: ['contributor', 'reader', 'anonymous', 'authenticated'],
    },
  }))),
];
