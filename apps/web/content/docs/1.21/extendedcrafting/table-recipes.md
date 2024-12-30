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
      "tag": "c:ingots/gold"
    }
  },
  "result": {
    "id": "minecraft:apple"
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
      "tag": "c:ingots/gold"
    }
  },
  "result": {
    "id": "minecraft:apple"
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
      "tag": "c:ingots/gold"
    }
  },
  "result": {
    "id": "minecraft:apple"
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
      "tag": "c:ingots/gold"
    }
  },
  "result": {
    "id": "minecraft:apple"
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
    "id": "minecraft:apple"
  }
}
```

## CraftTweaker

Extended Crafting comes with CraftTweaker support built-in. You can make use of CraftTweaker to easily manage Table Crafting recipes.

::callout{title="Recipe Manager Support" icon="i-heroicons-information-circle-solid"}
CraftTweaker integration supports <a href="https://docs.blamejared.com/1.21.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers</a>! Access all applicable methods using **\<recipetype:extendedcrafting:table\>**!
::

### Adding A Shaped Recipe

```java
<recipetype:extendedcrafting:table>.addShaped(name, <output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]]);  
<recipetype:extendedcrafting:table>.addShaped(name, <output>, [[<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>]]);  
<recipetype:extendedcrafting:table>.addShaped(name, <output>, [[<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>]]);  
<recipetype:extendedcrafting:table>.addShaped(name, <output>, [[<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>]]);  

<recipetype:extendedcrafting:table>.addShaped(name, tier, <output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]]);  
<recipetype:extendedcrafting:table>.addShaped(name, tier, <output>, [[<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>], [<>, <>, <>, <>, <>]]);  
<recipetype:extendedcrafting:table>.addShaped(name, tier, <output>, [[<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>]]);  
<recipetype:extendedcrafting:table>.addShaped(name, tier, <output>, [[<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>], [<>, <>, <>, <>, <>, <>, <>, <>, <>]]);
```

| Field    | Required | Description                                                                                                                                                           |
|----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`   | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                                                             |
| `tier`   |          | The required crafting table tier. The tiers are 1-4, or 0 for any that are big enough. Not adding this parameter will make the tier 0.                                |
| `output` | ✓        | The output item of this recipe.                                                                                                                                       |
| `<>`     | ✓        | An input ingredient for the slot shown. These input arrays work in the same way as the normal crafting recipes, check out the CraftTweaker wiki for more information. |

#### Example

```java
<recipetype:extendedcrafting:table>.addShaped("test_shaped", 2, <item:minecraft:stick>, [
  [<tag:item:c:ingots/iron>, <item:minecraft:air>, <item:minecraft:air>], 
  [<tag:item:c:ingots/gold>, <tag:item:c:ingots/gold>, <item:minecraft:air>], 
  [<tag:item:c:ingots/gold>, <item:minecraft:air>, <item:minecraft:air>]
]);
```

### Adding A Shapeless Recipe

```java
<recipetype:extendedcrafting:table>.addShapeless(name, <output>, [<input>, <input>]); 
<recipetype:extendedcrafting:table>.addShapeless(name, tier, <output>, [<input>, <input>]);  
```

| Field    | Required | Description                                                                                                                            |
|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| `name`   | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                              |
| `tier`   |          | The required crafting table tier. The tiers are 1-4, or 0 for any that are big enough. Not adding this parameter will make the tier 0. |
| `output` | ✓        | The output item of this recipe.                                                                                                        |
| `input`  | ✓        | An array of 1-81 items required to make the recipe.                                                                                    |

#### Example

```java
<recipetype:extendedcrafting:table>.addShaped("test_shaped", 2, <item:minecraft:stick>, [
  <tag:item:c:ingots/iron>, <tag:item:c:ingots/iron>, <tag:item:c:ingots/iron>, <tag:item:c:ingots/iron>
]);
```

### Removing Recipes

```java
<recipetype:extendedcrafting:table>.remove(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |
