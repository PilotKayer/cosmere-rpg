// Mixins
import { DataModelMixin } from '../mixins';
import { TypedItemMixin, TypedItemData } from './mixins/typed';
import { DescriptionItemMixin, DescriptionItemData } from './mixins/description';
import { EquippableItemMixin, EquippableItemData } from './mixins/equippable';
import { TraitsItemMixin, TraitsItemData } from './mixins/traits';
import { PhysicalItemMixin, PhysicalItemData } from './mixins/physical';

export interface ArmorItemData extends 
    TypedItemData, DescriptionItemData, EquippableItemData, 
    TraitsItemData, PhysicalItemData {
    deflect?: number;
}

export class ArmorItemDataModel extends DataModelMixin(
    TypedItemMixin(),
    DescriptionItemMixin(),
    EquippableItemMixin(),
    TraitsItemMixin(),
    PhysicalItemMixin()
) {
    static defineSchema() {
        return foundry.utils.mergeObject(super.defineSchema(), {
            deflect: new foundry.data.fields.NumberField({ min: 0 })
        });
    }
}