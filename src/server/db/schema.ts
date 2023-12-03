// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  bigint,
  boolean,
  index,
  mysqlTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = mysqlTableCreator(
  (name) => `gtasa-100-checklist-${name}`,
);

export const posts = mysqlTable(
  "post",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const saves = mysqlTable("save", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at").onUpdateNow(),

  //safe houses - los santos
  safeHouseElCorona: boolean("safe_house_el_corona").default(false),
  safeHouseJefferson: boolean("safe_house_jefferson").default(false),
  safeHouseMulholland: boolean("safe_house_mulholland").default(false),
  safeHouseSantaMaria: boolean("safe_house_santa_maria").default(false),
  safeHouseVerona: boolean("safe_house_verona").default(false),
  safeHouseWillowfield: boolean("safe_house_willowfield").default(false),

  //safe houses - badlands
  safeHouseAngelPine: boolean("safe_house_angel_pine").default(false),
  safeHouseBlueberry: boolean("safe_house_blueberry").default(false),
  safeHouseDillimore: boolean("safe_house_dillimore").default(false),
  safeHousePalomino: boolean("safe_house_palomino").default(false),
  safeHouseWhetsone: boolean("safe_house_whetsone").default(false),

  //safe houses - san fierro
  safeHouseCalton: boolean("safe_house_calton").default(false),
  safeHouseChinatown: boolean("safe_house_chinatown").default(false),
  safeHouseDoherty: boolean("safe_house_doherty").default(false),
  safeHouseHashbury: boolean("safe_house_hashbury").default(false),
  safeHouseParadiso: boolean("safe_house_paradiso").default(false),
  safeHouseQueens: boolean("safe_house_queens").default(false),

  //safe houses - desert
  safeHouseElQuebrados: boolean("safe_house_el_quebrados").default(false),
  safeHouseFortCarson: boolean("safe_house_fort_carson").default(false),
  safeHouseTierra: boolean("safe_house_tierra").default(false),

  //safe houses - las venturas
  safeHouseCamel: boolean("safe_house_camel").default(false),
  safeHouseClown: boolean("safe_house_clown").default(false),
  safeHouseCreek: boolean("safe_house_creek").default(false),
  safeHouseOldStrip: boolean("safe_house_old_strip").default(false),
  safeHousePirates: boolean("safe_house_pirates").default(false),
  safeHousePricklePine: boolean("safe_house_prickle_pine").default(false),
  safeHouseRedsands: boolean("safe_house_redsands").default(false),
  safeHouseRockshore: boolean("safe_house_rockshore").default(false),
  safeHouseWhitewood: boolean("safe_house_whitewood").default(false),

  //businessess - san fierro
  businessWang: boolean("business_wang").default(false),
  businessZero: boolean("business_zero").default(false),

  //businessess - desert
  businessAirfield: boolean("business_airfield").default(false),

  //collectibles
  collectiblesTags: boolean("collectibles_tags").default(false),
  collectiblesPhotos: boolean("collectibles_photos").default(false),
  collectiblesHorseshoes: boolean("collectibles_horseshoes").default(false),
  collectiblesOysters: boolean("collectibles_oysters").default(false),

  //sub missions
  subMissionFirefighter: boolean("sub_mission_firefighter").default(false),
  subMissionParamedic: boolean("sub_mission_paramedic").default(false),
  subMissionPimping: boolean("sub_mission_pimping").default(false),
  subMissionTaxi: boolean("sub_mission_taxi").default(false),
  subMissionVigilante: boolean("sub_mission_vigilante").default(false),
  subMissionFreight: boolean("sub_mission_freight").default(false),

  //hidden challenges
  hiddenBmx: boolean("hidden_bmx").default(false),
  hiddenChilliad: boolean("hidden_chilliad").default(false),
  hiddenNrg: boolean("hidden_nrg").default(false),

  //stadium challenges
  stadium8Track: boolean("stadium_8_track").default(false),
  stadiumBloodBowl: boolean("stadium_blood_bowl").default(false),
  stadiumDirtTrack: boolean("stadium_dirt_track").default(false),
  stadiumKickStart: boolean("stadium_kick_start").default(false),

  //gun challenges
  gunPistol: boolean("gun_pistol").default(false),
  gunMicroSmg: boolean("gun_micro_smg").default(false),
  gunShotgun: boolean("gun_shotgun").default(false),
  gunAK: boolean("gun_ak").default(false),

  //gym moves
  gymLS: boolean("gym_ls").default(false),
  gymSF: boolean("gym_sf").default(false),
  gymLV: boolean("gym_lv").default(false),

  //schools
  schoolDriving: boolean("school_driving").default(false),
  schoolBoat: boolean("school_boat").default(false),
  schoolFlying: boolean("school_flying").default(false),
  schoolBike: boolean("school_bike").default(false),

  //assets
  assetTrucking: boolean("asset_trucking").default(false),
  assetValet: boolean("asset_valet").default(false),
  assetQuarry: boolean("asset_quarry").default(false),

  //courier
  courierLS: boolean("courier_ls").default(false),
  courierSF: boolean("courier_sf").default(false),
  courierLV: boolean("courier_lv").default(false),

  //races
  raceLS1: boolean("race_ls_1").default(false),
  raceLS2: boolean("race_ls_2").default(false),
  raceLS3: boolean("race_ls_3").default(false),
  raceLS4: boolean("race_ls_4").default(false),
  raceLS5: boolean("race_ls_5").default(false),
  raceLS6: boolean("race_ls_6").default(false),

  raceSF1: boolean("race_sf_1").default(false),
  raceSF2: boolean("race_sf_2").default(false),
  raceSF3: boolean("race_sf_3").default(false),
  raceSF4: boolean("race_sf_4").default(false),
  raceSF5: boolean("race_sf_5").default(false),
  raceSF6: boolean("race_sf_6").default(false),

  raceLV1: boolean("race_lv_1").default(false),
  raceLV2: boolean("race_lv_2").default(false),
  raceLV3: boolean("race_lv_3").default(false),
  raceLV4: boolean("race_lv_4").default(false),

  raceAir1: boolean("race_air_1").default(false),
  raceAir2: boolean("race_air_2").default(false),
  raceAir3: boolean("race_air_3").default(false),
  raceAir4: boolean("race_air_4").default(false),
  raceAir5: boolean("race_air_5").default(false),
  raceAir6: boolean("race_air_6").default(false),

  //import / export
  imexList1: boolean("imex_list_1").default(false),
  imexList2: boolean("imex_list_2").default(false),
  imexList3: boolean("imex_list_3").default(false),

  //story missions

  storyLsCJ1: boolean("story_ls_cj_1").default(false), // big smoke + sweet & kendl

  storyLsRyder1: boolean("story_ls_ryder_1").default(false), // ryder

  storyLsSweet1: boolean("story_ls_sweet_1").default(false), // tagging up turf
  storyLsSweet2: boolean("story_ls_sweet_2").default(false), // cleaning the hood
  storyLsSweet3: boolean("story_ls_sweet_3").default(false), // drive thru
  storyLsSweet4: boolean("story_ls_sweet_4").default(false), // nines & aks
  storyLsSweet5: boolean("story_ls_sweet_5").default(false), // drive by
  storyLsSweet6: boolean("story_ls_sweet_6").default(false), // sweets girl
  storyLsSweet7: boolean("story_ls_sweet_7").default(false), // cesar vialpando

  storyLsSmoke1: boolean("story_ls_smoke_1").default(false), // og loc
  storyLsSmoke2: boolean("story_ls_smoke_2").default(false), // running dog
  storyLsSmoke3: boolean("story_ls_smoke_3").default(false), // wrong side of the tracks
  storyLsSmoke4: boolean("story_ls_smoke_4").default(false), // just business

  storyLsRyder2: boolean("story_ls_ryder_2").default(false), // home invasion
  storyLsRyder3: boolean("story_ls_ryder_3").default(false), // catalyst
  storyLsRyder4: boolean("story_ls_ryder_4").default(false), // robbing uncle sam

  storyLsOgloc1: boolean("story_ls_ogloc_1").default(false), // life's a beach
  storyLsOgloc2: boolean("story_ls_ogloc_2").default(false), // madd dogg's rhymes
  storyLsOgloc3: boolean("story_ls_ogloc_3").default(false), // management issues
  storyLsOgloc4: boolean("story_ls_ogloc_4").default(false), // house party

  storyLsCesar1: boolean("story_ls_cesar_1").default(false), // high stakes, low rider

  storyLsCrash1: boolean("story_ls_crash_1").default(false), // burning desire
  storyLsCrash2: boolean("story_ls_crash_2").default(false), // gray imports

  storyLsSweet8: boolean("story_ls_sweet_8").default(false), // doberman
  storyLsSweet9: boolean("story_ls_sweet_8").default(false), // los sepulcros

  storyLsFinale1: boolean("story_ls_finale_1").default(false), // reuiniting the families
  storyLsFinale2: boolean("story_ls_finale_2").default(false), // the green sabre

  storyBadCrash1: boolean("story_bad_crash_1").default(false), // badlands

  storyBadCatalina1: boolean("story_bad_catalina_1").default(false), // tanker commander

  storyBadTruth1: boolean("story_bad_truth_1").default(false), // body harvest

  storyBadCatalina2: boolean("story_bad_catalina_2").default(false), // local liquor store
  storyBadCatalina3: boolean("story_bad_catalina_3").default(false), // small town bank
  storyBadCatalina4: boolean("story_bad_catalina_4").default(false), // against all odds

  storyBadCesar1: boolean("story_bad_cesar_1").default(false), // wu zi mu
  storyBadCesar2: boolean("story_bad_cesar_2").default(false), // farewell my love

  storyBadTruth2: boolean("story_bad_truth_2").default(false), // are you going to san fierro?

  storySfGarage1: boolean("story_sf_garage_1").default(false), // wear flowers in your hair
  storySfGarage2: boolean("story_sf_garage_2").default(false), // 555 we tip
  storySfGarage3: boolean("story_sf_garage_3").default(false), // deconstruction

  storySfZero1: boolean("story_sf_zero_1").default(false), // air raid
  storySfZero2: boolean("story_sf_zero_2").default(false), // supply lines
  storySfZero3: boolean("story_sf_zero_3").default(false), // new model army

  storySfTriad1: boolean("story_sf_triad_1").default(false), // photo opportunity

  storySfSynd1: boolean("story_sf_synd_1").default(false), // jizzy
  storySfSynd2: boolean("story_sf_synd_2").default(false), // t-bone mendez
  storySfSynd3: boolean("story_sf_synd_3").default(false), // mike toreno

  storySfWuzi1: boolean("story_sf_wuzi_1").default(false), // mountain cloud boys
  storySfWuzi2: boolean("story_sf_wuzi_2").default(false), // ran fa li
  storySfWuzi3: boolean("story_sf_wuzi_3").default(false), // lure
  storySfWuzi4: boolean("story_sf_wuzi_4").default(false), // amphibious assault
  storySfWuzi5: boolean("story_sf_wuzi_5").default(false), // the da nang thang

  storySfTriad2: boolean("story_sf_triad_2").default(false), // outrider

  storySfCrash1: boolean("story_sf_crash_1").default(false), // snail trail

  storySfTriad3: boolean("story_sf_triad_3").default(false), // ice cold killa
  storySfTriad4: boolean("story_sf_triad_4").default(false), // pier 69
  storySfTriad5: boolean("story_sf_triad_5").default(false), // toreno's last flight
  storySfTriad6: boolean("story_sf_triad_6").default(false), // yay ka-boom-boom

  storySfSteal1: boolean("story_sf_steal_1").default(false), // zeroing in
  storySfSteal2: boolean("story_sf_steal_2").default(false), // test drive
  storySfSteal3: boolean("story_sf_steal_3").default(false), // customs fast track
  storySfSteal4: boolean("story_sf_steal_4").default(false), // puncture wounds

  storyDesertMike1: boolean("story_desert_mike_1").default(false), // monster
  storyDesertMike2: boolean("story_desert_mike_2").default(false), // highjack
  storyDesertMike3: boolean("story_desert_mike_3").default(false), // interdiction
  storyDesertMike4: boolean("story_desert_mike_4").default(false), // verdant meadows

  storyDesertAirfield1: boolean("story_desert_airfield_1").default(false), // n.o.e
  storyDesertAirfield2: boolean("story_desert_airfield_2").default(false), // stowaway
  storyDesertAirfield3: boolean("story_desert_airfield_3").default(false), // black project
  storyDesertAirfield4: boolean("story_desert_airfield_4").default(false), // green goo

  storyLvCasino1: boolean("story_lv_casino_1").default(false), // fender ketchup
  storyLvCasino2: boolean("story_lv_casino_2").default(false), // explosive situation
  storyLvCasino3: boolean("story_lv_casino_3").default(false), // you've had your chips
  storyLvCasino4: boolean("story_lv_casino_4").default(false), // don peyote

  storyLvHeist1: boolean("story_lv_heist_1").default(false), // architechural espionage
  storyLvHeist2: boolean("story_lv_heist_2").default(false), // a key to her heart
  storyLvHeist3: boolean("story_lv_heist_3").default(false), // dam and blast
  storyLvHeist4: boolean("story_lv_heist_4").default(false), // cop wheels
  storyLvHeist5: boolean("story_lv_heist_5").default(false), // up, up and away!

  storyLvCasino5: boolean("story_lv_casino_5").default(false), // intensive care
  storyLvCasino6: boolean("story_lv_casino_6").default(false), // the meat business

  storyLvCrash1: boolean("story_lv_crash_1").default(false), // misappropriation

  storyLvDogg1: boolean("story_lv_dogg_1").default(false), // madd dogg

  storyLvCasino7: boolean("story_lv_casino_7").default(false), // freefall

  storyLvCrash2: boolean("story_lv_crash_2").default(false), // high noon

  storyLvCasino8: boolean("story_lv_casino_8").default(false), // st mark's bistro
  storyLvCasino9: boolean("story_lv_casino_9").default(false), // a home in the hills

  storyLvHeist6: boolean("story_lv_heist_6").default(false), // breaking the bank at caligula's

  storyRtlsMansion1: boolean("story_rtls_mansion_1").default(false), // vertical bird
  storyRtlsMansion2: boolean("story_rtls_mansion_2").default(false), // homecoming
  storyRtlsMansion3: boolean("story_rtls_mansion_3").default(false), // cut throat business

  storyRtlsGrove1: boolean("story_rtls_grove_1").default(false), // beat down on b dup
  storyRtlsGrove2: boolean("story_rtls_grove_2").default(false), // grove 4 life

  storyRtlsRiot1: boolean("story_rtls_riot_1").default(false), // riot
  storyRtlsRiot2: boolean("story_rtls_riot_2").default(false), // los desperados
  storyRtlsRiot3: boolean("story_rtls_riot_3").default(false), // end of the line
});
