---
id: combination-recipes 
title: Combination Recipes 
category: Extended Crafting
---

Extended Crafting allows you easily add your own Combination Crafting recipes using both Datapacks and CraftTweaker.

## Datapacks

::callout{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in a Combination Crafting recipe. Syntax can be inferred from the example json below.

| Field         | Required | Description                                                                         |
|---------------|----------|-------------------------------------------------------------------------------------|
| `type`        | ✓        | The recipe type must be `extendedcrafting:combination`.                             |
| `powerCost`   | ✓        | The amount of power required to craft this recipe.                                  |
| `powerRate`   |          | The amount of power consumed per tick. If omitted will default to the config value. |
| `input`       | ✓        | The item that will be placed on the Crafting Core.                                  |
| `ingredients` | ✓        | An array of 1-48 items that will be placed on the Pedestals.                        |
| `result`      | ✓        | The item that this recipe will output once finished.                                |

::callout{title="Note" icon="i-heroicons-information-circle-solid"}
The amount of time (in ticks) a combination recipe takes to complete is powerCost / powerRate.
::

### Example file

```json
{
  "type": "extendedcrafting:combination",
  "powerCost": 400000,
  "input": {
    "item": "minecraft:iron_ingot"
  },
  "ingredients": [
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:potato"
    }
  ],
  "result": {
    "item": "minecraft:stone"
  }
}
```

## CraftTweaker

Extended Crafting comes with CraftTweaker support built-in. You can make use of CraftTweaker to easily manage Combination Crafting recipes.

::callout{title="Recipe Manager Support" icon="i-heroicons-information-circle-solid"}
As of version **6.0.3**, CraftTweaker integration now supports <a href="https://docs.blamejared.com/1.20.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers</a>! Access all applicable methods using **\<recipetype:extendedcrafting:combination\>**!
::

### Adding A Recipe

```java
mods.extendedcrafting.CombinationCrafting.addRecipe(name, <output>, powerCost, [inputs]);
mods.extendedcrafting.CombinationCrafting.addRecipe(name, <output>, powerCost, [inputs], powerRate);
```

| Field       | Required | Description                                                                                                                                                                                 |
|-------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`      | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                                                                                   |
| `output`    | ✓        | The output item for this recipe.                                                                                                                                                            |
| `powerCost` | ✓        | The amount of FE required to craft this recipe.                                                                                                                                             |
| `inputs`    | ✓        | An array of 1-49 items. The first item is the item that goes on the Crafting Core, and the rest go on the pedestals.                                                                        |
| `powerRate` |          | The rate the recipe should consume FE. powerCost / powerRate = the number of ticks required to craft the recipe. If this isn't defined it will use the default value defined in the config. |

#### Example

```java
mods.extendedcrafting.CombinationCrafting.addRecipe("test", <item:minecraft:stick> * 10, 10000, [<item:minecraft:diamond>, <tag:forge:ingots/iron>, <item:minecraft:stick>], 100);
```

### Removing Recipes

```java
mods.extendedcrafting.CombinationCrafting.remove(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |
