---
id: table-recipes
title: Table Recipes
category: Extended Crafting
---

Extended Crafting allows you to easily add your own Extended Crafting Table recipes using Datapacks.

## Datapacks

::alert{title="Prerequisites" icon="i-heroicons-information-circle-solid"}
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
    "X": "#c:ingots/gold"
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
    "X": "#c:ingots/gold"
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
    "X": "#c:ingots/gold"
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
  "type": "extendedcrafting:shapeless_table",
  "ingredients": [
    "minecraft:coal",
    "minecraft:coal"
  ],
  "result": {
    "id": "minecraft:apple"
  }
}
```
