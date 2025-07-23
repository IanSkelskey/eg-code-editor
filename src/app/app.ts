import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';

interface Language {
  value: string;
  label: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CodeEditorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-code-editor');
  
  // Available programming languages
  protected readonly availableLanguages = signal<Language[]>([
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'csharp', label: 'C#' },
    { value: 'cpp', label: 'C++' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'json', label: 'JSON' },
    { value: 'xml', label: 'XML' },
    { value: 'sql', label: 'SQL' },
    { value: 'markdown', label: 'Markdown' },
    { value: 'bash', label: 'Bash' },
    { value: 'powershell', label: 'PowerShell' },
    { value: 'tt2', label: 'Template Toolkit' },
    { value: 'tt2-pseudoperl', label: 'TT2 Pseudo-Perl' },
    { value: 'plain', label: 'Plain Text' }
  ]);
  
  // Currently selected language
  protected readonly selectedLanguage = signal<string>('javascript');
  
  // Code content
  protected readonly codeContent = signal<string>('');
  
  // Event handlers
  protected onLanguageChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedLanguage.set(target.value);
  }
  
  protected onCodeChange(newCode: string): void {
    this.codeContent.set(newCode);
  }
}
