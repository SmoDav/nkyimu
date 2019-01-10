import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Prefaceopt } from '../../ComplexTypes/Prefaceopt';

const type = new Prefaceopt();
/**
 * The element preface is used as a container of all prefacing
 * material (e.g. headers, formulas, etc.)
 */
export class Preface extends AbstractNode {
  public abbreviation = 'preface';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'preface';
  }
}
