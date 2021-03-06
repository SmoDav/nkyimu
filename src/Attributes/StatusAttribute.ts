import { AbstractAttribute } from "../Abstracts/AbstractAttribute";
import { StatusType } from "../SimpleTypes/StatusType";

export class StatusAttribute extends AbstractAttribute {

  static getClassName(): string { return 'StatusAttribute'; }

  get className(): string { return 'StatusAttribute'; }

  /**
   * The name of the attribute.
   */
  readonly name: string = 'status';

  static getName() { return 'status'; }

  /**
   * The default value of the attribute.
   */
  readonly defaultValue: string = '';

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: string): boolean {
    return (new StatusType()).validate(value, 'status');
  }
}