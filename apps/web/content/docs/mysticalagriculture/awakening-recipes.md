---
id: awakening-recipes
title: Awakening Recipes
category: Mystical Agriculture
---

Mystical Agriculture allows you easily add your own Awakening Crafting recipes. Here's how you do it.

## Datapacks
### Prerequisites
- Mystical Agriculture uses the vanilla datapack system for recipe customization. [(Learn More)](https://minecraft.gamepedia.com/Data_pack)
- Recipes are added using json files, similar to vanilla recipes. [(Learn More)](https://minecraft.gamepedia.com/Recipe)

### The Recipe File (v8.0.0+)
This section will go over the values available to use in an Awakening Crafting recipe. Syntax can be inferred from the example json below.
- `type`: The recipe type must be `mysticalagriculture:awakening`.
- `input`: The item that will be placed on the Awakening Altar.
- `essences`: An array of 1-4 items that will be placed in the Essence Vessels. 
- `ingredients`: An array of 1-4 items that will be placed on the Awakening Pedestals.
- `result`: The item that this recipe will output once finished.

### Example File (v8.0.0+)
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

### Essence Vessel Colors (v8.0.0+)
By default the 4 elemental essences have colors assigned. To set the colors for any additional items you plan on using, you can create a resource pack containing an `essence_vessel_colors.json` file.

This file is a single JSON object where the keys are the item IDs and the values are hex color codes. Below is the `essence_vessel_colors.json` included in the mod by default.
```json
{
  "mysticalagriculture:air_essence": "#DAD64D",
  "mysticalagriculture:earth_essence": "#54DA4D",
  "mysticalagriculture:water_essence": "#4D7EDA",
  "mysticalagriculture:fire_essence": "#DA4D4D"
}
```

### The Recipe File (v7.0.0+)
This section will go over the values available to use in an Awakening Crafting recipe. Syntax can be inferred from the example json below.
- `type`: The recipe type must be `mysticalagriculture:awakening`.
- `input`: The item that will be placed on the Awakening Altar.
- `essences`: An object containing the amount of Elemental Essences required in each Essence Vessel.
- `ingredients`: An array of 1-4 items that will be placed on the Awakening Pedestals.
- `result`: The item that this recipe will output once finished.

### Example File (v7.0.0+)
```json
{
  "type": "mysticalagriculture:awakening",
  "input": {
    "item": "minecraft:apple"
  },
  "essences": {
    "air": 40,
    "earth": 40,
    "water": 40,
    "fire": 40
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
    }
  ],
  "result": {
    "item": "minecraft:potato"
  }
}
```

## CraftTweaker
As of version 6.0.4, Mystical Agriculture allows you easily add your own Awakening Crafting recipes using CraftTweaker. Here's how you do it.

### Adding A Recipe
```java
mods.mysticalagriculture.AwakeningCrafting.addRecipe(name, <output>, [inputs], [essences]);
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `output`: The output item for this recipe.
- `inputs`: An array of 1-5 items. The first item is the item that goes on the Awakening Altar, and the rest go on the pedestals.
- `essences`: An array of 4 numbers representing the amount of each Elemental Essence is required. In order they are Earth, Air, Water then Fire.

#### Example
```java
mods.mysticalagriculture.AwakeningCrafting.addRecipe("test", <item:minecraft:stick> * 10, [<item:minecraft:diamond>, <tag:forge:ingots/iron>, <item:minecraft:stick>], [10, 20, 30, 40]);
```

### Removing Recipes
```java
mods.mysticalagriculture.AwakeningCrafting.remove(<output>);
```

- `output`: The item to remove all recipes for.
