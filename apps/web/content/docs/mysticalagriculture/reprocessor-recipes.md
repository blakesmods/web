---
id: reprocessor-recipes
title: Reprocessor Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you easily add your own Seed Reprocessor recipes. Here's how you do it.

## Datapacks
### Prerequisits
- Mystical Agriculture uses the vanilla datapack system for recipe customization. [(Learn More)](https://minecraft.gamepedia.com/Data_pack)
- Recipes are added using json files, similar to vanilla recipes. [(Learn More)](https://minecraft.gamepedia.com/Recipe)

### The Recipe File
This section will go over the values available to use in a Seed Reprocessor recipe. Syntax can be inferred from the example json below.
- `type`: The recipe type must be `mysticalagriculture:reprocessor`.
- `input`: The item that will be placed in the input slot.
- `result`: The item that this recipe will output once finished.

### Example File
```json
{
  "type": "mysticalagriculture:reprocessor",
  "input": {
    "item": "minecraft:apple"
  },
  "result": {
    "item": "minecraft:potato"
  }
}
```

## CraftTweaker
As of version 3.0.8, Mystical Agriculture allows you easily add your own Reprocessor Crafting recipes using CraftTweaker. Here's how you do it.

### Adding a recipe
```java
mods.mysticalagriculture.ReprocessorCrafting.addRecipe(name, <output>, <input>);
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `output`: The output item for this recipe.
- `input`: The item that is required to make the output.

#### Example
```java
mods.mysticalagriculture.ReprocessorCrafting.addRecipe("test_reprocessor", <item:minecraft:apple>, <tag:items:forge:ingots/iron>);
```

### Removing Recipes
```java
mods.mysticalagriculture.ReprocessorCrafting.remove(<output>);
```

- `output`: The item to remove all recipes for.
