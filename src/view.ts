import * as readline from 'readline';
import { isMatch } from './model';

export default class View {
  private readline: readline.Interface;

  constructor() {
    this.readline = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async getInput(prompt: string): Promise<string> {
    return new Promise((resolve) => {
      this.readline.question(prompt, (input) => {
        resolve(input);
      });
    });
  }

  printResult(result: boolean): void {
    console.log(`Result: ${result}`);
  }

  async run(): Promise<void> {
    const s = await this.getInput("Enter s: ");
    const p = await this.getInput("Enter p: ");
    const result = isMatch(s, p);
    this.printResult(result);
    this.readline.close();
  }
}
