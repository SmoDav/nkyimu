import { AbstractAttribute } from "../Abstract/AbstractAttribute";
import { EIdRef } from "../SimpleTypes/EIdRef";

export class FromAttribute extends AbstractAttribute {
  /**
   * The name of the attribute.
   */
  readonly name: string = 'from';

  /**
   * The default value of the attribute.
   */
  readonly defaultValue = '';

  /**
   * Validate that the attributes are correct.
   *
   * @param value string
   *
   * @returns boolean
   */
  validate(value: string): boolean {
    return (new EIdRef()).validate(value, 'from');
  }
}