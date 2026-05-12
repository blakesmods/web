---
id: tags-config
title: Tags Config File
category: Cucumber
---

## What It's For

The `cucumber-tags.json` file is used to configure the output item of recipes that use a tag as an output. This system was added to allow for recipes that don't depend on a specific mod being present, as well as to allow pack devs to ensure these recipes give the correct item output.

## How To Use It

This file is a simple list of key-value pairs. The key being the tag and the value being the item that recipes using that tag should output. This file will automatically populate with any tags used by this system during recipe loading. If there is no entry for a tag, or the output item is `"null"`, an entry will attempt to be added for one of the items in that tag.

There should be no need to add an entry manually. Once you load into a world, all applicable entries should be generated. You can then change the item ids to the ones you want to use.

## Example Config

Below is an example of what this file could look like after loading a world for the first time.

```json[cucumber-tags.json]
{
  "c:ingots/titanium": "null",
  "c:ingots/electrum": "silents_mechanisms:electrum_ingot",
  "c:silicons": "null",
  "c:ingots/aluminum": "silents_mechanisms:aluminum_ingot",
  "c:ingots/bronze": "silents_mechanisms:bronze_ingot",
  "c:ingots/copper": "mekanism:ingot_copper",
  "c:ingots/invar": "silents_mechanisms:invar_ingot",
  "c:rubbers": "null",
  "c:ingots/platinum": "silents_mechanisms:platinum_ingot",
  "c:ingots/constantan": "null",
  "c:ingots/brass": "silents_mechanisms:brass_ingot",
  "c:ingots/tungsten": "null",
  "c:dusts/sulfur": "mekanism:dust_sulfur",
  "c:ingots/silver": "silents_mechanisms:silver_ingot",
  "c:ingots/lead": "silents_mechanisms:lead_ingot",
  "c:ingots/graphite": "null",
  "c:ingots/chrome": "null",
  "c:ingots/uranium": "silents_mechanisms:uranium_ingot",
  "c:ingots/mithril": "null",
  "c:ingots/nickel": "silents_mechanisms:nickel_ingot",
  "c:dusts/saltpeter": "null",
  "c:ingots/tin": "mekanism:ingot_tin",
  "c:ingots/steel": "silents_mechanisms:steel_ingot",
  "c:ingots/iridium": "null",
  "c:ingots/zinc": "silents_mechanisms:zinc_ingot"
}
```
