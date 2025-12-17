---
id: compression-recipes
title: Compression Recipes
category: Extended Crafting
---

Extended Crafting allows you easily add your own Compressor recipes using both Datapacks and CraftTweaker.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in a Compressor recipe. Syntax can be inferred from the example JSON below.

| Field        | Required | Description                                                                         |
|--------------|----------|-------------------------------------------------------------------------------------|
| `type`       | ✓        | The recipe type must be `extendedcrafting:compressor`.                              |
| `powerCost`  | ✓        | The amount of power required to craft this recipe.                                  |
| `powerRate`  |          | The amount of power consumed per tick. If omitted will default to the config value. |
| `ingredient` | ✓        | The input item.                                                                     |
| `inputCount` | ✓        | The amount of the input item required.                                              |
| `catalyst`   | ✓        | The catalyst item. This item does not get consumed.                                 |
| `result`     | ✓        | The item that this recipe will output once finished.                                |

::alert{title="Note" icon="i-heroicons-information-circle-solid"}
The amount of time (in ticks) a Compression recipe takes to complete is powerCost / powerRate.
::

### Example File

```json
{
  "type": "extendedcrafting:compressor",
  "powerCost": 500000,
  "inputCount": 10000,
  "ingredient": {
    "item": "minecraft:carrot"
  },
  "catalyst": {
    "item": "extendedcrafting:ender_catalyst"
  },
  "result": {
    "item": "minecraft:cobblestone"
  }
}
```

## CraftTweaker

Extended Crafting comes with CraftTweaker support built-in. You can make use of CraftTweaker to easily manage Compression Crafting recipes.

::alert{title="Recipe Manager Support" icon="i-heroicons-information-circle-solid"}
CraftTweaker integration now supports <a href="https://docs.blamejared.com/1.20.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers</a>! Access all applicable methods using **\<recipetype:extendedcrafting:compressor\>**!
::

### Adding A Recipe

```zenscript
mods.extendedcrafting.CompressionCrafting.addRecipe(name, <input>, <output>, inputCount, <catalyst>, powerCost);    
mods.extendedcrafting.CompressionCrafting.addRecipe(name, <input>, <output>, inputCount, <catalyst>, powerCost, powerRate);
```

| Field        | Required | Description                                                                                                                                               |
|--------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`       | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                                                 |
| `input`      | ✓        | The output item for this recipe.                                                                                                                          |
| `inputCount` | ✓        | The amount of the input item that is required.                                                                                                            |
| `catalyst`   | ✓        | The input item.                                                                                                                                           |
| `inputCount` | ✓        | The amount of the input item required.                                                                                                                    |
| `catalyst`   | ✓        | The item that is required as a catalyst. This does not get consumed and goes in the small slot to the left.                                               |
| `powerCost`  | ✓        | The amount of FE required to complete the crafting stage of compression.                                                                                  |
| `powerRate`  |          | The rate the recipe should consume FE during the crafting stage.  If this parameter isn't added, it will use the default rate defined in the config file. |

::alert{title="Note" icon="i-heroicons-information-circle-solid"}
The amount of time (in ticks) a Compression recipe takes to complete is powerCost / powerRate.
::

#### Example

```zenscript
mods.extendedcrafting.CompressionCrafting.addRecipe("test", <tag:forge:ingots/iron>, <item:minecraft:apple>, 50000, <tag:forge:ingots/gold>, 2000000, 200);
```

### Removing Recipes

```zenscript
mods.extendedcrafting.CompressionCrafting.remove(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |
