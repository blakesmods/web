import { ref } from "vue";

interface Mod {
  name: string;
  tagline: string;
  mod_id: ModID;
  url: string;
  logo: string;
  curseforge_link: string;
  modrinth_link: string;
  github_link: string;
  primary_color: string;
  secondary_color: string;
  has_docs: boolean;
  has_wiki: boolean;
}

type ModID =
  | "mysticalagriculture"
  | "ironjetpacks"
  | "pickletweaks"
  | "mysticalagradditions"
  | "extendedcrafting"
  | "morebuckets"
  | "mysticalcustomization"
  | "cucumber";

const mods: Mod[] = [
  {
    name: "Mystical Agriculture",
    tagline: "Grow all of your resources!",
    mod_id: "mysticalagriculture",
    url: "/mystical-agriculture",
    logo: "/img/logo/mysticalagriculture_logo.png",
    curseforge_link:
      "https://www.curseforge.com/minecraft/mc-mods/mystical-agriculture",
    modrinth_link: "https://modrinth.com/mod/mystical-agriculture",
    github_link: "https://github.com/BlakeBr0/MysticalAgriculture",
    primary_color: "#c200ed",
    secondary_color: "#a4003c",
    has_docs: true,
    has_wiki: true
  },
  {
    name: "Iron Jetpacks",
    tagline: "Customizable energy powered jetpacks!",
    mod_id: "ironjetpacks",
    url: "/iron-jetpacks",
    logo: "/img/logo/ironjetpacks_logo.png",
    curseforge_link:
      "https://www.curseforge.com/minecraft/mc-mods/iron-jetpacks",
    modrinth_link: "https://modrinth.com/mod/iron-jetpacks",
    github_link: "https://github.com/BlakeBr0/IronJetpacks",
    primary_color: "#00b2e6",
    secondary_color: "#0600aa",
    has_docs: true,
    has_wiki: true
  },
  {
    name: "Pickle Tweaks",
    tagline: "Some vanilla+ features and tweaks!",
    mod_id: "pickletweaks",
    url: "/pickle-tweaks",
    logo: "/img/logo/pickletweaks_logo.png",
    curseforge_link:
      "https://www.curseforge.com/minecraft/mc-mods/pickle-tweaks",
    modrinth_link: "https://modrinth.com/mod/pickle-tweaks",
    github_link: "https://github.com/BlakeBr0/PickleTweaks",
    primary_color: "#da0002",
    secondary_color: "#a68c00",
    has_docs: false,
    has_wiki: true
  },
  {
    name: "Mystical Agradditions",
    tagline: "Grow even more resources!",
    mod_id: "mysticalagradditions",
    url: "/mystical-agradditions",
    logo: "/img/logo/mysticalagradditions_logo.png",
    curseforge_link:
      "https://www.curseforge.com/minecraft/mc-mods/mystical-agradditions",
    modrinth_link: "https://modrinth.com/mod/mystical-agradditions",
    github_link: "https://github.com/BlakeBr0/MysticalAgradditions",
    primary_color: "#fccd00",
    secondary_color: "#40b600",
    has_docs: false,
    has_wiki: true
  },
  {
    name: "Extended Crafting",
    tagline: "Adds new ways to craft items!",
    mod_id: "extendedcrafting",
    url: "/extended-crafting",
    logo: "/img/logo/extendedcrafting_logo.png",
    curseforge_link:
      "https://www.curseforge.com/minecraft/mc-mods/extended-crafting",
    modrinth_link: "https://modrinth.com/mod/extended-crafting",
    github_link: "https://github.com/BlakeBr0/ExtendedCrafting",
    primary_color: "#00c778",
    secondary_color: "#0054ab",
    has_docs: true,
    has_wiki: true
  },
  {
    name: "More Buckets",
    tagline: "Adds more buckets!",
    mod_id: "morebuckets",
    url: "/more-buckets",
    logo: "/img/logo/morebuckets_logo.png",
    curseforge_link:
      "https://www.curseforge.com/minecraft/mc-mods/more-buckets",
    modrinth_link: "https://modrinth.com/mod/more-buckets",
    github_link: "https://github.com/BlakeBr0/MoreBuckets",
    primary_color: "#3bb500",
    secondary_color: "#009666",
    has_docs: false,
    has_wiki: true
  },
  {
    name: "Mystical Customization",
    tagline: "Add your own resource crops!",
    mod_id: "mysticalcustomization",
    url: "/mystical-customization",
    logo: "/img/logo/mysticalcustomization_logo.png",
    curseforge_link:
      "https://www.curseforge.com/minecraft/mc-mods/mystical-customization",
    modrinth_link: "https://modrinth.com/mod/mystical-customization",
    github_link: "https://github.com/BlakeBr0/MysticalCustomization",
    primary_color: "#6d6d6d",
    secondary_color: "#444444",
    has_docs: true,
    has_wiki: false
  },
  {
    name: "Cucumber Library",
    tagline: "The backbone of BlakeBr0's mods!",
    mod_id: "cucumber",
    url: "/cucumber",
    logo: "/img/logo/cucumber_logo.png",
    curseforge_link: "https://www.curseforge.com/minecraft/mc-mods/cucumber",
    modrinth_link: "https://modrinth.com/mod/cucumber",
    github_link: "https://github.com/BlakeBr0/Cucumber",
    primary_color: "#8ce200",
    secondary_color: "#00bc09",
    has_docs: true,
    has_wiki: true
  }
];

export const useMod = (modID: ModID) => ref(mods.find(m => m.mod_id == modID));
export const useMods = () => ref(mods);
export const useModsExcept = (modIDs: ModID[]) =>
  ref(mods.filter(m => !modIDs.includes(m.mod_id)));
