---
id: tags-config
title: Tags Config File
category: Cucumber
---

## What It's For
The `cucumber-tags.json` file added in Cucumber Library version 3.0.3 is used to configure the output item of recipes that use a tag as an output. This system was added to allow for recipes that don't depend on a specific mod being present, as well as to allow pack devs to ensure these recipes give the correct item output.

This system is currently used by Mystical Agriculture version 3.0.1+ and Extended Crafting 2.0.0+.

## How To Use It
This file is a simple list of key-value pairs. The key being the tag and the value being the item that recipes using that tag should output. This file will automatically populate with any tags used by this system during recipe loading. If there is no entry for a tag, or the output item is `"null"`, an entry will attempt to be added for one of the items in that tag.

There should be no need to add an entry manually. Once you load into a world, all applicable entries should be generated. You can then change the item ids to the ones you want to use.

## Example Config
Below is an example of what this file could look like after loading a world for the first time.
```json
{
  "forge:ingots/titanium": "null",
  "forge:ingots/electrum": "silents_mechanisms:electrum_ingot",
  "forge:silicon": "null",
  "forge:ingots/aluminum": "silents_mechanisms:aluminum_ingot",
  "forge:ingots/bronze": "silents_mechanisms:bronze_ingot",
  "forge:ingots/copper": "mekanism:ingot_copper",
  "forge:ingots/invar": "silents_mechanisms:invar_ingot",
  "forge:rubber": "null",
  "forge:ingots/platinum": "silents_mechanisms:platinum_ingot",
  "forge:ingots/constantan": "null",
  "forge:ingots/brass": "silents_mechanisms:brass_ingot",
  "forge:ingots/tungsten": "null",
  "forge:dusts/sulfur": "mekanism:dust_sulfur",
  "forge:ingots/silver": "silents_mechanisms:silver_ingot",
  "forge:ingots/lead": "silents_mechanisms:lead_ingot",
  "forge:ingots/graphite": "null",
  "forge:ingots/chrome": "null",
  "forge:ingots/uranium": "silents_mechanisms:uranium_ingot",
  "forge:ingots/mithril": "null",
  "forge:ingots/nickel": "silents_mechanisms:nickel_ingot",
  "forge:dusts/saltpeter": "null",
  "forge:ingots/tin": "mekanism:ingot_tin",
  "forge:ingots/steel": "silents_mechanisms:steel_ingot",
  "forge:ingots/iridium": "null",
  "forge:ingots/zinc": "silents_mechanisms:zinc_ingot"
}
```
