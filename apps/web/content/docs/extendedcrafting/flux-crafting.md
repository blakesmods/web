---
id: flux-crafting-recipes
title: Flux Recipes
category: Extended Crafting
---

Extended Crafting allows you easily add your own Flux Crafting recipes. Here's how you do it.

## Datapacks
### Prerequisits
- Extended Crafting uses the vanilla datapack system for recipe customization. [(Learn More)](https://minecraft.gamepedia.com/Data_pack)
- Recipes are added using json files, similar to vanilla recipes. [(Learn More)](https://minecraft.gamepedia.com/Recipe)

### The Recipe File
This section will go over the values available to use in a Ender Crafting recipe. Syntax can be inferred from the example jsons below.
#### Shaped
- `type`: The recipe type must be `extendedcrafting:shaped_flux_crafter`.
- `powerRequired`: The amount of FE this recipe needs per craft.
- `powerRate`: (**optional**) The amount of FE/t this recipe should take from each Flux Alternator. If omitted will use the default set in the config file.
- `pattern`: The recipe pattern.
- `key`: The recipe key, for specifying which item each character represents.
- `result`: The item that this recipe will output once finished.

#### Shapeless
- `type`: The recipe type must be `extendedcrafting:shapeless_flux_crafter`.
- `powerRequired`: The amount of FE this recipe needs per craft.
- `powerRate`: (**optional**) The amount of FE/t this recipe should take from each Flux Alternator. If omitted will use the default set in the config file.
- `ingredients`: An array of 1-9 input items.
- `result`: The item that this recipe will output once finished.

### Example Files
#### Shaped
```json
{
  "type": "extendedcrafting:shaped_flux_crafter",
  "powerRequired": 1000000,
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
  "type": "extendedcrafting:shapeless_flux_crafter",
  "powerRequired": 1000000,
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

Extended Crafting allows you easily add your own Ender Crafting recipes using CraftTweaker. Here's how you do it.

### Adding A Shaped Recipe
```java
mods.extendedcrafting.FluxCrafting.addShaped(name, <output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]], powerRequired, powerRate);  
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `output`: The output item for this recipe.
- `<>`: An input ingredient for the slot shown.
- `powerRequired`: The amount of FE this recipe needs per craft.
- `powerRate`: (**optional**) The amount of FE/t this recipe should take from each Flux Alternator. If omitted will use the default set in the config file.

The input arrays work in the same way as the normal crafting recipes, check out the CraftTweaker wiki for more information.

#### Example
```java
mods.extendedcrafting.FluxCrafting.addShapeless("test_shapeless", <item:minecraft:cobblestone>, [
  <tag:forge:gems/diamond>, <tag:forge:gems/diamond>, <tag:forge:gems/diamond>, <tag:forge:gems/diamond>, <tag:forge:gems/diamond>, <tag:forge:gems/diamond>
], 1000000);
```

### Adding A Shapeless Recipe
```java
mods.extendedcrafting.FluxCrafting.addShapeless(name, <output>, [inputs], powerRequired, powerRate); 
```

- `name`: A unique name for this recipe. Must be all lower case and have no spaces.
- `output`: The output item for this recipe.
- `inputs`: An array of 1-9 items required to make the recipe.
- `powerRequired`: The amount of FE this recipe needs per craft.
- `powerRate`: (**optional**) The amount of FE/t this recipe should take from each Flux Alternator. If omitted will use the default set in the config file.

#### Example
```java
mods.extendedcrafting.FluxCrafting.addShaped("test_shaped", <item:minecraft:stick>, [
  [<tag:forge:ingots/iron>, <item:minecraft:air>, <item:minecraft:air>], 
  [<tag:forge:ingots/gold>, <tag:forge:ingots/gold>, <item:minecraft:air>], 
  [<tag:forge:ingots/gold>, <item:minecraft:air>, <item:minecraft:air>]
], 1000000);
```

### Removing Recipes
```java
mods.extendedcrafting.FluxCrafting.remove(<output>);
```

- `output`: The item to all remove recipes for.
