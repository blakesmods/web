---
id: awakening-recipes
title: Awakening Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you easily add your own Awakening recipes using both Datapacks and CraftTweaker.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in an Awakening recipe. Syntax can be inferred from the example json below.

| Field          | Required | Description                                                                                                           |
|----------------|----------|-----------------------------------------------------------------------------------------------------------------------|
| `type`         | ✓        | The recipe type must be `mysticalagriculture:awakening`.                                                              |
| `input`        | ✓        | The item that will be placed on the Awakening Altar.                                                                  |
| `essences`     | ✓        | An array of 1-4 items that will be placed in the Essence Vessels.                                                     |
| `ingredients`  | ✓        | An array of 1-4 items that will be placed on the Awakening Pedestals.                                                 |
| `result`       | ✓        | The item that this recipe will output once finished.                                                                  |
| `transfer_nbt` |          | If the NBT data of the altar input item should be transferred to the result item. If omitted will default to `false`. |

### Example File

```json
{
  "type": "mysticalagriculture:awakening",
  "input": {
    "item": "minecraft:apple"
  },
  "essences": [
    {
      "item": "mysticalagriculture:air_essence",
      "count": 40
    },
    {
      "item": "mysticalagriculture:earth_essence",
      "count": 40
    },
    {
      "item": "mysticalagriculture:water_essence",
      "count": 40
    },
    {
      "item": "mysticalagriculture:fire_essence",
      "count": 40
    }
  ],
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
    }
  ],
  "result": {
    "item": "minecraft:potato"
  }
}
```

### Essence Vessel Colors

By default, the 4 elemental essences have colors assigned. To set the colors for any additional items you plan on using, you can create a resource pack containing an `essence_vessel_colors.json` file.

This file is a single JSON object where the keys are the item IDs and the values are hex color codes. Below is the `essence_vessel_colors.json` included in the mod by default.
```json
{
  "mysticalagriculture:air_essence": "#DAD64D",
  "mysticalagriculture:earth_essence": "#54DA4D",
  "mysticalagriculture:water_essence": "#4D7EDA",
  "mysticalagriculture:fire_essence": "#DA4D4D"
}
```

## CraftTweaker

Mystical Agriculture allows you easily add your own Awakening Crafting recipes using CraftTweaker.

::alert{title="Recipe Manager Support" icon="i-heroicons-information-circle-solid"}
CraftTweaker integration now supports <a href="https://docs.blamejared.com/1.20.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers</a>! Access all applicable methods using **\<recipetype:mysticalagriculture:awakening\>**!
::

### Adding A Recipe

```java
mods.mysticalagriculture.AwakeningCrafting.addRecipe(name, <output>, [inputs], [essences], transferNBT);
```

| Field         | Required | Description                                                                                                                           |
|---------------|----------|---------------------------------------------------------------------------------------------------------------------------------------|
| `name`        | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                             |
| `output`      | ✓        | The output item for this recipe.                                                                                                      |
| `inputs`      | ✓        | An array of 1-5 items. The first item is the item that goes on the Awakening Altar, and the rest go on the pedestals.                 |
| `essences`    | ✓        | An array of 4 items. These are the items that go into the Essence Vessels. These items can have a max count of 40 and cannot be tags. |
| `transferNBT` |          | If the NBT data of the altar input item should be transferred to the result item. If omitted will default to `false`.                 |

#### Example

```java
mods.mysticalagriculture.AwakeningCrafting.addRecipe("test", <item:minecraft:stick> * 10,
  [<item:minecraft:diamond>, <tag:forge:ingots/iron>, <item:minecraft:stick>],
  [<item:mysticalagriculture:air_essence> * 10, <item:mysticalagriculture:earth_essence> * 20, <item:mysticalagriculture:water_essence> * 30, <item:mysticalagriculture:fire_essence> * 40]
);
```

### Removing Recipes

```java
mods.mysticalagriculture.AwakeningCrafting.remove(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |
