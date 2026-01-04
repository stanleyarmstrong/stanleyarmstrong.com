import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

/**
 * Reads and parses a YAML file from the project root or a specified directory
 * @param filePath - Path to the YAML file (relative to project root or absolute)
 * @returns Parsed YAML content as an object
 */
export function loadYaml<T = any>(filePath: string): T {
  try {
    // Resolve the file path
    const fullPath = path.isAbsolute(filePath) 
      ? filePath 
      : path.join(process.cwd(), filePath);
    
    // Read the file
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse YAML
    const data = yaml.load(fileContents) as T;
    
    return data;
  } catch (error) {
    console.error(`Error loading YAML file ${filePath}:`, error);
    throw error;
  }
}

/**
 * Reads and parses a YAML file asynchronously
 * @param filePath - Path to the YAML file (relative to project root or absolute)
 * @returns Promise that resolves to parsed YAML content
 */
export async function loadYamlAsync<T = any>(filePath: string): Promise<T> {
  try {
    const { readFile } = await import('fs/promises');
    
    // Resolve the file path
    const fullPath = path.isAbsolute(filePath) 
      ? filePath 
      : path.join(process.cwd(), filePath);
    
    // Read the file
    const fileContents = await readFile(fullPath, 'utf8');
    
    // Parse YAML
    const data = yaml.load(fileContents) as T;
    
    return data;
  } catch (error) {
    console.error(`Error loading YAML file ${filePath}:`, error);
    throw error;
  }
}
