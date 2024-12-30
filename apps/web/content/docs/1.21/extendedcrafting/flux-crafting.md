---
id: flux-crafting-recipes
title: Flux Recipes
category: Extended Crafting
---

Extended Crafting allows you easily add your own Flux Crafting recipes using both Datapacks and CraftTweaker.

## Datapacks

::callout{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in an Ender Crafting recipe. Syntax can be inferred from the example JSONs below.

#### Shaped

| Field            | Required | Description                                                                                                                   |
|------------------|----------|-------------------------------------------------------------------------------------------------------------------------------|
| `type`           | ✓        | The recipe type must be `extendedcrafting:shaped_flux_crafter`.                                                               |
| `power_required` | ✓        | The amount of FE this recipe needs per craft.                                                                                 |
| `power_rate`     |          | The amount of FE/t this recipe should take from each Flux Alternator. If omitted will use the default set in the config file. |
| `pattern`        | ✓        | The recipe pattern.                                                                                                           |
| `key`            | ✓        | The recipe key, for specifying which item each character represents.                                                          |
| `result`         | ✓        | The item that this recipe will output once finished                                                                           |

#### Shapeless

| Field            | Required | Description                                                                                                                   |
|------------------|----------|-------------------------------------------------------------------------------------------------------------------------------|
| `type`           | ✓        | The recipe type must be `extendedcrafting:shapeless_flux_crafter`.                                                            |
| `power_required` | ✓        | The amount of FE this recipe needs per craft.                                                                                 |
| `power_rate`     |          | The amount of FE/t this recipe should take from each Flux Alternator. If omitted will use the default set in the config file. |
| `ingredients`    | ✓        | An array of 1-9 input items.                                                                                                  |
| `result`         | ✓        | The item that this recipe will output once finished                                                                           |

::callout{title="Note" icon="i-heroicons-information-circle-solid"}
Crafting Time will decrease depending on how many Alternators are in range. See the config settings for more information.
::

### Example Files
#### Shaped

```json
{
  "type": "extendedcrafting:shaped_flux_crafter",
  "power_required": 100000,
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

#### Shapeless

```json
{
  "type": "extendedcrafting:shapeless_flux_crafter",
  "power_required": 2000000,
  "ingredients": [
    {
      "item": "minecraft:coal"
    },
    {
      "item": "minecraft:coal"
    }
  ],
  "result": {
    "id": "minecraft:string"
  }
}
```

## CraftTweaker

Extended Crafting comes with CraftTweaker support built-in. You can make use of CraftTweaker to easily manage Flux Crafting recipes.

::callout{title="Recipe Manager Support" icon="i-heroicons-information-circle-solid"}
CraftTweaker integration supports <a href="https://docs.blamejared.com/1.21.1/en/tutorial/Recipes/RecipeManagers" target="_blank">Recipe Managers</a>! Access all applicable methods using **\<recipetype:extendedcrafting:flux_crafter\>**!
::

### Adding A Shaped Recipe

```java
<recipetype:extendedcrafting:flux_crafter>.addShaped(name, <output>, [[<>, <>, <>], [<>, <>, <>], [<>, <>, <>]], power_required, power_rate);  
```

| Field            | Required | Description                                                                                                                                                           |
|------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`           | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                                                             |
| `output`         | ✓        | The output item for this recipe.                                                                                                                                      |
| `<>`             | ✓        | An input ingredient for the slot shown. These input arrays work in the same way as the normal crafting recipes, check out the CraftTweaker wiki for more information. |
| `power_required` | ✓        | The amount of FE this recipe needs per craft.                                                                                                                         |
| `power_rate`     |          | The amount of FE/t this recipe should take from each Flux Alternator. If omitted will use the default set in the config file.                                         |

::callout{title="Note" icon="i-heroicons-information-circle-solid"}
Crafting Time will decrease depending on how many Alternators are in range. See the config settings for more information.
::

#### Example

```java
<recipetype:extendedcrafting:flux_crafter>.addShaped("test_shaped", <item:minecraft:stick>, [
  [<tag:item:c:ingots/iron>, <item:minecraft:air>, <item:minecraft:air>], 
  [<tag:item:c:ingots/gold>, <tag:item:c:ingots/gold>, <item:minecraft:air>], 
  [<tag:item:c:ingots/gold>, <item:minecraft:air>, <item:minecraft:air>]
], 1000000);
```

### Adding A Shapeless Recipe

```java
<recipetype:extendedcrafting:flux_crafter>.addShapeless(name, <output>, [inputs], power_required, power_rate); 
```

| Field            | Required | Description                                                                                                                   |
|------------------|----------|-------------------------------------------------------------------------------------------------------------------------------|
| `name`           | ✓        | A unique name for this recipe. Must be all lower case and have no spaces.                                                     |
| `output`         | ✓        | The output item for this recipe.                                                                                              |
| `inputs`         | ✓        | An array of 1-9 items required to make the recipe.                                                                            |
| `power_required` | ✓        | The amount of FE this recipe needs per craft.                                                                                 |
| `power_rate`     |          | The amount of FE/t this recipe should take from each Flux Alternator. If omitted will use the default set in the config file. |

::callout{title="Note" icon="i-heroicons-information-circle-solid"}
Crafting Time will decrease depending on how many Alternators are in range. See the config settings for more information.
::

#### Example

```java
<recipetype:extendedcrafting:flux_crafter>.addShapeless("test_shapeless", <item:minecraft:cobblestone>, [
  <tag:item:c:gems/diamond>, <tag:item:c:gems/diamond>, <tag:item:c:gems/diamond>, <tag:item:c:gems/diamond>, <tag:item:c:gems/diamond>, <tag:item:c:gems/diamond>
], 1000000);
```

### Removing Recipes

```java
<recipetype:extendedcrafting:flux_crafter>.remove(<output>);
```

| Field    | Required | Description                         |
|----------|----------|-------------------------------------|
| `output` | ✓        | The item to remove all recipes for. |
