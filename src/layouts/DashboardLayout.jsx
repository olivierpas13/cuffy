import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function DashboardLayout({ children }) {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
}