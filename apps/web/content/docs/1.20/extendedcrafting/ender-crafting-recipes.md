---
id: ender-crafting-recipes
title: Ender Recipes
category: Extended Crafting
---

Extended Crafting allows you easily add your own Ender Crafting recipes using both Datapacks and CraftTweaker.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in an Ender Crafting recipe. Syntax can be inferred from the example JSONs below.

#### Shaped

| Field          | Required | Description                                                                       |
|----------------|----------|-----------------------------------------------------------------------------------|
| `type`         | ✓        | The recipe type must be `extendedcrafting:shaped_ender_crafter`.                  |
| `craftingTime` |          | The amount of time (in seconds) this recipe should take with a single Alternator. |
| `pattern`      | ✓        | The recipe pattern.                                                               |
| `key`          | ✓        | The recipe key, for specifying which item each character represents.              |
| `result`       | ✓        | The item that this recipe will output once finished                               |

#### Shapeless

| Field          | Required | Description                                                                       |
|----------------|----------|-----------------------------------------------------------------------------------|
| `type`         | ✓        | The recipe type must be `extendedcrafting:shapeless_ender_crafter`.               |
| `craftingTime` |          | The amount of time (in seconds) this recipe should take with a single Alternator. |
| `ingredients`  | ✓        | An array of 1-9 input items.                                                      |
| `result`       | ✓        | The item that this recipe will output once finished.                              |

::alert{title="Note" icon="i-heroicons-information-circle-solid"}
Crafting Time will decrease depending on how many Alternators are in range. See the config settings for more information.
::

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

Extended Crafting comes with CraftTweaker support built-in. You can make use of CraftTweaker to easily manage Ender Crafting recipes.

::alert{title="Recipe Manager Support" icon="i-heroicons-information-circle-solid"}
CraftTweaker integration now supports <a href="https://docs.blamejared.com/1.20.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers</a>! Access all applicable methods using **\<recipetype:extendedcrafting:ender_crafter\>**!
::

### Adding A Shaped Recipe

```java
mods.extendedcrafting.EnderCrafting.addShaped(name, <output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]], seconds);  
```

| Field     | Required | Description                                                                                                                                                           |
|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`    | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                                                             |
| `output`  | ✓        | The output item for this recipe.                                                                                                                                      |
| `<>`      | ✓        | An input ingredient for the slot shown. These input arrays work in the same way as the normal crafting recipes, check out the CraftTweaker wiki for more information. |
| `seconds` |          | The amount of seconds this recipe should take with a single Alternator. If this parameter isn't added, it will use the default rate defined in the config file.       |

::alert{title="Note" icon="i-heroicons-information-circle-solid"}
Crafting Time will decrease depending on how many Alternators are in range. See the config settings for more information.
::

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

| Field     | Required | Description                                                                                                                                                     |
|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`    | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                                                       |
| `output`  | ✓        | The output item for this recipe.                                                                                                                                |
| `inputs`  | ✓        | An array of 1-9 items required to make the recipe.                                                                                                              |
| `seconds` |          | The amount of seconds this recipe should take with a single Alternator. If this parameter isn't added, it will use the default rate defined in the config file. |

::alert{title="Note" icon="i-heroicons-information-circle-solid"}
Crafting Time will decrease depending on how many Alternators are in range. See the config settings for more information.
::

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
| `output` | ✓        | The item to remove all recipes for. |
