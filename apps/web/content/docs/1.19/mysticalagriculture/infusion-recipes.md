---
id: infusion-recipes
title: Infusion Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you easily add your own Infusion Crafting recipes using both Datapacks and CraftTweaker.

## Datapacks

::callout{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in an Infusion Crafting recipe. Syntax can be inferred from the example JSON below.

| Field          | Required | Description                                                                                                           |
|----------------|----------|-----------------------------------------------------------------------------------------------------------------------|
| `type`         | ✓        | The recipe type must be `mysticalagriculture:infusion`.                                                               |
| `input`        | ✓        | The item that will be placed on the Infusion Altar.                                                                   |
| `ingredients`  | ✓        | An array of 1-8 items that will be placed on the Infusion Pedestals.                                                  |
| `result`       | ✓        | The item that this recipe will output once finished.                                                                  |
| `transfer_nbt` |          | If the NBT data of the altar input item should be transferred to the result item. If omitted will default to `false`. |

### Example File

```json
{
  "type": "mysticalagriculture:infusion",
  "input": {
    "item": "minecraft:apple"
  },
  "ingredients": [
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "minecraft:carrot"
    }
  ],
  "result": {
    "item": "minecraft:potato"
  }
}
```

## CraftTweaker

Mystical Agriculture allows you easily add your own Infusion Crafting recipes using CraftTweaker.

### Adding A Recipe

```java
mods.mysticalagriculture.InfusionCrafting.addRecipe(name, <output>, [inputs], transferNBT);
```

| Field         | Required | Description                                                                                                           |
|---------------|----------|-----------------------------------------------------------------------------------------------------------------------|
| `name`        | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                             |
| `output`      | ✓        | The output item for this recipe.                                                                                      |
| `inputs`      | ✓        | An array of 1-9 items. The first item is the item that goes on the Infusion Altar, and the rest go on the pedestals.  |
| `transferNBT` |          | If the NBT data of the altar input item should be transferred to the result item. If omitted will default to `false`. |

#### Example

```java
mods.mysticalagriculture.InfusionCrafting.addRecipe("test", <item:minecraft:stick> * 10, [<item:minecraft:diamond>, <tag:forge:ingots/iron>, <item:minecraft:stick>]);
```

### Removing Recipes

```java
mods.mysticalagriculture.InfusionCrafting.remove(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |
