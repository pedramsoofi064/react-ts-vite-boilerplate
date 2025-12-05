// TO GET THE USER FROM THE AUTHCONTEXT, YOU CAN USE

// CHANGE:
// import { useMockedUser } from 'src/hooks/use-mocked-user';
// const { user } = useMockedUser();

// TO:
// import { useAuthContext } from 'src/auth/hooks';
// const { user } = useAuthContext();

// ----------------------------------------------------------------------

export function useMockedUser() {
  const user = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'John Doe',
    email: 'demo@example.com',
    password: 'demo1234',
    photoURL: '', // Add your user avatar URL here
    phoneNumber: '+1 234 567 8900',
    country: 'United States',
    address: '123 Main St',
    state: 'California',
    city: 'San Francisco',
    zipCode: '94116',
    about: 'User description goes here.',
    role: 'admin',
    isPublic: true,
  };

  return { user };
}
