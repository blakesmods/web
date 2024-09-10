---
id: usage-in-recipes
title: Usage in Recipes
category: Iron Jetpacks
---

::callout{title="Important" icon="i-heroicons-information-circle-solid"}
These ingredients are only available in version 5.0.0 or later!
::

## Using In Recipes

The different jetpack types are defined using NBT data. This means there is an extra step involved in using a Jetpack (or it's crafting components) in a crafting recipe.

### Jetpack Components

You need to use a Jetpack Component ingredient for jetpacks and their crafting components. The two notable fields here are `component` and `jetpack`.

The `component` field is the type of Jetpack crafting component you want. The possible values are `jetpack`, `cell`, `thruster` and `capacitor`.

The `jetpack` field is the Jetpack ID. You can find this ID by enabling advanced tooltips (F3 + h), and checking the ID by hovering over a Jetpack.

#### Example

```json
{
  "type": "ironjetpacks:jetpack_component",
  "component": "jetpack",
  "jetpack": "ironjetpacks:iron"
}
```

### Jetpack Tiers

If you want to create recipes that can accept any jetpack of a tier, similarly to the default jetpack upgrade recipes, then you can use the Jetpack Tier ingredient.

The `tier` field is the jetpack tier, and it must be a number.

#### Example

```json
{
  "type": "ironjetpacks:jetpack_tier",
  "tier": 2
}
```

### Jetpacks as Recipe Output

Since each Jetpack is differentiated using NBT, you will need to provide the NBT in the recipe result item.

#### Example

```json
{
  "result": {
    "item": "ironjetpacks:jetpack",
    "nbt": {
      "Id": "ironjetpacks:diamond"
    }
  }
}
```
