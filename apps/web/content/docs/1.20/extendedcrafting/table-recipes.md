---
id: table-recipes
title: Table Recipes
category: Extended Crafting
---

Extended Crafting allows you easily add your own Extended Crafting Table recipes using both Datapacks and CraftTweaker.

## Datapacks

::callout{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in a Table Crafting recipe. Syntax can be inferred from the example jsons below.

#### Shaped

| Field     | Required | Description                                                                                                        |
|-----------|----------|--------------------------------------------------------------------------------------------------------------------|
| `type`    | ✓        | The recipe type must be `extendedcrafting:shaped_table`.                                                           |
| `tier`    |          | The tier of table required for this recipe. If omitted the recipe will work for all tables with enough grid space. |
| `pattern` | ✓        | The recipe pattern.                                                                                                |
| `key`     | ✓        | The recipe key, for specifying which item each character represents.                                               |
| `result`  | ✓        | The item that this recipe will output when crafted.                                                                |

#### Shapeless

| Field         | Required | Description                                                                                                        |
|---------------|----------|--------------------------------------------------------------------------------------------------------------------|
| `type`        | ✓        | The recipe type must be `extendedcrafting:shapeless_table`.                                                        |
| `tier`        |          | The tier of table required for this recipe. If omitted the recipe will work for all tables with enough grid space. |
| `ingredients` | ✓        | An array of 1-81 input items.                                                                                      |
| `result`      | ✓        | The item that this recipe will output when crafted.                                                                |

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

Extended Crafting comes with CraftTweaker support built-in. You can make use of CraftTweaker to easily manage Table Crafting recipes.

::callout{title="Recipe Manager Support" icon="i-heroicons-information-circle-solid"}
CraftTweaker integration now supports <a href="https://docs.blamejared.com/1.20.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers</a>! Access all applicable methods using **\<recipetype:extendedcrafting:table\>**!
::

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

| Field    | Required | Description                                                                                                                                                           |
|----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`   | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                                                             |
| `tier`   |          | The required crafting table tier. The tiers are 1-4, or 0 for any that are big enough. Not adding this parameter will make the tier 0.                                |
| `output` | ✓        | The output item of this recipe.                                                                                                                                       |
| `<>`     | ✓        | An input ingredient for the slot shown. These input arrays work in the same way as the normal crafting recipes, check out the CraftTweaker wiki for more information. |

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

| Field    | Required | Description                                                                                                                            |
|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| `name`   | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                              |
| `tier`   |          | The required crafting table tier. The tiers are 1-4, or 0 for any that are big enough. Not adding this parameter will make the tier 0. |
| `output` | ✓        | The output item of this recipe.                                                                                                        |
| `input`  | ✓        | An array of 1-81 items required to make the recipe.                                                                                    |

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

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |
