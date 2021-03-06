import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { Alt } from "./Alt";
import { Core } from "./Core";
import { Enactment } from "./Enactment";
import { HTMLattrs } from "./HTMLattrs";
import { Idopt } from "./Idopt";
import { Refers } from "./Refers";
import { Xmllang } from "./Xmllang";

/**
 * This is the list of the core attributes that all elements in the content part of the document
 * must have. In elements using this attribute definition both the refersTo attribute and the
 * eId attribute are optional
 */
export class Coreopt extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    ...(new Core()).items,
    ...(new HTMLattrs()).items,
    ...(new Enactment()).items,
    ...(new Idopt()).items,
    ...(new Refers()).items,
    ...(new Xmllang()).items,
    ...(new Alt()).items,
  ];
}
