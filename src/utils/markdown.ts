import { readFileSync } from 'fs';
import { join } from 'path';
import { marked } from 'marked';

export function getMarkdownContent(filename: string): string {
  const filePath = join(process.cwd(), 'src', 'content', filename);
  const content = readFileSync(filePath, 'utf-8');
  return marked.parse(content);
}

