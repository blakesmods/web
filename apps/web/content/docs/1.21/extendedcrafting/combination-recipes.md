---
id: combination-recipes 
title: Combination Recipes 
category: Extended Crafting
---

Extended Crafting allows you to easily add your own Combination Crafting recipes using both Datapacks and CraftTweaker.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in a Combination Crafting recipe. Syntax can be inferred from the example JSON below.

| Field         | Required | Description                                                                         |
|---------------|----------|-------------------------------------------------------------------------------------|
| `type`        | ✓        | The recipe type must be `extendedcrafting:combination`.                             |
| `power_cost`  | ✓        | The amount of power required to craft this recipe.                                  |
| `power_rate`  |          | The amount of power consumed per tick. If omitted will default to the config value. |
| `input`       | ✓        | The item that will be placed on the Crafting Core.                                  |
| `ingredients` | ✓        | An array of 1-48 items that will be placed on the Pedestals.                        |
| `result`      | ✓        | The item that this recipe will output once finished.                                |

::alert{title="Note" icon="i-heroicons-information-circle-solid"}
The amount of time (in ticks) a Combination recipe takes to complete is power_cost / power_rate.
::

### Example File

```json
{
  "type": "extendedcrafting:combination",
  "power_cost": 400000,
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
    "id": "minecraft:stone"
  }
}
```

## CraftTweaker

Extended Crafting comes with CraftTweaker support built-in. You can make use of CraftTweaker to easily manage Combination Crafting recipes.

::alert{title="Recipe Manager Support" icon="i-heroicons-information-circle-solid"}
CraftTweaker integration supports <a href="https://docs.blamejared.com/1.21.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers</a>! Access all applicable methods using **\<recipetype:extendedcrafting:combination\>**!
::

### Adding A Recipe

```zenscript
<recipetype:extendedcrafting:combination>.addRecipe(name, <output>, <input>, [<inputs>], power_cost);
<recipetype:extendedcrafting:combination>.addRecipe(name, <output>, <input>, [<inputs>], power_cost, power_rate);
```

| Field        | Required | Description                                                                                                                                                                                 |
|--------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`       | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                                                                                   |
| `output`     | ✓        | The output item for this recipe.                                                                                                                                                            |
| `input`      | ✓        | The input item. This is placed on the Crafting Core.                                                                                                                                        |
| `inputs`     | ✓        | An array of 1-48 items. These items are placed on the pedestals.                                                                                                                            |
| `power_cost` | ✓        | The amount of FE required to craft this recipe.                                                                                                                                             |
| `power_rate` |          | The rate the recipe should consume FE. powerCost / powerRate = the number of ticks required to craft the recipe. If this isn't defined it will use the default value defined in the config. |

::alert{title="Note" icon="i-heroicons-information-circle-solid"}
The amount of time (in ticks) a combination recipe takes to complete is power_cost / power_rate.
::

#### Example

```zenscript
<recipetype:extendedcrafting:combination>.addRecipe("test", <item:minecraft:stick> * 10, <item:minecraft:diamond>, [<tag:item:c:ingots/iron>, <item:minecraft:stick>], 10000, 100);
```

### Removing Recipes

```zenscript
<recipetype:extendedcrafting:combination>.remove(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |
