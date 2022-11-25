import { ContactsEditor } from '../components/ContactsEditor/ContactsEditor';
import { useAuth } from 'hooks';

export default function ContactsPage() {
  const { isLoggedIn } = useAuth();
  return <>{isLoggedIn && <ContactsEditor />}</>;
}
