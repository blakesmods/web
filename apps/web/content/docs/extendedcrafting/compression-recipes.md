---
id: compression-recipes
title: Compression Recipes
category: Extended Crafting
---

Mystical Agriculture allows you easily add your own Compressor recipes. Here's how you do it.

## Datapacks
### Prerequisits
- Mystical Agriculture uses the vanilla datapack system for recipe customization. [(Learn More)](https://minecraft.gamepedia.com/Data_pack)
- Recipes are added using json files, similar to vanilla recipes. [(Learn More)](https://minecraft.gamepedia.com/Recipe)

### The Recipe File
This section will go over the values available to use in a Compressor recipe. Syntax can be inferred from the example json below.
- `type`: The recipe type must be `extendedcrafting:compressor`.
- `powerCost`: The amount of power required to create the result.
- `powerRate`: (**optional**) The amount of power consumed per tick while crafting. If omitted will default to the config value.
- `ingredient`: The input item.
- `inputCount`: The amount of the input item required.
- `catalyst`: The catalyst item. This item does not get consumed.
- `result`: The item that this recipe will output once finished.

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

Extended Crafting allows you easily add your own Compression Crafting recipes using CraftTweaker. Here's how you do it.

### Adding a recipe
```java
mods.extendedcrafting.CompressionCrafting.addRecipe(name, <input>, <output>, inputCount, <catalyst>, powerCost);    
mods.extendedcrafting.CompressionCrafting.addRecipe(name, <input>, <output>, inputCount, <catalyst>, powerCost, powerRate);
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `input`: The item that is required to make the output.
- `output`: The output item for this recipe.
- `inputCount`: The amount of the input item that is required.
- `catalyst`: The item that is required as a catalyst. This does not get consumed and goes in the small slot to the left.
- `powerCost`: The amount of FE required to complete the crafting stage of compression.
- `powerRate`: (**optional**) The rate the recipe should consume FE during the crafting stage. powerCost / powerRate = the amount of ticks required in the crafting stage. If this parameter isn't added, it will use the default rate defined in the config file.

#### Example
```java
mods.extendedcrafting.CompressionCrafting.addRecipe("test", <tag:forge:ingots/iron>, <item:minecraft:apple>, 50000, <tag:forge:ingots/gold>, 2000000, 200);
```

### Removing recipes
```java
mods.extendedcrafting.CompressionCrafting.remove(<output>);
```

- `output`: The item to remove all recipes for.
