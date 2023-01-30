---
id: ender-crafting-recipes
title: Ender Recipes
category: Extended Crafting
---

Extended Crafting allows you easily add your own Ender Crafting recipes. Here's how you do it.

## Datapacks
### Prerequisits
- Extended Crafting uses the vanilla datapack system for recipe customization. [(Learn More)](https://minecraft.gamepedia.com/Data_pack)
- Recipes are added using json files, similar to vanilla recipes. [(Learn More)](https://minecraft.gamepedia.com/Recipe)

### The Recipe File
This section will go over the values available to use in a Ender Crafting recipe. Syntax can be inferred from the example jsons below.
#### Shaped
- `type`: The recipe type must be `extendedcrafting:shaped_ender_crafter`.
- `craftingTime`: (**optional**) The amount of time (in seconds) this recipe should take.
- `pattern`: The recipe pattern.
- `key`: The recipe key, for specifying which item each character represents.
- `result`: The item that this recipe will output once finished.

#### Shapeless
- `type`: The recipe type must be `extendedcrafting:shapeless_ender_crafter`.
- `craftingTime`: (**optional**) The amount of time (in seconds) this recipe should take.
- `ingredients`: An array of 1-9 input items.
- `result`: The item that this recipe will output once finished.

**Note**: `craftingTime` refers to the amount of time in seconds that the recipe should take with a single alternator. Adding more alternators will make the crafting operation faster.

### Example Files
#### Shaped
```json
{
  "type": "extendedcrafting:shaped_ender_crafter",
  "pattern": [
    "XXX",
    "X X",
    "XXX"
  ],
  "key": {
    "X": {
      "tag": "forge:ingots/gold"
    }
  },
  "result": {
    "item": "minecraft:apple"
  }
}
```

#### Shapeless
```json
{
  "type": "extendedcrafting:shapeless_ender_crafter",
  "ingredients": [
    {
      "item": "minecraft:coal"
    },
    {
      "item": "minecraft:coal"
    }
  ],
  "result": {
    "item": "minecraft:apple"
  }
}
```

Extended Crafting allows you easily add your own Ender Crafting recipes using CraftTweaker. Here's how you do it.

### Adding A Shaped Recipe
```java
mods.extendedcrafting.EnderCrafting.addShaped(name, <output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]], seconds);  
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `output`: The output item for this recipe.
- `<>`: An input ingredient for the slot shown.
- `seconds`: (**optional**) The amount of seconds this recipe should take. If this parameter isn't added, it will use the default rate defined in the config file.

The input arrays work in the same way as the normal crafting recipes, check out the CraftTweaker wiki for more information.

#### Example
```java
mods.extendedcrafting.EnderCrafting.addShapeless("test_shapeless", <item:minecraft:cobblestone>, [
  <tag:forge:gems/diamond>, <tag:forge:gems/diamond>, <tag:forge:gems/diamond>, <tag:forge:gems/diamond>, <tag:forge:gems/diamond>, <tag:forge:gems/diamond>
]);
```

## CraftTweaker
### Adding A Shapeless Recipe
```java
mods.extendedcrafting.EnderCrafting.addShapeless(name, <output>, [inputs], seconds); 
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `output`: The output item for this recipe.
- `inputs`: An array of 1-9 items required to make the recipe.
- `seconds`: (**optional**) The amount of seconds this recipe should take. If this parameter isn't added, it will use the default rate defined in the config file.

#### Example
```java
mods.extendedcrafting.EnderCrafting.addShaped("test_shaped", <item:minecraft:stick>, [
  [<tag:forge:ingots/iron>, <item:minecraft:air>, <item:minecraft:air>], 
  [<tag:forge:ingots/gold>, <tag:forge:ingots/gold>, <item:minecraft:air>], 
  [<tag:forge:ingots/gold>, <item:minecraft:air>, <item:minecraft:air>]
], 500);
```

### Removing Recipes
```java
mods.extendedcrafting.EnderCrafting.remove(<output>);
```

- `output`: The item to all remove recipes for.
