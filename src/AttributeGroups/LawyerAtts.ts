import { AbstractAttributeGroup } from "../Abstracts/AbstractAttributeGroup";
import { EmpoweredByAttribute } from "../Attributes/EmpoweredByAttribute";
import { ForTypeAgentRefAttribute } from "../Attributes/ForTypeAgentRefAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { Role } from "./Role";

/**
 * The attributes in lawyerAtts are used in the inline element lawyer to identify
 * representation aspects of lawyers. In particular, attribute 'as' identifies his/her
 * role, attribute 'for' identifies which party it represents, and attribute
 * 'empoweredBy' identifies another lawyer, if any, this lawyer received the power
 * delegation of power.
 */
export class LawyerAtts extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    ...(new Role()).items,
    { attribute: ForTypeAgentRefAttribute, required: false },
    { attribute: EmpoweredByAttribute, required: false },
  ];
}
