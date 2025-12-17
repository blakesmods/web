---
id: compression-recipes
title: Compression Recipes
category: Extended Crafting
---

Extended Crafting allows you easily add your own Compressor recipes using CraftTweaker.

## CraftTweaker

Extended Crafting comes with CraftTweaker support built-in. You can make use of CraftTweaker to easily manage Compression Crafting recipes.

### Adding A Recipe

```zenscript
mods.extendedcrafting.CompressionCrafting.addRecipe(<output>, <input>, inputCount, <catalyst>, powerCost);    
mods.extendedcrafting.CompressionCrafting.addRecipe(<output>, <input>, inputCount, <catalyst>, powerCost, powerRate);
```

| Field        | Required | Description                                                                                                                                               |
|--------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
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
mods.extendedcrafting.CompressionCrafting.addRecipe(<minecraft:stick>, <minecraft:apple>, 50000, <minecraft:cobblestone>, 2000000, 200);
```

### Removing Recipes

```zenscript
mods.extendedcrafting.CompressionCrafting.remove(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |
