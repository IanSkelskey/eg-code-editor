import { Injectable } from '@angular/core';
import hljs from 'highlight.js';

export interface HighlightedCode {
  html: string;
  language: string;
  valid: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SyntaxHighlightingService {
  private readonly supportedLanguages = new Set([
    'javascript', 'typescript', 'python', 'java', 'csharp', 'cpp', 'c',
    'html', 'css', 'json', 'xml', 'sql', 'markdown', 'bash', 'powershell',
    'php', 'ruby', 'go', 'rust', 'kotlin', 'swift', 'dart', 'scala',
    'yaml', 'dockerfile', 'nginx', 'apache', 'tt2', 'tt2-pseudoperl'
  ]);

  constructor() {
    // Configure highlight.js
    hljs.configure({
      ignoreUnescapedHTML: true,
      throwUnescapedHTML: false
    });

    // Initialize custom TT2 languages
    this.initializeTT2Languages();
  }

  /**
   * Initialize custom TT2 language definitions
   */
  private initializeTT2Languages(): void {
    try {
      // Register TT2 Pseudo-Perl language
      hljs.registerLanguage('tt2-pseudoperl', function (hljs) {
        return {
          name: 'TT2 Pseudo-Perl',
          case_insensitive: false,
          
          contains: [
            // # or ## line comments
            hljs.HASH_COMMENT_MODE,
            // Single and double quoted strings
            hljs.QUOTE_STRING_MODE,
            hljs.APOS_STRING_MODE,
            // Numbers
            hljs.C_NUMBER_MODE,
            
            // Keywords for TT2 directives
            {
              className: 'keyword',
              begin: /\b(IF|ELSE|ELSIF|UNLESS|SWITCH|CASE|FOR|FOREACH|WHILE|NEXT|LAST|RETURN|STOP|TRY|THROW|CATCH|END|FILTER|MACRO|SET|DEFAULT|INSERT|INCLUDE|PROCESS|WRAPPER|BLOCK|CALL|USE|DEBUG|TAGS)\b/,
              relevance: 10
            },
            
            // Function calls with optional dot-chaining
            {
              className: 'title.function',
              begin: /([a-zA-Z_]\w*)\.([a-zA-Z_]\w*)\s*\(/,
              end: /(?=\()/,
              returnBegin: true,
              contains: [
                {
                  className: 'variable',
                  begin: /^[a-zA-Z_]\w*/
                },
                {
                  className: 'property',
                  begin: /\.[a-zA-Z_]\w*/,
                  excludeBegin: true
                }
              ]
            },
            
            // Variables with $ prefix
            {
              className: 'variable',
              begin: /\$[a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*/,
              relevance: 5
            },
            
            // Bare identifiers as variables (lower relevance to not override keywords)
            {
              className: 'variable',
              begin: /\b[a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*\b/,
              relevance: 0
            }
          ]
        };
      });

      // Register Template Toolkit language
      hljs.registerLanguage('tt2', function (hljs) {
        return {
          name: 'Template Toolkit',
          case_insensitive: false,
          // Outside TT2 blocks → highlight as HTML/XML
          subLanguage: 'xml',
          relevance: 0,
          
          contains: [
            {
              // Match TT2 blocks: [% ... %] or [%- ... -%]
              className: 'template-tag',
              begin: '\\[%-?',
              end: '-?%\\]',
              subLanguage: 'tt2-pseudoperl',
              excludeBegin: true,
              excludeEnd: true,
              relevance: 10
            }
          ]
        };
      });

      console.log('TT2 languages registered successfully');
    } catch (error) {
      console.warn('Failed to register TT2 languages:', error);
    }
  }

  /**
   * Highlights the given code with the specified language
   */
  highlightCode(code: string, language: string): HighlightedCode {
    if (!code.trim()) {
      return {
        html: '',
        language: language,
        valid: true
      };
    }

    try {
      let result;
      
      if (this.isLanguageSupported(language) && this.isLanguageRegistered(language)) {
        // Use specific language highlighting
        result = hljs.highlight(code, { language: this.mapLanguage(language) });
      } else {
        // Auto-detect language or fallback
        result = hljs.highlightAuto(code);
      }

      return {
        html: result.value,
        language: result.language || language,
        valid: true
      };
    } catch (error) {
      console.warn('Syntax highlighting failed:', error);
      // Return escaped HTML as fallback
      return {
        html: this.escapeHtml(code),
        language: language,
        valid: false
      };
    }
  }

  /**
   * Check if a language is supported by this service
   */
  isLanguageSupported(language: string): boolean {
    return this.supportedLanguages.has(language.toLowerCase());
  }

  /**
   * Check if a language is actually registered with highlight.js
   */
  private isLanguageRegistered(language: string): boolean {
    const mappedLanguage = this.mapLanguage(language);
    try {
      // Try to get the language definition
      return hljs.getLanguage(mappedLanguage) !== undefined;
    } catch {
      return false;
    }
  }

  /**
   * Get list of supported languages
   */
  getSupportedLanguages(): string[] {
    return Array.from(this.supportedLanguages).sort();
  }

  /**
   * Map custom language names to highlight.js language names
   */
  private mapLanguage(language: string): string {
    const languageMap: Record<string, string> = {
      'csharp': 'cs',
      'cpp': 'cpp',
      'c': 'c',
      'javascript': 'javascript',
      'typescript': 'typescript',
      'python': 'python',
      'java': 'java',
      'html': 'html',
      'css': 'css',
      'json': 'json',
      'xml': 'xml',
      'sql': 'sql',
      'markdown': 'markdown',
      'bash': 'bash',
      'powershell': 'powershell',
      'plain': 'plaintext',
      'tt2': 'tt2',
      'tt2-pseudoperl': 'tt2-pseudoperl'
    };

    return languageMap[language.toLowerCase()] || language;
  }

  /**
   * Escape HTML characters for safe display
   */
  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}
