import { ContactsEditor } from '../components/ContactsEditor/ContactsEditor';
import { useAuth } from 'hooks';

export default function ContactsPage() {
  console.log('ContactsPage');
  const { isLoggedIn } = useAuth();
  return <>{isLoggedIn && <ContactsEditor />}</>;
}
