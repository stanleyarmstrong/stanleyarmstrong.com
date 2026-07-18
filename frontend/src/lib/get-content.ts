import { loadYaml } from './yaml-loader';
import { ContentData } from '@/types/content';

/**
 * Loads content from the YAML file
 * This function should be called from server components or API routes
 * since it uses Node.js file system operations
 */
export function getContent(): ContentData {
  return loadYaml<ContentData>('content.yaml');
}
