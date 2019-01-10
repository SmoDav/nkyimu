import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Role } from '../../AttributeGroups/Role';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inlinereqreq } from '../../ComplexTypes/Inlinereqreq';

const type = new Inlinereqreq();

/**
 * the element person is an inline element to identify a text
 * fragment introducing or referring to a person in the ontology.
 * Attribute as allows to specify a TLCrole the person is
 * holding in the context of the document's mention
 */
export class Person extends AbstractNode {
  public abbreviation = 'person';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Role()).items,
  ];

  public getNodeName(): string {
    return 'person';
  }
}
