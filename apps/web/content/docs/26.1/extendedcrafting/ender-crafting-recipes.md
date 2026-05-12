---
id: ender-crafting-recipes
title: Ender Recipes
category: Extended Crafting
---

Extended Crafting allows you to easily add your own Ender Crafting recipes using Datapacks.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
- You can learn more about using vanilla datapacks <a href="https://minecraft.gamepedia.com/Data_pack" target="_blank">here</a>.
- You can learn more about creating recipe JSON files <a href="https://minecraft.gamepedia.com/Recipe" target="_blank">here</a>.
::

### The Recipe File

This section will go over the values available to use in an Ender Crafting recipe. Syntax can be inferred from the example JSONs below.

#### Shaped

| Field           | Required | Description                                                                       |
|-----------------|----------|-----------------------------------------------------------------------------------|
| `type`          | ✓        | The recipe type must be `extendedcrafting:shaped_ender_crafter`.                  |
| `crafting_time` |          | The amount of time (in seconds) this recipe should take with a single Alternator. |
| `pattern`       | ✓        | The recipe pattern.                                                               |
| `key`           | ✓        | The recipe key, for specifying which item each character represents.              |
| `result`        | ✓        | The item that this recipe will output once finished                               |

#### Shapeless

| Field           | Required | Description                                                                       |
|-----------------|----------|-----------------------------------------------------------------------------------|
| `type`          | ✓        | The recipe type must be `extendedcrafting:shapeless_ender_crafter`.               |
| `crafting_time` |          | The amount of time (in seconds) this recipe should take with a single Alternator. |
| `ingredients`   | ✓        | An array of 1-9 input items.                                                      |
| `result`        | ✓        | The item that this recipe will output once finished.                              |

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
    "X": "#c:ingots/gold"
  },
  "result": {
    "id": "minecraft:apple"
  }
}
```

#### Shapeless

```json
{
  "type": "extendedcrafting:shapeless_ender_crafter",
  "ingredients": [
    "minecraft:coal",
    "minecraft:coal"
  ],
  "result": {
    "id": "minecraft:apple"
  }
}
```
