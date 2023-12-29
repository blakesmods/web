---
id: ender-crafting-recipes
title: Ender Recipes
category: Extended Crafting
---

Extended Crafting allows you easily add your own Ender Crafting recipes. Here's how you do it.

## Datapacks

<alert title="Prerequisites">
  <ul>
    <li>
      You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack">here</a>.
    </li>
    <li>
      You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe">here</a>.
    </li>
  </ul>
</alert>

### The Recipe File
This section will go over the values available to use in an Ender Crafting recipe. Syntax can be inferred from the example jsons below.

#### Shaped
| Field          | Required | Description                                                          |
|----------------|----------|----------------------------------------------------------------------|
| `type`         | ✓        | The recipe type must be `extendedcrafting:shaped_ender_crafter`.     |
| `craftingTime` |          | The amount of time (in seconds) this recipe should take.             |
| `pattern`      | ✓        | The recipe pattern.                                                  |
| `key`          | ✓        | The recipe key, for specifying which item each character represents. |
| `result`       | ✓        | The item that this recipe will output once finished                  |

#### Shapeless
| Field          | Required | Description                                                         |
|----------------|----------|---------------------------------------------------------------------|
| `type`         | ✓        | The recipe type must be `extendedcrafting:shapeless_ender_crafter`. |
| `craftingTime` |          | The amount of time (in seconds) this recipe should take.            |
| `ingredients`  | ✓        | An array of 1-9 input items.                                        |
| `result`       | ✓        | The item that this recipe will output once finished.                |

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

## CraftTweaker

Extended Crafting allows you easily add your own Ender Crafting recipes using CraftTweaker. Here's how you do it.

::alert{title="Recipe Manager"}
As of version **6.0.3**, CraftTweaker integration now supports <a href="https://docs.blamejared.com/1.20.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers!</a> Access all applicable methods using **\<recipetype:extendedcrafting:ender_crafter\>**!
::

### Adding A Shaped Recipe
```java
mods.extendedcrafting.EnderCrafting.addShaped(name, <output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]], seconds);  
```

| Field     | Required | Description                                                                                                                            |
|-----------|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| `name`    | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                              |
| `output`  | ✓        | The output item for this recipe.                                                                                                       |
| `<>`      | ✓        | An input ingredient for the slot shown.                                                                                                |
| `seconds` |          | The amount of seconds this recipe should take. If this parameter isn't added, it will use the default rate defined in the config file. |

The input arrays work in the same way as the normal crafting recipes, check out the CraftTweaker wiki for more information.

#### Example
```java
mods.extendedcrafting.EnderCrafting.addShaped("test_shaped", <item:minecraft:stick>, [
  [<tag:items:forge:ingots/iron>, <item:minecraft:air>, <item:minecraft:air>], 
  [<tag:items:forge:ingots/gold>, <tag:items:forge:ingots/gold>, <item:minecraft:air>], 
  [<tag:items:forge:ingots/gold>, <item:minecraft:air>, <item:minecraft:air>]
], 500);
```

### Adding A Shapeless Recipe
```java
mods.extendedcrafting.EnderCrafting.addShapeless(name, <output>, [inputs], seconds); 
```

| Field     | Required | Description                                                                                                                            |
|-----------|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| `name`    | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                              |
| `output`  | ✓        | The output item for this recipe.                                                                                                       |
| `inputs`  | ✓        | An array of 1-9 items required to make the recipe.                                                                                     |
| `seconds` |          | The amount of seconds this recipe should take. If this parameter isn't added, it will use the default rate defined in the config file. |

#### Example
```java
mods.extendedcrafting.EnderCrafting.addShapeless("test_shapeless", <item:minecraft:cobblestone>, [
  <tag:items:forge:gems/diamond>, <tag:items:forge:gems/diamond>, <tag:items:forge:gems/diamond>, <tag:items:forge:gems/diamond>, <tag:items:forge:gems/diamond>, <tag:items:forge:gems/diamond>
], 30);
```

### Removing Recipes
```java
mods.extendedcrafting.EnderCrafting.remove(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to all remove recipes for. |
