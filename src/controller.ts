import View from "./view";
import { isMatch } from "./model";

export default class Controller {
  private view: View;

  constructor(view: View) {
    this.view = view;
  }

  async start(): Promise<void> {
    await this.view.run();
  }

  async isMatch(s: string, p: string): Promise<boolean> {
    return isMatch(s, p);
  }

  async handleInput(): Promise<void> {
    const s = await this.view.getInput("Enter s: ");
    const p = await this.view.getInput("Enter p: ");
    const result = await this.isMatch(s, p);
    this.view.printResult(result);
  }
}
