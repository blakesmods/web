---
id: table-recipes
title: Table Recipes
category: Extended Crafting
---

Extended Crafting allows you easily add your own Extended Crafting Table recipes. Here's how you do it.
## Datapacks
### Prerequisits
- Extended Crafting uses the vanilla datapack system for recipe customization. [(Learn More)](https://minecraft.gamepedia.com/Data_pack)
- Recipes are added using json files, similar to vanilla recipes. [(Learn More)](https://minecraft.gamepedia.com/Recipe)

### The Recipe File
This section will go over the values available to use in a Ender Crafting recipe. Syntax can be inferred from the example jsons below.
#### Shaped
- `type`: The recipe type must be `extendedcrafting:shaped_table`.
- `tier`: The tier of table required for this recipe. If omitted the recipe will work for all tables with enough grid space.
- `pattern`: The recipe pattern.
- `key`: The recipe key, for specifying which item each character represents.
- `result`: The item that this recipe will output once finished.

#### Shapeless
- `type`: The recipe type must be `extendedcrafting:shapeless_table`.
- `tier`: The tier of table required for this recipe. If omitted the recipe will work for all tables with enough grid space.
- `ingredients`: An array of 1-81 input items.
- `result`: The item that this recipe will output once finished.

### Example Files
#### Shaped
#### Tier 1 (3x3)
```json
{
  "type": "extendedcrafting:shaped_table",
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
#### Tier 2 (5x5)
```json
{
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "XXXXX",
    "X   X",
    "X   X",
    "X   X",
    "XXXXX"
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
#### Tier 3 (7x7)
```json
{
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "XXXXXXX",
    "X     X",
    "X     X",
    "X     X",
    "X     X",
    "X     X",
    "XXXXXXX"
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
#### Tier 4 (9x9)
```json
{
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "XXXXXXXXX",
    "X       X",
    "X       X",
    "X       X",
    "X       X",
    "X       X",
    "X       X",
    "X       X",
    "XXXXXXXXX"
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
  "type": "extendedcrafting:shapeless_table",
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

## CraftTweaker

Extended Crafting allows you easily add your own Table Crafting recipes using CraftTweaker. Here's how you do it.

### Adding A Shaped Recipe
```java
mods.extendedcrafting.TableCrafting.addShaped(name, <output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(name, <output>, [[<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(name, <output>, [[<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(name, <output>, [[<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>]]);  

mods.extendedcrafting.TableCrafting.addShaped(name, tier, <output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(name, tier, <output>, [[<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(name, tier, <output>, [[<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>]]);  
mods.extendedcrafting.TableCrafting.addShaped(name, tier, <output>, [[<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>]]);
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `tier`: (**optional**) The required crafting table tier. The tiers are 1-4, or 0 for any that are big enough. Not adding this parameter will make the tier 0.
- `output`: The output item of this recipe.
- `<>`: An input ingredient for the slot shown

The input arrays work in the same way as the normal crafting recipes, check out the CraftTweaker wiki for more information.

#### Example
```java
mods.extendedcrafting.TableCrafting.addShaped("test_shaped", 2, <item:minecraft:stick>, [
  [<tag:forge:ingots/iron>, <item:minecraft:air>, <item:minecraft:air>], 
  [<tag:forge:ingots/gold>, <tag:forge:ingots/gold>, <item:minecraft:air>], 
  [<tag:forge:ingots/gold>, <item:minecraft:air>, <item:minecraft:air>]
]);
```

### Adding A Shapeless Recipe
```java
mods.extendedcrafting.TableCrafting.addShapeless(name, <output>, [<input>, <input>]); 
mods.extendedcrafting.TableCrafting.addShapeless(name, tier, <output>, [<input>, <input>]);  
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `tier`: (**optional**) The required crafting table tier. The tiers are 1-4, or 0 for any that are big enough. Not adding this parameter will make the tier 0
- `output`: The output item of this recipe.
- `input`: An array of 1-81 items required to make the recipe.

#### Example
```java
mods.extendedcrafting.TableCrafting.addShaped("test_shaped", 2, <item:minecraft:stick>, [
  <tag:forge:ingots/iron>, <tag:forge:ingots/iron>, <tag:forge:ingots/iron>, <tag:forge:ingots/iron>
]);
```

### Removing Recipes
```java
mods.extendedcrafting.TableCrafting.remove(<output>);
```

- `output`: The item to remove all recipes for.
