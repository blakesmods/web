---
id: compression-recipes
title: Compression Recipes
category: Extended Crafting
---

Extended Crafting allows you easily add your own Compressor recipes using both Datapacks and CraftTweaker.

## Datapacks

::callout{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in a Compressor recipe. Syntax can be inferred from the example JSON below.

| Field        | Required | Description                                                                         |
|--------------|----------|-------------------------------------------------------------------------------------|
| `type`       | ✓        | The recipe type must be `extendedcrafting:compressor`.                              |
| `power_cost` | ✓        | The amount of power required to craft this recipe.                                  |
| `power_rate` |          | The amount of power consumed per tick. If omitted will default to the config value. |
| `ingredient` | ✓        | The input item and count.                                                           |
| `catalyst`   | ✓        | The catalyst item. This item does not get consumed.                                 |
| `result`     | ✓        | The item that this recipe will output once finished.                                |

::callout{title="Note" icon="i-heroicons-information-circle-solid"}
The amount of time (in ticks) a Compression recipe takes to complete is power_cost / power_rate.
::

### Example File

```json
{
  "type": "extendedcrafting:compressor",
  "power_cost": 500000,
  "ingredient": {
    "item": "minecraft:carrot",
    "count": 10000
  },
  "catalyst": {
    "item": "extendedcrafting:ender_catalyst"
  },
  "result": {
    "id": "minecraft:cobblestone"
  }
}
```

## CraftTweaker

Extended Crafting comes with CraftTweaker support built-in. You can make use of CraftTweaker to easily manage Compression Crafting recipes.

::callout{title="Recipe Manager Support" icon="i-heroicons-information-circle-solid"}
CraftTweaker integration supports <a href="https://docs.blamejared.com/1.21.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers</a>! Access all applicable methods using **\<recipetype:extendedcrafting:compressor\>**!
::

### Adding A Recipe

```java
<recipetype:extendedcrafting:compressor>.addRecipe(name, <input>, <output>, input_count, <catalyst>, power_cost);    
<recipetype:extendedcrafting:compressor>.addRecipe(name, <input>, <output>, input_count, <catalyst>, power_cost, power_rate);
```

| Field         | Required | Description                                                                                                                                               |
|---------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`        | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                                                 |
| `input`       | ✓        | The output item for this recipe.                                                                                                                          |
| `input_count` | ✓        | The amount of the input item that is required.                                                                                                            |
| `catalyst`    | ✓        | The input item.                                                                                                                                           |
| `input_count` | ✓        | The amount of the input item required.                                                                                                                    |
| `catalyst`    | ✓        | The item that is required as a catalyst. This does not get consumed and goes in the small slot to the left.                                               |
| `power_cost`  | ✓        | The amount of FE required to complete the crafting stage of compression.                                                                                  |
| `power_rate`  |          | The rate the recipe should consume FE during the crafting stage.  If this parameter isn't added, it will use the default rate defined in the config file. |

::callout{title="Note" icon="i-heroicons-information-circle-solid"}
The amount of time (in ticks) a Compression recipe takes to complete is power_cost / power_rate.
::

#### Example

```java
<recipetype:extendedcrafting:compressor>.addRecipe("test", <tag:item:c:ingots/iron>, <item:minecraft:apple>, 50000, <tag:item:c:ingots/gold>, 2000000, 200);
```

### Removing Recipes

```java
<recipetype:extendedcrafting:compressor>.remove(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |
