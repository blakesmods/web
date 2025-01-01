---
id: adding-crops
title: Adding Crops
category: Mystical Customization
---

Mystical Customization allows you easily add your own crops.

## Adding A Crop

Crops are added via JSON files placed in `/config/mysticalcustomization/crops/`. Each file represents a new crop to be added.

::callout{title="Important" icon="i-heroicons-information-circle-solid"}
The name of the file is used as the crop's ID. The ID **must** be all lowercase with underscores '_' in place of spaces. 
::

## The Crop File

This section will go over the values available to use in crop file. Syntax can be inferred from the example JSON below.

### Name

You can manually define the display name for this crop. Omitting this field will auto generate a translation key with the format `crop.mysticalcustomization.{id}`.
```json
{
  "name": "Test"
}
```

### Type

::u-badge{label="Required"}
::

You must assign this crop to a type, using that type's ID. Learn more about types and how to add your own [here](adding-types.md).

```json
{
  "type": "mysticalagriculture:resource"
}
```

::callout{title="Tip" icon="i-heroicons-light-bulb-solid"}
You can see all the registered types in-game with the `/mysticalcustomization types` command.
::

### Tier

::u-badge{label="Required"}
::

You must assign this crop to a tier, using the tier's ID. Learn more about tiers and how to add your own [here](adding-tiers.md).
```json
{
  "tier": "mysticalagriculture:1"
}
```

::callout{title="Tip" icon="i-heroicons-light-bulb-solid"}
You can see all the registered tiers in-game with the `/mysticalcustomization tiers` command.
::

### Ingredient

You can assign the crafting ingredient used to craft this crop's seed. This can be either an item or a tag, and uses the same syntax as a crafting recipe.
```json
{
  "ingredient": {
    "item": "minecraft:iron_ingot"
  }
}
```

### Colors

You should set a color for the crop, essence and seeds. Colors are set using HEX values.
```json
{
  "colors": {
    "flower": "aaaaaa",
    "essence": "bbbbbb",
    "seeds": "cccccc"
  }
}
```

If you want to use the same color for all 3, you can use this syntax instead.
```json
{
  "color": "aaaaaa"
}
```

### Textures

You should set the textures you want to use for your crop, essence and seeds.
```json
{
  "textures": {
    "flower": "mysticalagriculture:block/flower_dust",
    "essence": "mysticalagriculture:block/essence_dust",
    "seeds": "mysticalagriculture:item/mystical_seeds"
  }
}
```

#### Built In Flower Textures
- `mysticalagriculture:block/flower_ingot`
- `mysticalagriculture:block/flower_rock`
- `mysticalagriculture:block/flower_dust`
- `mysticalagriculture:block/flower_face`

#### Built In Essence Textures
- `mysticalagriculture:item/essence_ingot`
- `mysticalagriculture:item/essence_rock`
- `mysticalagriculture:item/essence_dust`
- `mysticalagriculture:item/essence_gem`
- `mysticalagriculture:item/essence_tall_gem`
- `mysticalagriculture:item/essence_diamond`
- `mysticalagriculture:item/essence_quartz`
- `mysticalagriculture:item/essence_flame`

#### Built In Seed Textures
- `mysticalagriculture:item/mystical_seeds`

Omitting this field (or any sub-field) will automatically assign to the Ingot textures. For the seed it will just be the regular seed texture.

### Crux

You can add a required crux block to this crop. A crux is a block that must be placed underneath the farmland for this crop to grow.
```json
{
  "crux": "minecraft:cobblestone"
}
```

### Enabled

You can disable this crop during the creation process if you really want to I guess.
```json
{
  "enabled": false
}
```

### Glint

You can enable the enchantment glint effect for this crop's items.
```json
{
  "glint": true
}
```

### Required Biomes

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

You can modify the base chance of a second seed/essence dropping from the crop when planted on a valid farmland. Can be any value from 0.0 to 1.0.
```json
{
  "baseSecondaryChance": 0.4
}
```

### Essence Item

You can specify your own essence item. This is the item that will drop from the crop when harvested.

```json
{
  "essence": "minecraft:apple"
}
```

::callout{title="Note" icon="i-heroicons-information-circle-solid"}
Setting this value will prevent the default essence item from being registered. If you still want that item to be registered, you can set this value in the `configure-crops.json` file instead.
::

### Recipe Config

You can optionally disable the auto-generated recipes for your crops if you plan on adding your own instead.
```json5
{
  "recipes": {
    "crafting": false, // the vanilla 3x3 recipe (if enabled in the config)
    "infusion": false, // the infusion altar recipe for the seed
    "reprocessor": false // the default seed reprocessor recipe for the seed
  }
}
```

## Example File

```json
{
  "name": "Test",
  "type": "resource",
  "tier": "mysticalagriculture:1",
  "ingredient": {
    "item": "minecraft:iron_ingot"
  },
  "color": "eb7a34",
  "textures": {
    "flower": "mysticalagriculture:block/flower_dust",
    "essence": "mysticalagriculture:item/essence_dust"
  },
  "crux": "minecraft:cobblestone"
}
```
