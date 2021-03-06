import { Coreopt } from "../AttributeGroups/Coreopt";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { BlockElements } from "../ElementGroups/BlockElements";
import { PreambleContainers } from "../ElementGroups/PreambleContainers";

/**
 * The complex type preambleopt defines the content model and
 * attributes used by preambles. Here the eId attribute is optional.
 */
export class Preambleopt implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    preOptsChoice: {
      choice: true,
      minOccur: 1,
      options: {
        preOptsChoiceBlkElGrp: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new BlockElements()).CHILDREN_MAP,
          }
        },
        preOptsChoicePreContGrp: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new PreambleContainers()).CHILDREN_MAP,
          }
        }
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Coreopt()).items,
  ];
}