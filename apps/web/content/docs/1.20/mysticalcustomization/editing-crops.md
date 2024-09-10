---
id: editing-crops
title: Editing Crops
category: Mystical Customization
---
Mystical Customization allows you easily edit registered crops.

## Editing A Crop

Crops are edited via a JSON file located in `/config/mysticalcustomization/` called `configure-crops.json`.

This file will contain an empty JSON object on first launch. You will use this as a crop ID -> crop changes map.

### Example Entry

```json
{
  "mysticalagriculture:iron": {
    "name": "Orange",
    "tier": "mysticalagriculture:5"
  }
}
```

## The configure-crops File

This section will go over the values available to use to edit crops. Syntax can be inferred from the example json below.

### Name

You can change the display name of a crop like so.
```json
{
  "name": "Test"
}
```

### Type

You can change the crop type of a crop using that type's ID. Learn more about types and how to add your own [here](adding-types.md).

```json
{
  "type": "mysticalagriculture:resource"
}
```

::callout{title="Note" icon="i-heroicons-information-circle-solid"}
In versions prior to 3.0.0, the crop type IDs did not contain mod IDs. So the above example would use `resource` instead.
::

::callout{title="Tip" icon="i-heroicons-light-bulb-solid"}
You can see all the registered types in-game with the `/mysticalcustomization types` command.
::

### Tier

You can change the tier of a crop using the tier's ID. Learn more about tiers and how to add your own [here](adding-tiers.md).
```json
{
  "tier": "mysticalagriculture:1"
}
```

::callout{title="Tip" icon="i-heroicons-light-bulb-solid"}
You can see all the registered tiers in-game with the `/mysticalcustomization tiers` command.
::

### Ingredient

You can change the crafting ingredient used to craft a crop's seed. This can be either an item or a tag, and uses the same syntax as a crafting recipe.
```json
{
  "ingredient": {
    "item": "minecraft:iron_ingot"
  }
}
```

### Crux

You can change the required crux block to this crop. A crux is a block that must be placed underneath the farmland for this crop to grow.

**2.1.7 or later:** you can remove the crux from a crop by setting the value to `null`.
```json
{
  "crux": "minecraft:cobblestone"
}
```

### Enabled

You can disable a crop if you want to hide it.
```json
{
  "enabled": false
}
```

### Glint
::u-badge{label="2.0.0+" color="green"}
::

You can enable the enchantment glint effect for this crop's items.
```json
{
  "glint": true
}
```

### Required Biomes
::u-badge{label="2.1.2+" color="green"}
::

You can specify required biomes for this crop to be able to grow in.
```json
{
  "biomes": [
    "minecraft:plains",
    "minecraft:desert"
  ]
}
```

### Base Secondary Drop Chance
::u-badge{label="3.0.1+" color="green"}
::

You can modify the base chance of a second seed/essence dropping from the crop when planted on a valid farmland. Can be any value from 0.0 to 1.0.
```json
{
  "baseSecondaryChance": 0.4
}
```

### Respects Effective Farmland
::u-badge{label="5.0.1+" color="green"}
::

You can disable the +10% additional secondary seed drop chance applied when planted on the `farmland` block set in the Crop Tier.
```json
{
  "respectsEffectiveFarmland": false
}
```

### Essence Item
::u-badge{label="3.1.1+" color="green"}
::

You can specify your own essence item. This is the item that will drop from the crop when harvested. 

```json
{
  "essence": "minecraft:apple"
}
```

::callout{title="Note" icon="i-heroicons-light-bulb-solid"}
Setting this value will **not** prevent the crop's current essence item from being registered.
::

### Recipe Config
::u-badge{label="3.1.2+" color="green"}
::

You can disable the auto-generated recipes for a crop.
```json5
{
  "recipes": {
    "crafting": false, // the vanilla 3x3 recipe (if enabled in the config)
    "infusion": false, // the infusion altar recipe for the seed
    "reprocessor": false // the default seed reprocessor recipe for the seed
  }
}
```

::callout{title="Note" icon="i-heroicons-light-bulb-solid"}
The auto-generated recipes for the Mystical Agriculture built-in crops are already disabled by default.
::

## Example File

```json
{
  "mysticalagriculture:iron": {
    "name": "Iron, but Modified",
    "tier": "mysticalcustomization:test",
    "type": "test",
    "ingredient": {
      "item": "minecraft:apple"
    },
    "crux": "minecraft:cobblestone"
  },
  "mysticalagriculture:stone": {
    "enabled": false
  }
}
```
