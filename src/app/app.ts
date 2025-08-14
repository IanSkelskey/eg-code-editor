import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { FabHelpButtonComponent } from './components/fab-help-button/fab-help-button.component';
import { InfoModalComponent } from './components/info-modal/info-modal.component';

interface Language {
  value: string;
  label: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CodeEditorComponent, FabHelpButtonComponent, InfoModalComponent],
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
  
  // Line numbers setting
  protected readonly showLineNumbers = signal<boolean>(true);

  // Info modal open state
  protected readonly showInfo = signal<boolean>(false);
  
  // Event handlers
  protected onLanguageChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedLanguage.set(target.value);
  }
  
  protected onCodeChange(newCode: string): void {
    this.codeContent.set(newCode);
  }
  
  protected onToggleLineNumbers(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.showLineNumbers.set(target.checked);
  }

  // Open the info modal
  protected openInfo(): void {
    this.showInfo.set(true);
  }

  // Close the info modal
  protected closeInfo(): void {
    this.showInfo.set(false);
  }
}
