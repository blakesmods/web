---
id: soul-extraction-recipes
title: Soul Extraction Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you easily add your own Soul Extractor recipes. Here's how you do it.

## Datapacks
### Prerequisits
- Mystical Agriculture uses the vanilla datapack system for recipe customization. [(Learn More)](https://minecraft.gamepedia.com/Data_pack)
- Recipes are added using json files, similar to vanilla recipes. [(Learn More)](https://minecraft.gamepedia.com/Recipe)

### The Recipe File
This section will go over the values available to use in a Soul Extraction recipe. Syntax can be inferred from the example json below.
- `type`: The recipe type must be `mysticalagriculture:soul_extraction`.
- `input`: The item that will be placed in the input slot.
- `output`: The souls granted from this item.

### Example File
```json
{
  "type": "mysticalagriculture:soul_extraction",
  "input": {
    "item": "minecraft:blaze_rod"
  },
  "output": {
    "type": "mysticalagriculture:blaze",
    "souls": 0.5
  }
}
```

## CraftTweaker
As of version 4.2.0, Mystical Agriculture allows you easily add your own Soul Extraction recipes using CraftTweaker. Here's how you do it.

### Adding A Recipe
```java
mods.mysticalagriculture.SoulExtractorCrafting.addRecipe(name, <output>, <input>);
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `input`: The item that is required to make the output.
- `type`: The id of the resulting mob soul type.
- `souls`: The amount of the resulting mob soul type. 

#### Example
```java
mods.mysticalagriculture.SoulExtractorCrafting.addRecipe("test", <tag:forge:ingots/iron>, "mysticalagriculture:spider", 0.5);
```

### Removing Recipes
#### Remove By Item
```java
mods.mysticalagriculture.SoulExtractorCrafting.remove(<output>);
```

- `output`: The item to remove all recipes for.

#### Remove By Mob Soul Type
```java
mods.mysticalagriculture.SoulExtractorCrafting.remove("type");
```

- `type`: The mob soul type to remove all recipes for.
