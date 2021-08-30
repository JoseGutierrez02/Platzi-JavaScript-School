import gravatar from '../../utils/gravatar';

test('Gravatar function test', () => {
  const email = 'josearmandog02@gmail.com';
  const gravatarUrl = 'https://gravatar.com/avatar/676cab6dd132f65cf34d571af8d70049';

  expect(gravatarUrl).toEqual(gravatar(email));
});
