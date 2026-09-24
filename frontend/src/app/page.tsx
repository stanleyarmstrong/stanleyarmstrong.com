import { getContent } from '@/lib/get-content';
import Home from './home';

export default function Page() {
  const content = getContent();

  return <Home content={content} />;
}
