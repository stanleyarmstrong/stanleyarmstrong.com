import { NextResponse } from 'next/server';
import { getContent } from '@/lib/get-content';

/**
 * API route to fetch content from YAML file
 * This allows client components to fetch content via HTTP
 */
export async function GET() {
  try {
    const content = getContent();
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error loading content:', error);
    return NextResponse.json(
      { error: 'Failed to load content' },
      { status: 500 }
    );
  }
}
