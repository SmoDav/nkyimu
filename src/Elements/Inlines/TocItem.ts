import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Level } from '../../AttributeGroups/Level';
import { Link } from '../../AttributeGroups/Link';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Inline } from '../../ComplexTypes/Inline';

const type = new Inline();

/**
 * The element tocItem is a component of the table of content
 * and contains header information about sections or parts of
 * the rest of the document
 */
export class TocItem extends AbstractNode {
  public abbreviation = 'tocitem';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Link()).items,
    ...(new Level()).items,
  ];

  public getNodeName(): string {
    return 'tocItem';
  }
}
