---
id: flux-crafting-recipes
title: Flux Recipes
category: Extended Crafting
---

Extended Crafting allows you to easily add your own Flux Crafting recipes using Datapacks.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
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

::alert{title="Note" icon="i-heroicons-information-circle-solid"}
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
  "type": "extendedcrafting:shapeless_flux_crafter",
  "power_required": 2000000,
  "ingredients": [
    "minecraft:coal",
    "minecraft:coal"
  ],
  "result": {
    "id": "minecraft:string"
  }
}
```
