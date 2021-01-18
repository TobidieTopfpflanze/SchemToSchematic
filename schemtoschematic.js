if (typeof nbt === 'undefined') {
    nbt = require('nbt');
}

var blocksNamespace = {
    'minecraft:air': 0,
    'minecraft:stone': 16,
    'minecraft:granite': 17,
    'minecraft:polished_granite': 18,
    'minecraft:diorite': 19,
    'minecraft:polished_diorite': 20,
    'minecraft:andesite': 21,
    'minecraft:polished_andesite': 22,
    'minecraft:grass_block[snowy=false]': 32,
    'minecraft:dirt': 48,
    'minecraft:coarse_dirt': 49,
    'minecraft:podzol[snowy=false]': 50,
    'minecraft:cobblestone': 64,
    'minecraft:oak_planks': 80,
    'minecraft:spruce_planks': 81,
    'minecraft:birch_planks': 82,
    'minecraft:jungle_planks': 83,
    'minecraft:acacia_planks': 84,
    'minecraft:dark_oak_planks': 85,
    'minecraft:oak_sapling[stage=0]': 96,
    'minecraft:spruce_sapling[stage=0]': 97,
    'minecraft:birch_sapling[stage=0]': 98,
    'minecraft:jungle_sapling[stage=0]': 99,
    'minecraft:acacia_sapling[stage=0]': 100,
    'minecraft:dark_oak_sapling[stage=0]': 101,
    'minecraft:oak_sapling[stage=1]': 104,
    'minecraft:spruce_sapling[stage=1]': 105,
    'minecraft:birch_sapling[stage=1]': 106,
    'minecraft:jungle_sapling[stage=1]': 107,
    'minecraft:acacia_sapling[stage=1]': 108,
    'minecraft:dark_oak_sapling[stage=1]': 109,
    'minecraft:bedrock': 112,
    'minecraft:water[level=0]': 144,
    'minecraft:water[level=1]': 145,
    'minecraft:water[level=2]': 146,
    'minecraft:water[level=3]': 147,
    'minecraft:water[level=4]': 148,
    'minecraft:water[level=5]': 149,
    'minecraft:water[level=6]': 150,
    'minecraft:water[level=7]': 151,
    'minecraft:water[level=8]': 152,
    'minecraft:water[level=9]': 153,
    'minecraft:water[level=10]': 154,
    'minecraft:water[level=11]': 155,
    'minecraft:water[level=12]': 156,
    'minecraft:water[level=13]': 157,
    'minecraft:water[level=14]': 158,
    'minecraft:water[level=15]': 159,
    'minecraft:lava[level=0]': 176,
    'minecraft:lava[level=1]': 177,
    'minecraft:lava[level=2]': 178,
    'minecraft:lava[level=3]': 179,
    'minecraft:lava[level=4]': 180,
    'minecraft:lava[level=5]': 181,
    'minecraft:lava[level=6]': 182,
    'minecraft:lava[level=7]': 183,
    'minecraft:lava[level=8]': 184,
    'minecraft:lava[level=9]': 185,
    'minecraft:lava[level=10]': 186,
    'minecraft:lava[level=11]': 187,
    'minecraft:lava[level=12]': 188,
    'minecraft:lava[level=13]': 189,
    'minecraft:lava[level=14]': 190,
    'minecraft:lava[level=15]': 191,
    'minecraft:sand': 192,
    'minecraft:red_sand': 193,
    'minecraft:gravel': 208,
    'minecraft:gold_ore': 224,
    'minecraft:iron_ore': 240,
    'minecraft:coal_ore': 256,
    'minecraft:oak_log[axis=y]': 272,
    'minecraft:spruce_log[axis=y]': 273,
    'minecraft:birch_log[axis=y]': 274,
    'minecraft:jungle_log[axis=y]': 275,
    'minecraft:oak_log[axis=x]': 276,
    'minecraft:spruce_log[axis=x]': 277,
    'minecraft:birch_log[axis=x]': 278,
    'minecraft:jungle_log[axis=x]': 279,
    'minecraft:oak_log[axis=z]': 280,
    'minecraft:spruce_log[axis=z]': 281,
    'minecraft:birch_log[axis=z]': 282,
    'minecraft:jungle_log[axis=z]': 283,
    'minecraft:oak_wood[axis=y]': 284,
    'minecraft:spruce_wood[axis=y]': 285,
    'minecraft:birch_wood[axis=y]': 286,
    'minecraft:jungle_wood[axis=y]': 287,
    'minecraft:oak_leaves[distance=1,persistent=false]': 288,
    'minecraft:spruce_leaves[distance=1,persistent=false]': 289,
    'minecraft:birch_leaves[distance=1,persistent=false]': 290,
    'minecraft:jungle_leaves[distance=1,persistent=false]': 291,
    'minecraft:oak_leaves[distance=1,persistent=true]': 292,
    'minecraft:spruce_leaves[distance=1,persistent=true]': 293,
    'minecraft:birch_leaves[distance=1,persistent=true]': 294,
    'minecraft:jungle_leaves[distance=1,persistent=true]': 295,
    'minecraft:oak_leaves[distance=2,persistent=false]': 296,
    'minecraft:spruce_leaves[distance=2,persistent=false]': 297,
    'minecraft:birch_leaves[distance=2,persistent=false]': 298,
    'minecraft:jungle_leaves[distance=2,persistent=false]': 299,
    'minecraft:oak_leaves[distance=2,persistent=true]': 300,
    'minecraft:spruce_leaves[distance=2,persistent=true]': 301,
    'minecraft:birch_leaves[distance=2,persistent=true]': 302,
    'minecraft:jungle_leaves[distance=2,persistent=true]': 303,
    'minecraft:sponge': 304,
    'minecraft:wet_sponge': 305,
    'minecraft:glass': 320,
    'minecraft:lapis_ore': 336,
    'minecraft:lapis_block': 352,
    'minecraft:dispenser[facing=down,triggered=false]': 368,
    'minecraft:dispenser[facing=up,triggered=false]': 369,
    'minecraft:dispenser[facing=north,triggered=false]': 370,
    'minecraft:dispenser[facing=south,triggered=false]': 371,
    'minecraft:dispenser[facing=west,triggered=false]': 372,
    'minecraft:dispenser[facing=east,triggered=false]': 373,
    'minecraft:dispenser[facing=down,triggered=true]': 376,
    'minecraft:dispenser[facing=up,triggered=true]': 377,
    'minecraft:dispenser[facing=north,triggered=true]': 378,
    'minecraft:dispenser[facing=south,triggered=true]': 379,
    'minecraft:dispenser[facing=west,triggered=true]': 380,
    'minecraft:dispenser[facing=east,triggered=true]': 381,
    'minecraft:sandstone': 384,
    'minecraft:chiseled_sandstone': 385,
    'minecraft:cut_sandstone': 386,
    'minecraft:note_block[instrument=harp,note=0,powered=false]': 400,
    'minecraft:red_bed[facing=south,occupied=false,part=foot]': 416,
    'minecraft:red_bed[facing=west,occupied=false,part=foot]': 417,
    'minecraft:red_bed[facing=north,occupied=false,part=foot]': 418,
    'minecraft:red_bed[facing=east,occupied=false,part=foot]': 419,
    'minecraft:red_bed[facing=south,occupied=false,part=head]': 424,
    'minecraft:red_bed[facing=west,occupied=false,part=head]': 425,
    'minecraft:red_bed[facing=north,occupied=false,part=head]': 426,
    'minecraft:red_bed[facing=east,occupied=false,part=head]': 427,
    'minecraft:red_bed[facing=south,occupied=true,part=head]': 428,
    'minecraft:red_bed[facing=west,occupied=true,part=head]': 429,
    'minecraft:red_bed[facing=north,occupied=true,part=head]': 430,
    'minecraft:red_bed[facing=east,occupied=true,part=head]': 431,
    'minecraft:powered_rail[powered=false,shape=north_south]': 432,
    'minecraft:powered_rail[powered=false,shape=east_west]': 433,
    'minecraft:powered_rail[powered=false,shape=ascending_east]': 434,
    'minecraft:powered_rail[powered=false,shape=ascending_west]': 435,
    'minecraft:powered_rail[powered=false,shape=ascending_north]': 436,
    'minecraft:powered_rail[powered=false,shape=ascending_south]': 437,
    'minecraft:powered_rail[powered=true,shape=north_south]': 440,
    'minecraft:powered_rail[powered=true,shape=east_west]': 441,
    'minecraft:powered_rail[powered=true,shape=ascending_east]': 442,
    'minecraft:powered_rail[powered=true,shape=ascending_west]': 443,
    'minecraft:powered_rail[powered=true,shape=ascending_north]': 444,
    'minecraft:powered_rail[powered=true,shape=ascending_south]': 445,
    'minecraft:detector_rail[powered=false,shape=north_south]': 448,
    'minecraft:detector_rail[powered=false,shape=east_west]': 449,
    'minecraft:detector_rail[powered=false,shape=ascending_east]': 450,
    'minecraft:detector_rail[powered=false,shape=ascending_west]': 451,
    'minecraft:detector_rail[powered=false,shape=ascending_north]': 452,
    'minecraft:detector_rail[powered=false,shape=ascending_south]': 453,
    'minecraft:detector_rail[powered=true,shape=north_south]': 456,
    'minecraft:detector_rail[powered=true,shape=east_west]': 457,
    'minecraft:detector_rail[powered=true,shape=ascending_east]': 458,
    'minecraft:detector_rail[powered=true,shape=ascending_west]': 459,
    'minecraft:detector_rail[powered=true,shape=ascending_north]': 460,
    'minecraft:detector_rail[powered=true,shape=ascending_south]': 461,
    'minecraft:sticky_piston[extended=false,facing=down]': 464,
    'minecraft:sticky_piston[extended=false,facing=up]': 465,
    'minecraft:sticky_piston[extended=false,facing=north]': 466,
    'minecraft:sticky_piston[extended=false,facing=south]': 467,
    'minecraft:sticky_piston[extended=false,facing=west]': 468,
    'minecraft:sticky_piston[extended=false,facing=east]': 469,
    'minecraft:sticky_piston[extended=true,facing=down]': 472,
    'minecraft:sticky_piston[extended=true,facing=up]': 473,
    'minecraft:sticky_piston[extended=true,facing=north]': 474,
    'minecraft:sticky_piston[extended=true,facing=south]': 475,
    'minecraft:sticky_piston[extended=true,facing=west]': 476,
    'minecraft:sticky_piston[extended=true,facing=east]': 477,
    'minecraft:cobweb': 480,
    'minecraft:dead_bush': 512,
    'minecraft:grass': 497,
    'minecraft:fern': 498,
    'minecraft:piston[extended=false,facing=down]': 528,
    'minecraft:piston[extended=false,facing=up]': 529,
    'minecraft:piston[extended=false,facing=north]': 530,
    'minecraft:piston[extended=false,facing=south]': 531,
    'minecraft:piston[extended=false,facing=west]': 532,
    'minecraft:piston[extended=false,facing=east]': 533,
    'minecraft:piston[extended=true,facing=down]': 536,
    'minecraft:piston[extended=true,facing=up]': 537,
    'minecraft:piston[extended=true,facing=north]': 538,
    'minecraft:piston[extended=true,facing=south]': 539,
    'minecraft:piston[extended=true,facing=west]': 540,
    'minecraft:piston[extended=true,facing=east]': 541,
    'minecraft:piston_head[facing=down,short=false,type=normal]': 544,
    'minecraft:piston_head[facing=up,short=false,type=normal]': 545,
    'minecraft:piston_head[facing=north,short=false,type=normal]': 546,
    'minecraft:piston_head[facing=south,short=false,type=normal]': 547,
    'minecraft:piston_head[facing=west,short=false,type=normal]': 548,
    'minecraft:piston_head[facing=east,short=false,type=normal]': 549,
    'minecraft:piston_head[facing=down,short=false,type=sticky]': 552,
    'minecraft:piston_head[facing=up,short=false,type=sticky]': 553,
    'minecraft:piston_head[facing=north,short=false,type=sticky]': 554,
    'minecraft:piston_head[facing=south,short=false,type=sticky]': 555,
    'minecraft:piston_head[facing=west,short=false,type=sticky]': 556,
    'minecraft:piston_head[facing=east,short=false,type=sticky]': 557,
    'minecraft:white_wool': 560,
    'minecraft:orange_wool': 561,
    'minecraft:magenta_wool': 562,
    'minecraft:light_blue_wool': 563,
    'minecraft:yellow_wool': 564,
    'minecraft:lime_wool': 565,
    'minecraft:pink_wool': 566,
    'minecraft:gray_wool': 567,
    'minecraft:light_gray_wool': 568,
    'minecraft:cyan_wool': 569,
    'minecraft:purple_wool': 570,
    'minecraft:blue_wool': 571,
    'minecraft:brown_wool': 572,
    'minecraft:green_wool': 573,
    'minecraft:red_wool': 574,
    'minecraft:black_wool': 575,
    'minecraft:moving_piston[facing=down,type=normal]': 576,
    'minecraft:moving_piston[facing=up,type=normal]': 577,
    'minecraft:moving_piston[facing=north,type=normal]': 578,
    'minecraft:moving_piston[facing=south,type=normal]': 579,
    'minecraft:moving_piston[facing=west,type=normal]': 580,
    'minecraft:moving_piston[facing=east,type=normal]': 581,
    'minecraft:moving_piston[facing=down,type=sticky]': 584,
    'minecraft:moving_piston[facing=up,type=sticky]': 585,
    'minecraft:moving_piston[facing=north,type=sticky]': 586,
    'minecraft:moving_piston[facing=south,type=sticky]': 587,
    'minecraft:moving_piston[facing=west,type=sticky]': 588,
    'minecraft:moving_piston[facing=east,type=sticky]': 589,
    'minecraft:dandelion': 592,
    'minecraft:poppy': 608,
    'minecraft:blue_orchid': 609,
    'minecraft:allium': 610,
    'minecraft:azure_bluet': 611,
    'minecraft:red_tulip': 612,
    'minecraft:orange_tulip': 613,
    'minecraft:white_tulip': 614,
    'minecraft:pink_tulip': 615,
    'minecraft:oxeye_daisy': 616,
    'minecraft:brown_mushroom': 624,
    'minecraft:red_mushroom': 640,
    'minecraft:gold_block': 656,
    'minecraft:iron_block': 672,
    'minecraft:stone_slab[type=double,waterlogged=false]': 688,
    'minecraft:sandstone_slab[type=double,waterlogged=false]': 689,
    'minecraft:petrified_oak_slab[type=double,waterlogged=false]': 698,
    'minecraft:cobblestone_slab[type=double,waterlogged=false]': 699,
    'minecraft:brick_slab[type=double,waterlogged=false]': 700,
    'minecraft:stone_brick_slab[type=double,waterlogged=false]': 701,
    'minecraft:nether_brick_slab[type=double,waterlogged=false]': 702,
    'minecraft:quartz_slab[type=double,waterlogged=false]': 695,
    'minecraft:smooth_stone': 696,
    'minecraft:smooth_sandstone': 697,
    'minecraft:smooth_quartz': 703,
    'minecraft:stone_slab[type=bottom,waterlogged=false]': 704,
    'minecraft:sandstone_slab[type=bottom,waterlogged=false]': 705,
    'minecraft:petrified_oak_slab[type=bottom,waterlogged=false]': 706,
    'minecraft:cobblestone_slab[type=bottom,waterlogged=false]': 707,
    'minecraft:brick_slab[type=bottom,waterlogged=false]': 708,
    'minecraft:stone_brick_slab[type=bottom,waterlogged=false]': 709,
    'minecraft:nether_brick_slab[type=bottom,waterlogged=false]': 710,
    'minecraft:quartz_slab[type=bottom,waterlogged=false]': 711,
    'minecraft:stone_slab[type=top,waterlogged=false]': 712,
    'minecraft:sandstone_slab[type=top,waterlogged=false]': 713,
    'minecraft:petrified_oak_slab[type=top,waterlogged=false]': 714,
    'minecraft:cobblestone_slab[type=top,waterlogged=false]': 715,
    'minecraft:brick_slab[type=top,waterlogged=false]': 716,
    'minecraft:stone_brick_slab[type=top,waterlogged=false]': 717,
    'minecraft:nether_brick_slab[type=top,waterlogged=false]': 718,
    'minecraft:quartz_slab[type=top,waterlogged=false]': 719,
    'minecraft:bricks': 720,
    'minecraft:tnt': 737,
    'minecraft:bookshelf': 752,
    'minecraft:mossy_cobblestone': 768,
    'minecraft:obsidian': 784,
    'minecraft:wall_torch[facing=east]': 801,
    'minecraft:wall_torch[facing=west]': 802,
    'minecraft:wall_torch[facing=south]': 803,
    'minecraft:wall_torch[facing=north]': 804,
    'minecraft:torch': 805,
    'minecraft:fire[age=0,east=false,north=false,south=false,up=false,west=false]': 816,
    'minecraft:fire[age=1,east=false,north=false,south=false,up=false,west=false]': 817,
    'minecraft:fire[age=2,east=false,north=false,south=false,up=false,west=false]': 818,
    'minecraft:fire[age=3,east=false,north=false,south=false,up=false,west=false]': 819,
    'minecraft:fire[age=4,east=false,north=false,south=false,up=false,west=false]': 820,
    'minecraft:fire[age=5,east=false,north=false,south=false,up=false,west=false]': 821,
    'minecraft:fire[age=6,east=false,north=false,south=false,up=false,west=false]': 822,
    'minecraft:fire[age=7,east=false,north=false,south=false,up=false,west=false]': 823,
    'minecraft:fire[age=8,east=false,north=false,south=false,up=false,west=false]': 824,
    'minecraft:fire[age=9,east=false,north=false,south=false,up=false,west=false]': 825,
    'minecraft:fire[age=10,east=false,north=false,south=false,up=false,west=false]': 826,
    'minecraft:fire[age=11,east=false,north=false,south=false,up=false,west=false]': 827,
    'minecraft:fire[age=12,east=false,north=false,south=false,up=false,west=false]': 828,
    'minecraft:fire[age=13,east=false,north=false,south=false,up=false,west=false]': 829,
    'minecraft:fire[age=14,east=false,north=false,south=false,up=false,west=false]': 830,
    'minecraft:fire[age=15,east=false,north=false,south=false,up=false,west=false]': 831,
    'minecraft:spawner': 832,
    'minecraft:oak_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]': 848,
    'minecraft:oak_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]': 849,
    'minecraft:oak_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]': 850,
    'minecraft:oak_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]': 851,
    'minecraft:oak_stairs[facing=east,half=top,shape=straight,waterlogged=false]': 852,
    'minecraft:oak_stairs[facing=west,half=top,shape=straight,waterlogged=false]': 853,
    'minecraft:oak_stairs[facing=south,half=top,shape=straight,waterlogged=false]': 854,
    'minecraft:oak_stairs[facing=north,half=top,shape=straight,waterlogged=false]': 855,
    'minecraft:chest[facing=north,type=single,waterlogged=false]': 866,
    'minecraft:chest[facing=south,type=single,waterlogged=false]': 867,
    'minecraft:chest[facing=west,type=single,waterlogged=false]': 868,
    'minecraft:chest[facing=east,type=single,waterlogged=false]': 869,
    'minecraft:redstone_wire[east=none,north=none,power=0,south=none,west=none]': 880,
    'minecraft:redstone_wire[east=none,north=none,power=1,south=none,west=none]': 881,
    'minecraft:redstone_wire[east=none,north=none,power=2,south=none,west=none]': 882,
    'minecraft:redstone_wire[east=none,north=none,power=3,south=none,west=none]': 883,
    'minecraft:redstone_wire[east=none,north=none,power=4,south=none,west=none]': 884,
    'minecraft:redstone_wire[east=none,north=none,power=5,south=none,west=none]': 885,
    'minecraft:redstone_wire[east=none,north=none,power=6,south=none,west=none]': 886,
    'minecraft:redstone_wire[east=none,north=none,power=7,south=none,west=none]': 887,
    'minecraft:redstone_wire[east=none,north=none,power=8,south=none,west=none]': 888,
    'minecraft:redstone_wire[east=none,north=none,power=9,south=none,west=none]': 889,
    'minecraft:redstone_wire[east=none,north=none,power=10,south=none,west=none]': 890,
    'minecraft:redstone_wire[east=none,north=none,power=11,south=none,west=none]': 891,
    'minecraft:redstone_wire[east=none,north=none,power=12,south=none,west=none]': 892,
    'minecraft:redstone_wire[east=none,north=none,power=13,south=none,west=none]': 893,
    'minecraft:redstone_wire[east=none,north=none,power=14,south=none,west=none]': 894,
    'minecraft:redstone_wire[east=none,north=none,power=15,south=none,west=none]': 895,
    'minecraft:diamond_ore': 896,
    'minecraft:diamond_block': 912,
    'minecraft:crafting_table': 928,
    'minecraft:wheat[age=0]': 944,
    'minecraft:wheat[age=1]': 945,
    'minecraft:wheat[age=2]': 946,
    'minecraft:wheat[age=3]': 947,
    'minecraft:wheat[age=4]': 948,
    'minecraft:wheat[age=5]': 949,
    'minecraft:wheat[age=6]': 950,
    'minecraft:wheat[age=7]': 951,
    'minecraft:farmland[moisture=0]': 960,
    'minecraft:farmland[moisture=1]': 961,
    'minecraft:farmland[moisture=2]': 962,
    'minecraft:farmland[moisture=3]': 963,
    'minecraft:farmland[moisture=4]': 964,
    'minecraft:farmland[moisture=5]': 965,
    'minecraft:farmland[moisture=6]': 966,
    'minecraft:farmland[moisture=7]': 967,
    'minecraft:furnace[facing=north,lit=false]': 978,
    'minecraft:furnace[facing=south,lit=false]': 979,
    'minecraft:furnace[facing=west,lit=false]': 980,
    'minecraft:furnace[facing=east,lit=false]': 981,
    'minecraft:furnace[facing=north,lit=true]': 994,
    'minecraft:furnace[facing=south,lit=true]': 995,
    'minecraft:furnace[facing=west,lit=true]': 996,
    'minecraft:furnace[facing=east,lit=true]': 997,
    'minecraft:sign[rotation=0,waterlogged=false]': 1008,
    'minecraft:sign[rotation=1,waterlogged=false]': 1009,
    'minecraft:sign[rotation=2,waterlogged=false]': 1010,
    'minecraft:sign[rotation=3,waterlogged=false]': 1011,
    'minecraft:sign[rotation=4,waterlogged=false]': 1012,
    'minecraft:sign[rotation=5,waterlogged=false]': 1013,
    'minecraft:sign[rotation=6,waterlogged=false]': 1014,
    'minecraft:sign[rotation=7,waterlogged=false]': 1015,
    'minecraft:sign[rotation=8,waterlogged=false]': 1016,
    'minecraft:sign[rotation=9,waterlogged=false]': 1017,
    'minecraft:sign[rotation=10,waterlogged=false]': 1018,
    'minecraft:sign[rotation=11,waterlogged=false]': 1019,
    'minecraft:sign[rotation=12,waterlogged=false]': 1020,
    'minecraft:sign[rotation=13,waterlogged=false]': 1021,
    'minecraft:sign[rotation=14,waterlogged=false]': 1022,
    'minecraft:sign[rotation=15,waterlogged=false]': 1023,
    'minecraft:oak_door[facing=east,half=lower,hinge=right,open=false,powered=false]': 1024,
    'minecraft:oak_door[facing=south,half=lower,hinge=right,open=false,powered=false]': 1025,
    'minecraft:oak_door[facing=west,half=lower,hinge=right,open=false,powered=false]': 1026,
    'minecraft:oak_door[facing=north,half=lower,hinge=right,open=false,powered=false]': 1027,
    'minecraft:oak_door[facing=east,half=lower,hinge=right,open=true,powered=false]': 1028,
    'minecraft:oak_door[facing=south,half=lower,hinge=right,open=true,powered=false]': 1029,
    'minecraft:oak_door[facing=west,half=lower,hinge=right,open=true,powered=false]': 1030,
    'minecraft:oak_door[facing=north,half=lower,hinge=right,open=true,powered=false]': 1031,
    'minecraft:oak_door[facing=east,half=upper,hinge=left,open=false,powered=false]': 1032,
    'minecraft:oak_door[facing=east,half=upper,hinge=right,open=false,powered=false]': 1033,
    'minecraft:oak_door[facing=east,half=upper,hinge=left,open=false,powered=true]': 1034,
    'minecraft:oak_door[facing=east,half=upper,hinge=right,open=false,powered=true]': 1035,
    'minecraft:ladder[facing=north,waterlogged=false]': 1042,
    'minecraft:ladder[facing=south,waterlogged=false]': 1043,
    'minecraft:ladder[facing=west,waterlogged=false]': 1044,
    'minecraft:ladder[facing=east,waterlogged=false]': 1045,
    'minecraft:rail[shape=north_south]': 1056,
    'minecraft:rail[shape=east_west]': 1057,
    'minecraft:rail[shape=ascending_east]': 1058,
    'minecraft:rail[shape=ascending_west]': 1059,
    'minecraft:rail[shape=ascending_north]': 1060,
    'minecraft:rail[shape=ascending_south]': 1061,
    'minecraft:rail[shape=south_east]': 1062,
    'minecraft:rail[shape=south_west]': 1063,
    'minecraft:rail[shape=north_west]': 1064,
    'minecraft:rail[shape=north_east]': 1065,
    'minecraft:cobblestone_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]': 1072,
    'minecraft:cobblestone_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]': 1073,
    'minecraft:cobblestone_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]': 1074,
    'minecraft:cobblestone_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]': 1075,
    'minecraft:cobblestone_stairs[facing=east,half=top,shape=straight,waterlogged=false]': 1076,
    'minecraft:cobblestone_stairs[facing=west,half=top,shape=straight,waterlogged=false]': 1077,
    'minecraft:cobblestone_stairs[facing=south,half=top,shape=straight,waterlogged=false]': 1078,
    'minecraft:cobblestone_stairs[facing=north,half=top,shape=straight,waterlogged=false]': 1079,
    'minecraft:wall_sign[facing=north,waterlogged=false]': 1090,
    'minecraft:wall_sign[facing=south,waterlogged=false]': 1091,
    'minecraft:wall_sign[facing=west,waterlogged=false]': 1092,
    'minecraft:wall_sign[facing=east,waterlogged=false]': 1093,
    'minecraft:lever[face=ceiling,facing=west,powered=false]': 1104,
    'minecraft:lever[face=wall,facing=east,powered=false]': 1105,
    'minecraft:lever[face=wall,facing=west,powered=false]': 1106,
    'minecraft:lever[face=wall,facing=south,powered=false]': 1107,
    'minecraft:lever[face=wall,facing=north,powered=false]': 1108,
    'minecraft:lever[face=floor,facing=north,powered=false]': 1109,
    'minecraft:lever[face=floor,facing=west,powered=false]': 1110,
    'minecraft:lever[face=ceiling,facing=north,powered=false]': 1111,
    'minecraft:lever[face=ceiling,facing=west,powered=true]': 1112,
    'minecraft:lever[face=wall,facing=east,powered=true]': 1113,
    'minecraft:lever[face=wall,facing=west,powered=true]': 1114,
    'minecraft:lever[face=wall,facing=south,powered=true]': 1115,
    'minecraft:lever[face=wall,facing=north,powered=true]': 1116,
    'minecraft:lever[face=floor,facing=north,powered=true]': 1117,
    'minecraft:lever[face=floor,facing=west,powered=true]': 1118,
    'minecraft:lever[face=ceiling,facing=north,powered=true]': 1119,
    'minecraft:stone_pressure_plate[powered=false]': 1120,
    'minecraft:stone_pressure_plate[powered=true]': 1121,
    'minecraft:iron_door[facing=east,half=lower,hinge=right,open=false,powered=false]': 1136,
    'minecraft:iron_door[facing=south,half=lower,hinge=right,open=false,powered=false]': 1137,
    'minecraft:iron_door[facing=west,half=lower,hinge=right,open=false,powered=false]': 1138,
    'minecraft:iron_door[facing=north,half=lower,hinge=right,open=false,powered=false]': 1139,
    'minecraft:iron_door[facing=east,half=lower,hinge=right,open=true,powered=false]': 1140,
    'minecraft:iron_door[facing=south,half=lower,hinge=right,open=true,powered=false]': 1141,
    'minecraft:iron_door[facing=west,half=lower,hinge=right,open=true,powered=false]': 1142,
    'minecraft:iron_door[facing=north,half=lower,hinge=right,open=true,powered=false]': 1143,
    'minecraft:iron_door[facing=east,half=upper,hinge=left,open=false,powered=false]': 1144,
    'minecraft:iron_door[facing=east,half=upper,hinge=right,open=false,powered=false]': 1145,
    'minecraft:iron_door[facing=east,half=upper,hinge=left,open=false,powered=true]': 1146,
    'minecraft:iron_door[facing=east,half=upper,hinge=right,open=false,powered=true]': 1147,
    'minecraft:oak_pressure_plate[powered=false]': 1152,
    'minecraft:oak_pressure_plate[powered=true]': 1153,
    'minecraft:redstone_ore[lit=false]': 1168,
    'minecraft:redstone_ore[lit=true]': 1184,
    'minecraft:redstone_wall_torch[facing=east,lit=false]': 1201,
    'minecraft:redstone_wall_torch[facing=west,lit=false]': 1202,
    'minecraft:redstone_wall_torch[facing=south,lit=false]': 1203,
    'minecraft:redstone_wall_torch[facing=north,lit=false]': 1204,
    'minecraft:redstone_torch[lit=false]': 1205,
    'minecraft:redstone_wall_torch[facing=east,lit=true]': 1217,
    'minecraft:redstone_wall_torch[facing=west,lit=true]': 1218,
    'minecraft:redstone_wall_torch[facing=south,lit=true]': 1219,
    'minecraft:redstone_wall_torch[facing=north,lit=true]': 1220,
    'minecraft:redstone_torch[lit=true]': 1221,
    'minecraft:stone_button[face=ceiling,facing=north,powered=false]': 1232,
    'minecraft:stone_button[face=wall,facing=east,powered=false]': 1233,
    'minecraft:stone_button[face=wall,facing=west,powered=false]': 1234,
    'minecraft:stone_button[face=wall,facing=south,powered=false]': 1235,
    'minecraft:stone_button[face=wall,facing=north,powered=false]': 1236,
    'minecraft:stone_button[face=floor,facing=north,powered=false]': 1237,
    'minecraft:stone_button[face=ceiling,facing=north,powered=true]': 1240,
    'minecraft:stone_button[face=wall,facing=east,powered=true]': 1241,
    'minecraft:stone_button[face=wall,facing=west,powered=true]': 1242,
    'minecraft:stone_button[face=wall,facing=south,powered=true]': 1243,
    'minecraft:stone_button[face=wall,facing=north,powered=true]': 1244,
    'minecraft:stone_button[face=floor,facing=north,powered=true]': 1245,
    'minecraft:snow[layers=1]': 1248,
    'minecraft:snow[layers=2]': 1249,
    'minecraft:snow[layers=3]': 1250,
    'minecraft:snow[layers=4]': 1251,
    'minecraft:snow[layers=5]': 1252,
    'minecraft:snow[layers=6]': 1253,
    'minecraft:snow[layers=7]': 1254,
    'minecraft:snow[layers=8]': 1255,
    'minecraft:ice': 1264,
    'minecraft:snow_block': 1280,
    'minecraft:cactus[age=0]': 1296,
    'minecraft:cactus[age=1]': 1297,
    'minecraft:cactus[age=2]': 1298,
    'minecraft:cactus[age=3]': 1299,
    'minecraft:cactus[age=4]': 1300,
    'minecraft:cactus[age=5]': 1301,
    'minecraft:cactus[age=6]': 1302,
    'minecraft:cactus[age=7]': 1303,
    'minecraft:cactus[age=8]': 1304,
    'minecraft:cactus[age=9]': 1305,
    'minecraft:cactus[age=10]': 1306,
    'minecraft:cactus[age=11]': 1307,
    'minecraft:cactus[age=12]': 1308,
    'minecraft:cactus[age=13]': 1309,
    'minecraft:cactus[age=14]': 1310,
    'minecraft:cactus[age=15]': 1311,
    'minecraft:clay': 1312,
    'minecraft:sugar_cane[age=0]': 1328,
    'minecraft:sugar_cane[age=1]': 1329,
    'minecraft:sugar_cane[age=2]': 1330,
    'minecraft:sugar_cane[age=3]': 1331,
    'minecraft:sugar_cane[age=4]': 1332,
    'minecraft:sugar_cane[age=5]': 1333,
    'minecraft:sugar_cane[age=6]': 1334,
    'minecraft:sugar_cane[age=7]': 1335,
    'minecraft:sugar_cane[age=8]': 1336,
    'minecraft:sugar_cane[age=9]': 1337,
    'minecraft:sugar_cane[age=10]': 1338,
    'minecraft:sugar_cane[age=11]': 1339,
    'minecraft:sugar_cane[age=12]': 1340,
    'minecraft:sugar_cane[age=13]': 1341,
    'minecraft:sugar_cane[age=14]': 1342,
    'minecraft:sugar_cane[age=15]': 1343,
    'minecraft:jukebox[has_record=false]': 1344,
    'minecraft:jukebox[has_record=true]': 1345,
    'minecraft:oak_fence[east=false,north=false,south=false,waterlogged=false,west=false]': 1360,
    'minecraft:carved_pumpkin[facing=south]': 1376,
    'minecraft:carved_pumpkin[facing=west]': 1377,
    'minecraft:carved_pumpkin[facing=north]': 1378,
    'minecraft:carved_pumpkin[facing=east]': 1379,
    'minecraft:netherrack': 1392,
    'minecraft:soul_sand': 1408,
    'minecraft:glowstone': 1424,
    'minecraft:nether_portal[axis=x]': 1441,
    'minecraft:nether_portal[axis=z]': 1442,
    'minecraft:jack_o_lantern[facing=south]': 1456,
    'minecraft:jack_o_lantern[facing=west]': 1457,
    'minecraft:jack_o_lantern[facing=north]': 1458,
    'minecraft:jack_o_lantern[facing=east]': 1459,
    'minecraft:cake[bites=0]': 1472,
    'minecraft:cake[bites=1]': 1473,
    'minecraft:cake[bites=2]': 1474,
    'minecraft:cake[bites=3]': 1475,
    'minecraft:cake[bites=4]': 1476,
    'minecraft:cake[bites=5]': 1477,
    'minecraft:cake[bites=6]': 1478,
    'minecraft:repeater[delay=1,facing=south,locked=false,powered=false]': 1488,
    'minecraft:repeater[delay=1,facing=west,locked=false,powered=false]': 1489,
    'minecraft:repeater[delay=1,facing=north,locked=false,powered=false]': 1490,
    'minecraft:repeater[delay=1,facing=east,locked=false,powered=false]': 1491,
    'minecraft:repeater[delay=2,facing=south,locked=false,powered=false]': 1492,
    'minecraft:repeater[delay=2,facing=west,locked=false,powered=false]': 1493,
    'minecraft:repeater[delay=2,facing=north,locked=false,powered=false]': 1494,
    'minecraft:repeater[delay=2,facing=east,locked=false,powered=false]': 1495,
    'minecraft:repeater[delay=3,facing=south,locked=false,powered=false]': 1496,
    'minecraft:repeater[delay=3,facing=west,locked=false,powered=false]': 1497,
    'minecraft:repeater[delay=3,facing=north,locked=false,powered=false]': 1498,
    'minecraft:repeater[delay=3,facing=east,locked=false,powered=false]': 1499,
    'minecraft:repeater[delay=4,facing=south,locked=false,powered=false]': 1500,
    'minecraft:repeater[delay=4,facing=west,locked=false,powered=false]': 1501,
    'minecraft:repeater[delay=4,facing=north,locked=false,powered=false]': 1502,
    'minecraft:repeater[delay=4,facing=east,locked=false,powered=false]': 1503,
    'minecraft:repeater[delay=1,facing=south,locked=false,powered=true]': 1504,
    'minecraft:repeater[delay=1,facing=west,locked=false,powered=true]': 1505,
    'minecraft:repeater[delay=1,facing=north,locked=false,powered=true]': 1506,
    'minecraft:repeater[delay=1,facing=east,locked=false,powered=true]': 1507,
    'minecraft:repeater[delay=2,facing=south,locked=false,powered=true]': 1508,
    'minecraft:repeater[delay=2,facing=west,locked=false,powered=true]': 1509,
    'minecraft:repeater[delay=2,facing=north,locked=false,powered=true]': 1510,
    'minecraft:repeater[delay=2,facing=east,locked=false,powered=true]': 1511,
    'minecraft:repeater[delay=3,facing=south,locked=false,powered=true]': 1512,
    'minecraft:repeater[delay=3,facing=west,locked=false,powered=true]': 1513,
    'minecraft:repeater[delay=3,facing=north,locked=false,powered=true]': 1514,
    'minecraft:repeater[delay=3,facing=east,locked=false,powered=true]': 1515,
    'minecraft:repeater[delay=4,facing=south,locked=false,powered=true]': 1516,
    'minecraft:repeater[delay=4,facing=west,locked=false,powered=true]': 1517,
    'minecraft:repeater[delay=4,facing=north,locked=false,powered=true]': 1518,
    'minecraft:repeater[delay=4,facing=east,locked=false,powered=true]': 1519,
    'minecraft:white_stained_glass': 1520,
    'minecraft:orange_stained_glass': 1521,
    'minecraft:magenta_stained_glass': 1522,
    'minecraft:light_blue_stained_glass': 1523,
    'minecraft:yellow_stained_glass': 1524,
    'minecraft:lime_stained_glass': 1525,
    'minecraft:pink_stained_glass': 1526,
    'minecraft:gray_stained_glass': 1527,
    'minecraft:light_gray_stained_glass': 1528,
    'minecraft:cyan_stained_glass': 1529,
    'minecraft:purple_stained_glass': 1530,
    'minecraft:blue_stained_glass': 1531,
    'minecraft:brown_stained_glass': 1532,
    'minecraft:green_stained_glass': 1533,
    'minecraft:red_stained_glass': 1534,
    'minecraft:black_stained_glass': 1535,
    'minecraft:oak_trapdoor[facing=north,half=bottom,open=false,powered=false,waterlogged=false]': 1536,
    'minecraft:oak_trapdoor[facing=south,half=bottom,open=false,powered=false,waterlogged=false]': 1537,
    'minecraft:oak_trapdoor[facing=west,half=bottom,open=false,powered=false,waterlogged=false]': 1538,
    'minecraft:oak_trapdoor[facing=east,half=bottom,open=false,powered=false,waterlogged=false]': 1539,
    'minecraft:oak_trapdoor[facing=north,half=bottom,open=true,powered=false,waterlogged=false]': 1540,
    'minecraft:oak_trapdoor[facing=south,half=bottom,open=true,powered=false,waterlogged=false]': 1541,
    'minecraft:oak_trapdoor[facing=west,half=bottom,open=true,powered=false,waterlogged=false]': 1542,
    'minecraft:oak_trapdoor[facing=east,half=bottom,open=true,powered=false,waterlogged=false]': 1543,
    'minecraft:oak_trapdoor[facing=north,half=top,open=false,powered=false,waterlogged=false]': 1544,
    'minecraft:oak_trapdoor[facing=south,half=top,open=false,powered=false,waterlogged=false]': 1545,
    'minecraft:oak_trapdoor[facing=west,half=top,open=false,powered=false,waterlogged=false]': 1546,
    'minecraft:oak_trapdoor[facing=east,half=top,open=false,powered=false,waterlogged=false]': 1547,
    'minecraft:oak_trapdoor[facing=north,half=top,open=true,powered=false,waterlogged=false]': 1548,
    'minecraft:oak_trapdoor[facing=south,half=top,open=true,powered=false,waterlogged=false]': 1549,
    'minecraft:oak_trapdoor[facing=west,half=top,open=true,powered=false,waterlogged=false]': 1550,
    'minecraft:oak_trapdoor[facing=east,half=top,open=true,powered=false,waterlogged=false]': 1551,
    'minecraft:infested_stone': 1552,
    'minecraft:infested_cobblestone': 1553,
    'minecraft:infested_stone_bricks': 1554,
    'minecraft:infested_mossy_stone_bricks': 1555,
    'minecraft:infested_cracked_stone_bricks': 1556,
    'minecraft:infested_chiseled_stone_bricks': 1557,
    'minecraft:stone_bricks': 1568,
    'minecraft:mossy_stone_bricks': 1569,
    'minecraft:cracked_stone_bricks': 1570,
    'minecraft:chiseled_stone_bricks': 1571,
    'minecraft:brown_mushroom_block[down=false,east=false,north=false,south=false,up=false,west=false]': 1597,
    'minecraft:brown_mushroom_block[down=false,east=false,north=true,south=false,up=true,west=true]': 1585,
    'minecraft:brown_mushroom_block[down=false,east=false,north=true,south=false,up=true,west=false]': 1586,
    'minecraft:brown_mushroom_block[down=false,east=true,north=true,south=false,up=true,west=false]': 1587,
    'minecraft:brown_mushroom_block[down=false,east=false,north=false,south=false,up=true,west=true]': 1588,
    'minecraft:brown_mushroom_block[down=false,east=false,north=false,south=false,up=true,west=false]': 1589,
    'minecraft:brown_mushroom_block[down=false,east=true,north=false,south=false,up=true,west=false]': 1590,
    'minecraft:brown_mushroom_block[down=false,east=false,north=false,south=true,up=true,west=true]': 1591,
    'minecraft:brown_mushroom_block[down=false,east=false,north=false,south=true,up=true,west=false]': 1592,
    'minecraft:brown_mushroom_block[down=false,east=true,north=false,south=true,up=true,west=false]': 1593,
    'minecraft:mushroom_stem[down=false,east=true,north=true,south=true,up=false,west=true]': 1610,
    'minecraft:brown_mushroom_block[down=true,east=true,north=true,south=true,up=true,west=true]': 1598,
    'minecraft:brown_mushroom_block': 1598,
    'minecraft:mushroom_stem[down=true,east=true,north=true,south=true,up=true,west=true]': 1615,
    'minecraft:red_mushroom_block[down=false,east=false,north=false,south=false,up=false,west=false]': 1613,
    'minecraft:red_mushroom_block[down=false,east=false,north=true,south=false,up=true,west=true]': 1601,
    'minecraft:red_mushroom_block[down=false,east=false,north=true,south=false,up=true,west=false]': 1602,
    'minecraft:red_mushroom_block[down=false,east=true,north=true,south=false,up=true,west=false]': 1603,
    'minecraft:red_mushroom_block[down=false,east=false,north=false,south=false,up=true,west=true]': 1604,
    'minecraft:red_mushroom_block[down=false,east=false,north=false,south=false,up=true,west=false]': 1605,
    'minecraft:red_mushroom_block[down=false,east=true,north=false,south=false,up=true,west=false]': 1606,
    'minecraft:red_mushroom_block[down=false,east=false,north=false,south=true,up=true,west=true]': 1607,
    'minecraft:red_mushroom_block[down=false,east=false,north=false,south=true,up=true,west=false]': 1608,
    'minecraft:red_mushroom_block[down=false,east=true,north=false,south=true,up=true,west=false]': 1609,
    'minecraft:red_mushroom_block[down=true,east=true,north=true,south=true,up=true,west=true]': 1614,
    'minecraft:red_mushroom_block': 1614,
    'minecraft:iron_bars[east=false,north=false,south=false,waterlogged=false,west=false]': 1616,
    'minecraft:glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 1632,
    'minecraft:melon': 1648,
    'minecraft:pumpkin_stem[age=0]': 1664,
    'minecraft:pumpkin_stem[age=1]': 1665,
    'minecraft:pumpkin_stem[age=2]': 1666,
    'minecraft:pumpkin_stem[age=3]': 1667,
    'minecraft:pumpkin_stem[age=4]': 1668,
    'minecraft:pumpkin_stem[age=5]': 1669,
    'minecraft:pumpkin_stem[age=6]': 1670,
    'minecraft:pumpkin_stem[age=7]': 1671,
    'minecraft:melon_stem[age=0]': 1680,
    'minecraft:melon_stem[age=1]': 1681,
    'minecraft:melon_stem[age=2]': 1682,
    'minecraft:melon_stem[age=3]': 1683,
    'minecraft:melon_stem[age=4]': 1684,
    'minecraft:melon_stem[age=5]': 1685,
    'minecraft:melon_stem[age=6]': 1686,
    'minecraft:melon_stem[age=7]': 1687,
    'minecraft:vine[east=false,north=false,south=false,up=false,west=false]': 1696,
    'minecraft:vine[east=false,north=false,south=true,up=false,west=false]': 1697,
    'minecraft:vine[east=false,north=false,south=false,up=false,west=true]': 1698,
    'minecraft:vine[east=false,north=false,south=true,up=false,west=true]': 1699,
    'minecraft:vine[east=false,north=true,south=false,up=false,west=false]': 1700,
    'minecraft:vine[east=false,north=true,south=true,up=false,west=false]': 1701,
    'minecraft:vine[east=false,north=true,south=false,up=false,west=true]': 1702,
    'minecraft:vine[east=false,north=true,south=true,up=false,west=true]': 1703,
    'minecraft:vine[east=true,north=false,south=false,up=false,west=false]': 1704,
    'minecraft:vine[east=true,north=false,south=true,up=false,west=false]': 1705,
    'minecraft:vine[east=true,north=false,south=false,up=false,west=true]': 1706,
    'minecraft:vine[east=true,north=false,south=true,up=false,west=true]': 1707,
    'minecraft:vine[east=true,north=true,south=false,up=false,west=false]': 1708,
    'minecraft:vine[east=true,north=true,south=true,up=false,west=false]': 1709,
    'minecraft:vine[east=true,north=true,south=false,up=false,west=true]': 1710,
    'minecraft:vine[east=true,north=true,south=true,up=false,west=true]': 1711,
    'minecraft:oak_fence_gate[facing=south,in_wall=false,open=false,powered=false]': 1712,
    'minecraft:oak_fence_gate[facing=west,in_wall=false,open=false,powered=false]': 1713,
    'minecraft:oak_fence_gate[facing=north,in_wall=false,open=false,powered=false]': 1714,
    'minecraft:oak_fence_gate[facing=east,in_wall=false,open=false,powered=false]': 1715,
    'minecraft:oak_fence_gate[facing=south,in_wall=false,open=true,powered=false]': 1716,
    'minecraft:oak_fence_gate[facing=west,in_wall=false,open=true,powered=false]': 1717,
    'minecraft:oak_fence_gate[facing=north,in_wall=false,open=true,powered=false]': 1718,
    'minecraft:oak_fence_gate[facing=east,in_wall=false,open=true,powered=false]': 1719,
    'minecraft:oak_fence_gate[facing=south,in_wall=false,open=false,powered=true]': 1720,
    'minecraft:oak_fence_gate[facing=west,in_wall=false,open=false,powered=true]': 1721,
    'minecraft:oak_fence_gate[facing=north,in_wall=false,open=false,powered=true]': 1722,
    'minecraft:oak_fence_gate[facing=east,in_wall=false,open=false,powered=true]': 1723,
    'minecraft:oak_fence_gate[facing=south,in_wall=false,open=true,powered=true]': 1724,
    'minecraft:oak_fence_gate[facing=west,in_wall=false,open=true,powered=true]': 1725,
    'minecraft:oak_fence_gate[facing=north,in_wall=false,open=true,powered=true]': 1726,
    'minecraft:oak_fence_gate[facing=east,in_wall=false,open=true,powered=true]': 1727,
    'minecraft:brick_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]': 1728,
    'minecraft:brick_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]': 1729,
    'minecraft:brick_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]': 1730,
    'minecraft:brick_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]': 1731,
    'minecraft:brick_stairs[facing=east,half=top,shape=straight,waterlogged=false]': 1732,
    'minecraft:brick_stairs[facing=west,half=top,shape=straight,waterlogged=false]': 1733,
    'minecraft:brick_stairs[facing=south,half=top,shape=straight,waterlogged=false]': 1734,
    'minecraft:brick_stairs[facing=north,half=top,shape=straight,waterlogged=false]': 1735,
    'minecraft:stone_brick_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]': 1744,
    'minecraft:stone_brick_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]': 1745,
    'minecraft:stone_brick_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]': 1746,
    'minecraft:stone_brick_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]': 1747,
    'minecraft:stone_brick_stairs[facing=east,half=top,shape=straight,waterlogged=false]': 1748,
    'minecraft:stone_brick_stairs[facing=west,half=top,shape=straight,waterlogged=false]': 1749,
    'minecraft:stone_brick_stairs[facing=south,half=top,shape=straight,waterlogged=false]': 1750,
    'minecraft:stone_brick_stairs[facing=north,half=top,shape=straight,waterlogged=false]': 1751,
    'minecraft:mycelium[snowy=false]': 1760,
    'minecraft:lily_pad': 1776,
    'minecraft:nether_bricks': 1792,
    'minecraft:nether_brick_fence[east=false,north=false,south=false,waterlogged=false,west=false]': 1808,
    'minecraft:nether_brick_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]': 1824,
    'minecraft:nether_brick_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]': 1825,
    'minecraft:nether_brick_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]': 1826,
    'minecraft:nether_brick_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]': 1827,
    'minecraft:nether_brick_stairs[facing=east,half=top,shape=straight,waterlogged=false]': 1828,
    'minecraft:nether_brick_stairs[facing=west,half=top,shape=straight,waterlogged=false]': 1829,
    'minecraft:nether_brick_stairs[facing=south,half=top,shape=straight,waterlogged=false]': 1830,
    'minecraft:nether_brick_stairs[facing=north,half=top,shape=straight,waterlogged=false]': 1831,
    'minecraft:nether_wart[age=0]': 1840,
    'minecraft:nether_wart[age=1]': 1841,
    'minecraft:nether_wart[age=2]': 1842,
    'minecraft:nether_wart[age=3]': 1843,
    'minecraft:enchanting_table': 1856,
    'minecraft:brewing_stand[has_bottle_0=false,has_bottle_1=false,has_bottle_2=false]': 1872,
    'minecraft:brewing_stand[has_bottle_0=true,has_bottle_1=false,has_bottle_2=false]': 1873,
    'minecraft:brewing_stand[has_bottle_0=false,has_bottle_1=true,has_bottle_2=false]': 1874,
    'minecraft:brewing_stand[has_bottle_0=true,has_bottle_1=true,has_bottle_2=false]': 1875,
    'minecraft:brewing_stand[has_bottle_0=false,has_bottle_1=false,has_bottle_2=true]': 1876,
    'minecraft:brewing_stand[has_bottle_0=true,has_bottle_1=false,has_bottle_2=true]': 1877,
    'minecraft:brewing_stand[has_bottle_0=false,has_bottle_1=true,has_bottle_2=true]': 1878,
    'minecraft:brewing_stand[has_bottle_0=true,has_bottle_1=true,has_bottle_2=true]': 1879,
    'minecraft:cauldron[level=0]': 1888,
    'minecraft:cauldron[level=1]': 1889,
    'minecraft:cauldron[level=2]': 1890,
    'minecraft:cauldron[level=3]': 1891,
    'minecraft:end_portal': 1904,
    'minecraft:end_portal_frame[eye=false,facing=south]': 1920,
    'minecraft:end_portal_frame[eye=false,facing=west]': 1921,
    'minecraft:end_portal_frame[eye=false,facing=north]': 1922,
    'minecraft:end_portal_frame[eye=false,facing=east]': 1923,
    'minecraft:end_portal_frame[eye=true,facing=south]': 1924,
    'minecraft:end_portal_frame[eye=true,facing=west]': 1925,
    'minecraft:end_portal_frame[eye=true,facing=north]': 1926,
    'minecraft:end_portal_frame[eye=true,facing=east]': 1927,
    'minecraft:end_stone': 1936,
    'minecraft:dragon_egg': 1952,
    'minecraft:redstone_lamp[lit=false]': 1968,
    'minecraft:redstone_lamp[lit=true]': 1984,
    'minecraft:oak_slab[type=double,waterlogged=false]': 2000,
    'minecraft:spruce_slab[type=double,waterlogged=false]': 2001,
    'minecraft:birch_slab[type=double,waterlogged=false]': 2002,
    'minecraft:jungle_slab[type=double,waterlogged=false]': 2003,
    'minecraft:acacia_slab[type=double,waterlogged=false]': 2004,
    'minecraft:dark_oak_slab[type=double,waterlogged=false]': 2005,
    'minecraft:oak_slab[type=bottom,waterlogged=false]': 2016,
    'minecraft:spruce_slab[type=bottom,waterlogged=false]': 2017,
    'minecraft:birch_slab[type=bottom,waterlogged=false]': 2018,
    'minecraft:jungle_slab[type=bottom,waterlogged=false]': 2019,
    'minecraft:acacia_slab[type=bottom,waterlogged=false]': 2020,
    'minecraft:dark_oak_slab[type=bottom,waterlogged=false]': 2021,
    'minecraft:oak_slab[type=top,waterlogged=false]': 2024,
    'minecraft:spruce_slab[type=top,waterlogged=false]': 2025,
    'minecraft:birch_slab[type=top,waterlogged=false]': 2026,
    'minecraft:jungle_slab[type=top,waterlogged=false]': 2027,
    'minecraft:acacia_slab[type=top,waterlogged=false]': 2028,
    'minecraft:dark_oak_slab[type=top,waterlogged=false]': 2029,
    'minecraft:cocoa[age=0,facing=south]': 2032,
    'minecraft:cocoa[age=0,facing=west]': 2033,
    'minecraft:cocoa[age=0,facing=north]': 2034,
    'minecraft:cocoa[age=0,facing=east]': 2035,
    'minecraft:cocoa[age=1,facing=south]': 2036,
    'minecraft:cocoa[age=1,facing=west]': 2037,
    'minecraft:cocoa[age=1,facing=north]': 2038,
    'minecraft:cocoa[age=1,facing=east]': 2039,
    'minecraft:cocoa[age=2,facing=south]': 2040,
    'minecraft:cocoa[age=2,facing=west]': 2041,
    'minecraft:cocoa[age=2,facing=north]': 2042,
    'minecraft:cocoa[age=2,facing=east]': 2043,
    'minecraft:sandstone_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]': 2048,
    'minecraft:sandstone_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]': 2049,
    'minecraft:sandstone_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]': 2050,
    'minecraft:sandstone_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]': 2051,
    'minecraft:sandstone_stairs[facing=east,half=top,shape=straight,waterlogged=false]': 2052,
    'minecraft:sandstone_stairs[facing=west,half=top,shape=straight,waterlogged=false]': 2053,
    'minecraft:sandstone_stairs[facing=south,half=top,shape=straight,waterlogged=false]': 2054,
    'minecraft:sandstone_stairs[facing=north,half=top,shape=straight,waterlogged=false]': 2055,
    'minecraft:emerald_ore': 2064,
    'minecraft:ender_chest[facing=north,waterlogged=false]': 2082,
    'minecraft:ender_chest[facing=south,waterlogged=false]': 2083,
    'minecraft:ender_chest[facing=west,waterlogged=false]': 2084,
    'minecraft:ender_chest[facing=east,waterlogged=false]': 2085,
    'minecraft:tripwire_hook[attached=false,facing=south,powered=false]': 2096,
    'minecraft:tripwire_hook[attached=false,facing=west,powered=false]': 2097,
    'minecraft:tripwire_hook[attached=false,facing=north,powered=false]': 2098,
    'minecraft:tripwire_hook[attached=false,facing=east,powered=false]': 2099,
    'minecraft:tripwire_hook[attached=true,facing=south,powered=false]': 2100,
    'minecraft:tripwire_hook[attached=true,facing=west,powered=false]': 2101,
    'minecraft:tripwire_hook[attached=true,facing=north,powered=false]': 2102,
    'minecraft:tripwire_hook[attached=true,facing=east,powered=false]': 2103,
    'minecraft:tripwire_hook[attached=false,facing=south,powered=true]': 2104,
    'minecraft:tripwire_hook[attached=false,facing=west,powered=true]': 2105,
    'minecraft:tripwire_hook[attached=false,facing=north,powered=true]': 2106,
    'minecraft:tripwire_hook[attached=false,facing=east,powered=true]': 2107,
    'minecraft:tripwire_hook[attached=true,facing=south,powered=true]': 2108,
    'minecraft:tripwire_hook[attached=true,facing=west,powered=true]': 2109,
    'minecraft:tripwire_hook[attached=true,facing=north,powered=true]': 2110,
    'minecraft:tripwire_hook[attached=true,facing=east,powered=true]': 2111,
    'minecraft:tripwire[attached=false,disarmed=false,east=false,north=false,powered=false,south=false,west=false]': 2114,
    'minecraft:tripwire[attached=false,disarmed=false,east=false,north=false,powered=true,south=false,west=false]': 2115,
    'minecraft:tripwire[attached=true,disarmed=false,east=false,north=false,powered=false,south=false,west=false]': 2118,
    'minecraft:tripwire[attached=true,disarmed=false,east=false,north=false,powered=true,south=false,west=false]': 2119,
    'minecraft:tripwire[attached=false,disarmed=true,east=false,north=false,powered=false,south=false,west=false]': 2122,
    'minecraft:tripwire[attached=false,disarmed=true,east=false,north=false,powered=true,south=false,west=false]': 2123,
    'minecraft:tripwire[attached=true,disarmed=true,east=false,north=false,powered=false,south=false,west=false]': 2126,
    'minecraft:tripwire[attached=true,disarmed=true,east=false,north=false,powered=true,south=false,west=false]': 2125,
    'minecraft:emerald_block': 2128,
    'minecraft:spruce_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]': 2144,
    'minecraft:spruce_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]': 2145,
    'minecraft:spruce_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]': 2146,
    'minecraft:spruce_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]': 2147,
    'minecraft:spruce_stairs[facing=east,half=top,shape=straight,waterlogged=false]': 2148,
    'minecraft:spruce_stairs[facing=west,half=top,shape=straight,waterlogged=false]': 2149,
    'minecraft:spruce_stairs[facing=south,half=top,shape=straight,waterlogged=false]': 2150,
    'minecraft:spruce_stairs[facing=north,half=top,shape=straight,waterlogged=false]': 2151,
    'minecraft:birch_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]': 2160,
    'minecraft:birch_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]': 2161,
    'minecraft:birch_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]': 2162,
    'minecraft:birch_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]': 2163,
    'minecraft:birch_stairs[facing=east,half=top,shape=straight,waterlogged=false]': 2164,
    'minecraft:birch_stairs[facing=west,half=top,shape=straight,waterlogged=false]': 2165,
    'minecraft:birch_stairs[facing=south,half=top,shape=straight,waterlogged=false]': 2166,
    'minecraft:birch_stairs[facing=north,half=top,shape=straight,waterlogged=false]': 2167,
    'minecraft:jungle_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]': 2176,
    'minecraft:jungle_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]': 2177,
    'minecraft:jungle_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]': 2178,
    'minecraft:jungle_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]': 2179,
    'minecraft:jungle_stairs[facing=east,half=top,shape=straight,waterlogged=false]': 2180,
    'minecraft:jungle_stairs[facing=west,half=top,shape=straight,waterlogged=false]': 2181,
    'minecraft:jungle_stairs[facing=south,half=top,shape=straight,waterlogged=false]': 2182,
    'minecraft:jungle_stairs[facing=north,half=top,shape=straight,waterlogged=false]': 2183,
    'minecraft:command_block[conditional=false,facing=down]': 2192,
    'minecraft:command_block[conditional=false,facing=up]': 2193,
    'minecraft:command_block[conditional=false,facing=north]': 2194,
    'minecraft:command_block[conditional=false,facing=south]': 2195,
    'minecraft:command_block[conditional=false,facing=west]': 2196,
    'minecraft:command_block[conditional=false,facing=east]': 2197,
    'minecraft:command_block[conditional=true,facing=down]': 2200,
    'minecraft:command_block[conditional=true,facing=up]': 2201,
    'minecraft:command_block[conditional=true,facing=north]': 2202,
    'minecraft:command_block[conditional=true,facing=south]': 2203,
    'minecraft:command_block[conditional=true,facing=west]': 2204,
    'minecraft:command_block[conditional=true,facing=east]': 2205,
    'minecraft:beacon': 2208,
    'minecraft:cobblestone_wall[east=false,north=false,south=false,up=true,waterlogged=false,west=false]': 2224,
    'minecraft:mossy_cobblestone_wall[east=false,north=false,south=false,up=true,waterlogged=false,west=false]': 2225,
    'minecraft:flower_pot': 2255,
    'minecraft:carrots[age=0]': 2256,
    'minecraft:carrots[age=1]': 2257,
    'minecraft:carrots[age=2]': 2258,
    'minecraft:carrots[age=3]': 2259,
    'minecraft:carrots[age=4]': 2260,
    'minecraft:carrots[age=5]': 2261,
    'minecraft:carrots[age=6]': 2262,
    'minecraft:carrots[age=7]': 2263,
    'minecraft:potatoes[age=0]': 2272,
    'minecraft:potatoes[age=1]': 2273,
    'minecraft:potatoes[age=2]': 2274,
    'minecraft:potatoes[age=3]': 2275,
    'minecraft:potatoes[age=4]': 2276,
    'minecraft:potatoes[age=5]': 2277,
    'minecraft:potatoes[age=6]': 2278,
    'minecraft:potatoes[age=7]': 2279,
    'minecraft:oak_button[face=ceiling,facing=north,powered=false]': 2288,
    'minecraft:oak_button[face=wall,facing=east,powered=false]': 2289,
    'minecraft:oak_button[face=wall,facing=west,powered=false]': 2290,
    'minecraft:oak_button[face=wall,facing=south,powered=false]': 2291,
    'minecraft:oak_button[face=wall,facing=north,powered=false]': 2292,
    'minecraft:oak_button[face=floor,facing=north,powered=false]': 2293,
    'minecraft:oak_button[face=ceiling,facing=north,powered=true]': 2296,
    'minecraft:oak_button[face=wall,facing=east,powered=true]': 2297,
    'minecraft:oak_button[face=wall,facing=west,powered=true]': 2298,
    'minecraft:oak_button[face=wall,facing=south,powered=true]': 2299,
    'minecraft:oak_button[face=wall,facing=north,powered=true]': 2300,
    'minecraft:oak_button[face=floor,facing=north,powered=true]': 2301,
    'minecraft:skeleton_skull[rotation=0]': 2313,
    'minecraft:skeleton_wall_skull[facing=north]': 2314,
    'minecraft:skeleton_wall_skull[facing=south]': 2315,
    'minecraft:skeleton_wall_skull[facing=west]': 2316,
    'minecraft:skeleton_wall_skull[facing=east]': 2317,
    'minecraft:anvil[facing=south]': 2320,
    'minecraft:anvil[facing=west]': 2321,
    'minecraft:anvil[facing=north]': 2322,
    'minecraft:anvil[facing=east]': 2323,
    'minecraft:chipped_anvil[facing=south]': 2324,
    'minecraft:chipped_anvil[facing=west]': 2325,
    'minecraft:chipped_anvil[facing=north]': 2326,
    'minecraft:chipped_anvil[facing=east]': 2327,
    'minecraft:damaged_anvil[facing=south]': 2328,
    'minecraft:damaged_anvil[facing=west]': 2329,
    'minecraft:damaged_anvil[facing=north]': 2330,
    'minecraft:damaged_anvil[facing=east]': 2331,
    'minecraft:trapped_chest[facing=north,type=single,waterlogged=false]': 2338,
    'minecraft:trapped_chest[facing=south,type=single,waterlogged=false]': 2339,
    'minecraft:trapped_chest[facing=west,type=single,waterlogged=false]': 2340,
    'minecraft:trapped_chest[facing=east,type=single,waterlogged=false]': 2341,
    'minecraft:light_weighted_pressure_plate[power=0]': 2352,
    'minecraft:light_weighted_pressure_plate[power=1]': 2353,
    'minecraft:light_weighted_pressure_plate[power=2]': 2354,
    'minecraft:light_weighted_pressure_plate[power=3]': 2355,
    'minecraft:light_weighted_pressure_plate[power=4]': 2356,
    'minecraft:light_weighted_pressure_plate[power=5]': 2357,
    'minecraft:light_weighted_pressure_plate[power=6]': 2358,
    'minecraft:light_weighted_pressure_plate[power=7]': 2359,
    'minecraft:light_weighted_pressure_plate[power=8]': 2360,
    'minecraft:light_weighted_pressure_plate[power=9]': 2361,
    'minecraft:light_weighted_pressure_plate[power=10]': 2362,
    'minecraft:light_weighted_pressure_plate[power=11]': 2363,
    'minecraft:light_weighted_pressure_plate[power=12]': 2364,
    'minecraft:light_weighted_pressure_plate[power=13]': 2365,
    'minecraft:light_weighted_pressure_plate[power=14]': 2366,
    'minecraft:light_weighted_pressure_plate[power=15]': 2367,
    'minecraft:heavy_weighted_pressure_plate[power=0]': 2368,
    'minecraft:heavy_weighted_pressure_plate[power=1]': 2369,
    'minecraft:heavy_weighted_pressure_plate[power=2]': 2370,
    'minecraft:heavy_weighted_pressure_plate[power=3]': 2371,
    'minecraft:heavy_weighted_pressure_plate[power=4]': 2372,
    'minecraft:heavy_weighted_pressure_plate[power=5]': 2373,
    'minecraft:heavy_weighted_pressure_plate[power=6]': 2374,
    'minecraft:heavy_weighted_pressure_plate[power=7]': 2375,
    'minecraft:heavy_weighted_pressure_plate[power=8]': 2376,
    'minecraft:heavy_weighted_pressure_plate[power=9]': 2377,
    'minecraft:heavy_weighted_pressure_plate[power=10]': 2378,
    'minecraft:heavy_weighted_pressure_plate[power=11]': 2379,
    'minecraft:heavy_weighted_pressure_plate[power=12]': 2380,
    'minecraft:heavy_weighted_pressure_plate[power=13]': 2381,
    'minecraft:heavy_weighted_pressure_plate[power=14]': 2382,
    'minecraft:heavy_weighted_pressure_plate[power=15]': 2383,
    'minecraft:comparator[facing=south,mode=compare,powered=false]': 2400,
    'minecraft:comparator[facing=west,mode=compare,powered=false]': 2401,
    'minecraft:comparator[facing=north,mode=compare,powered=false]': 2402,
    'minecraft:comparator[facing=east,mode=compare,powered=false]': 2403,
    'minecraft:comparator[facing=south,mode=subtract,powered=false]': 2404,
    'minecraft:comparator[facing=west,mode=subtract,powered=false]': 2405,
    'minecraft:comparator[facing=north,mode=subtract,powered=false]': 2406,
    'minecraft:comparator[facing=east,mode=subtract,powered=false]': 2407,
    'minecraft:comparator[facing=south,mode=compare,powered=true]': 2408,
    'minecraft:comparator[facing=west,mode=compare,powered=true]': 2409,
    'minecraft:comparator[facing=north,mode=compare,powered=true]': 2410,
    'minecraft:comparator[facing=east,mode=compare,powered=true]': 2411,
    'minecraft:comparator[facing=south,mode=subtract,powered=true]': 2412,
    'minecraft:comparator[facing=west,mode=subtract,powered=true]': 2413,
    'minecraft:comparator[facing=north,mode=subtract,powered=true]': 2414,
    'minecraft:comparator[facing=east,mode=subtract,powered=true]': 2415,
    'minecraft:daylight_detector[inverted=false,power=0]': 2416,
    'minecraft:daylight_detector[inverted=false,power=1]': 2417,
    'minecraft:daylight_detector[inverted=false,power=2]': 2418,
    'minecraft:daylight_detector[inverted=false,power=3]': 2419,
    'minecraft:daylight_detector[inverted=false,power=4]': 2420,
    'minecraft:daylight_detector[inverted=false,power=5]': 2421,
    'minecraft:daylight_detector[inverted=false,power=6]': 2422,
    'minecraft:daylight_detector[inverted=false,power=7]': 2423,
    'minecraft:daylight_detector[inverted=false,power=8]': 2424,
    'minecraft:daylight_detector[inverted=false,power=9]': 2425,
    'minecraft:daylight_detector[inverted=false,power=10]': 2426,
    'minecraft:daylight_detector[inverted=false,power=11]': 2427,
    'minecraft:daylight_detector[inverted=false,power=12]': 2428,
    'minecraft:daylight_detector[inverted=false,power=13]': 2429,
    'minecraft:daylight_detector[inverted=false,power=14]': 2430,
    'minecraft:daylight_detector[inverted=false,power=15]': 2431,
    'minecraft:redstone_block': 2432,
    'minecraft:nether_quartz_ore': 2448,
    'minecraft:hopper[enabled=true,facing=down]': 2464,
    'minecraft:hopper[enabled=true,facing=north]': 2466,
    'minecraft:hopper[enabled=true,facing=south]': 2467,
    'minecraft:hopper[enabled=true,facing=west]': 2468,
    'minecraft:hopper[enabled=true,facing=east]': 2469,
    'minecraft:hopper[enabled=false,facing=down]': 2472,
    'minecraft:hopper[enabled=false,facing=north]': 2474,
    'minecraft:hopper[enabled=false,facing=south]': 2475,
    'minecraft:hopper[enabled=false,facing=west]': 2476,
    'minecraft:hopper[enabled=false,facing=east]': 2477,
    'minecraft:quartz_block': 2480,
    'minecraft:chiseled_quartz_block': 2481,
    'minecraft:quartz_pillar[axis=y]': 2482,
    'minecraft:quartz_pillar[axis=x]': 2483,
    'minecraft:quartz_pillar[axis=z]': 2484,
    'minecraft:quartz_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]': 2496,
    'minecraft:quartz_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]': 2497,
    'minecraft:quartz_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]': 2498,
    'minecraft:quartz_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]': 2499,
    'minecraft:quartz_stairs[facing=east,half=top,shape=straight,waterlogged=false]': 2500,
    'minecraft:quartz_stairs[facing=west,half=top,shape=straight,waterlogged=false]': 2501,
    'minecraft:quartz_stairs[facing=south,half=top,shape=straight,waterlogged=false]': 2502,
    'minecraft:quartz_stairs[facing=north,half=top,shape=straight,waterlogged=false]': 2503,
    'minecraft:activator_rail[powered=false,shape=north_south]': 2512,
    'minecraft:activator_rail[powered=false,shape=east_west]': 2513,
    'minecraft:activator_rail[powered=false,shape=ascending_east]': 2514,
    'minecraft:activator_rail[powered=false,shape=ascending_west]': 2515,
    'minecraft:activator_rail[powered=false,shape=ascending_north]': 2516,
    'minecraft:activator_rail[powered=false,shape=ascending_south]': 2517,
    'minecraft:activator_rail[powered=true,shape=north_south]': 2520,
    'minecraft:activator_rail[powered=true,shape=east_west]': 2521,
    'minecraft:activator_rail[powered=true,shape=ascending_east]': 2522,
    'minecraft:activator_rail[powered=true,shape=ascending_west]': 2523,
    'minecraft:activator_rail[powered=true,shape=ascending_north]': 2524,
    'minecraft:activator_rail[powered=true,shape=ascending_south]': 2525,
    'minecraft:dropper[facing=down,triggered=false]': 2528,
    'minecraft:dropper[facing=up,triggered=false]': 2529,
    'minecraft:dropper[facing=north,triggered=false]': 2530,
    'minecraft:dropper[facing=south,triggered=false]': 2531,
    'minecraft:dropper[facing=west,triggered=false]': 2532,
    'minecraft:dropper[facing=east,triggered=false]': 2533,
    'minecraft:dropper[facing=down,triggered=true]': 2536,
    'minecraft:dropper[facing=up,triggered=true]': 2537,
    'minecraft:dropper[facing=north,triggered=true]': 2538,
    'minecraft:dropper[facing=south,triggered=true]': 2539,
    'minecraft:dropper[facing=west,triggered=true]': 2540,
    'minecraft:dropper[facing=east,triggered=true]': 2541,
    'minecraft:white_terracotta': 2544,
    'minecraft:orange_terracotta': 2545,
    'minecraft:magenta_terracotta': 2546,
    'minecraft:light_blue_terracotta': 2547,
    'minecraft:yellow_terracotta': 2548,
    'minecraft:lime_terracotta': 2549,
    'minecraft:pink_terracotta': 2550,
    'minecraft:gray_terracotta': 2551,
    'minecraft:light_gray_terracotta': 2552,
    'minecraft:cyan_terracotta': 2553,
    'minecraft:purple_terracotta': 2554,
    'minecraft:blue_terracotta': 2555,
    'minecraft:brown_terracotta': 2556,
    'minecraft:green_terracotta': 2557,
    'minecraft:red_terracotta': 2558,
    'minecraft:black_terracotta': 2559,
    'minecraft:white_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2560,
    'minecraft:orange_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2561,
    'minecraft:magenta_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2562,
    'minecraft:light_blue_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2563,
    'minecraft:yellow_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2564,
    'minecraft:lime_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2565,
    'minecraft:pink_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2566,
    'minecraft:gray_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2567,
    'minecraft:light_gray_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2568,
    'minecraft:cyan_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2569,
    'minecraft:purple_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2570,
    'minecraft:blue_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2571,
    'minecraft:brown_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2572,
    'minecraft:green_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2573,
    'minecraft:red_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2574,
    'minecraft:black_stained_glass_pane[east=false,north=false,south=false,waterlogged=false,west=false]': 2575,
    'minecraft:acacia_leaves[distance=1,persistent=false]': 2576,
    'minecraft:dark_oak_leaves[distance=1,persistent=false]': 2577,
    'minecraft:acacia_leaves[distance=1,persistent=true]': 2580,
    'minecraft:dark_oak_leaves[distance=1,persistent=true]': 2581,
    'minecraft:acacia_leaves[distance=2,persistent=false]': 2584,
    'minecraft:dark_oak_leaves[distance=2,persistent=false]': 2585,
    'minecraft:acacia_leaves[distance=2,persistent=true]': 2588,
    'minecraft:dark_oak_leaves[distance=2,persistent=true]': 2589,
    'minecraft:acacia_log[axis=y]': 2592,
    'minecraft:dark_oak_log[axis=y]': 2593,
    'minecraft:acacia_log[axis=x]': 2596,
    'minecraft:dark_oak_log[axis=x]': 2597,
    'minecraft:acacia_log[axis=z]': 2600,
    'minecraft:dark_oak_log[axis=z]': 2601,
    'minecraft:acacia_wood[axis=y]': 2604,
    'minecraft:dark_oak_wood[axis=y]': 2605,
    'minecraft:acacia_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]': 2608,
    'minecraft:acacia_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]': 2609,
    'minecraft:acacia_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]': 2610,
    'minecraft:acacia_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]': 2611,
    'minecraft:acacia_stairs[facing=east,half=top,shape=straight,waterlogged=false]': 2612,
    'minecraft:acacia_stairs[facing=west,half=top,shape=straight,waterlogged=false]': 2613,
    'minecraft:acacia_stairs[facing=south,half=top,shape=straight,waterlogged=false]': 2614,
    'minecraft:acacia_stairs[facing=north,half=top,shape=straight,waterlogged=false]': 2615,
    'minecraft:dark_oak_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]': 2624,
    'minecraft:dark_oak_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]': 2625,
    'minecraft:dark_oak_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]': 2626,
    'minecraft:dark_oak_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]': 2627,
    'minecraft:dark_oak_stairs[facing=east,half=top,shape=straight,waterlogged=false]': 2628,
    'minecraft:dark_oak_stairs[facing=west,half=top,shape=straight,waterlogged=false]': 2629,
    'minecraft:dark_oak_stairs[facing=south,half=top,shape=straight,waterlogged=false]': 2630,
    'minecraft:dark_oak_stairs[facing=north,half=top,shape=straight,waterlogged=false]': 2631,
    'minecraft:slime_block': 2640,
    'minecraft:barrier': 2656,
    'minecraft:iron_trapdoor[facing=north,half=bottom,open=false,powered=false,waterlogged=false]': 2672,
    'minecraft:iron_trapdoor[facing=south,half=bottom,open=false,powered=false,waterlogged=false]': 2673,
    'minecraft:iron_trapdoor[facing=west,half=bottom,open=false,powered=false,waterlogged=false]': 2674,
    'minecraft:iron_trapdoor[facing=east,half=bottom,open=false,powered=false,waterlogged=false]': 2675,
    'minecraft:iron_trapdoor[facing=north,half=bottom,open=true,powered=false,waterlogged=false]': 2676,
    'minecraft:iron_trapdoor[facing=south,half=bottom,open=true,powered=false,waterlogged=false]': 2677,
    'minecraft:iron_trapdoor[facing=west,half=bottom,open=true,powered=false,waterlogged=false]': 2678,
    'minecraft:iron_trapdoor[facing=east,half=bottom,open=true,powered=false,waterlogged=false]': 2679,
    'minecraft:iron_trapdoor[facing=north,half=top,open=false,powered=false,waterlogged=false]': 2680,
    'minecraft:iron_trapdoor[facing=south,half=top,open=false,powered=false,waterlogged=false]': 2681,
    'minecraft:iron_trapdoor[facing=west,half=top,open=false,powered=false,waterlogged=false]': 2682,
    'minecraft:iron_trapdoor[facing=east,half=top,open=false,powered=false,waterlogged=false]': 2683,
    'minecraft:iron_trapdoor[facing=north,half=top,open=true,powered=false,waterlogged=false]': 2684,
    'minecraft:iron_trapdoor[facing=south,half=top,open=true,powered=false,waterlogged=false]': 2685,
    'minecraft:iron_trapdoor[facing=west,half=top,open=true,powered=false,waterlogged=false]': 2686,
    'minecraft:iron_trapdoor[facing=east,half=top,open=true,powered=false,waterlogged=false]': 2687,
    'minecraft:prismarine': 2688,
    'minecraft:prismarine_bricks': 2689,
    'minecraft:dark_prismarine': 2690,
    'minecraft:sea_lantern': 2704,
    'minecraft:hay_block[axis=y]': 2720,
    'minecraft:hay_block[axis=x]': 2724,
    'minecraft:hay_block[axis=z]': 2728,
    'minecraft:white_carpet': 2736,
    'minecraft:orange_carpet': 2737,
    'minecraft:magenta_carpet': 2738,
    'minecraft:light_blue_carpet': 2739,
    'minecraft:yellow_carpet': 2740,
    'minecraft:lime_carpet': 2741,
    'minecraft:pink_carpet': 2742,
    'minecraft:gray_carpet': 2743,
    'minecraft:light_gray_carpet': 2744,
    'minecraft:cyan_carpet': 2745,
    'minecraft:purple_carpet': 2746,
    'minecraft:blue_carpet': 2747,
    'minecraft:brown_carpet': 2748,
    'minecraft:green_carpet': 2749,
    'minecraft:red_carpet': 2750,
    'minecraft:black_carpet': 2751,
    'minecraft:terracotta': 2752,
    'minecraft:coal_block': 2768,
    'minecraft:packed_ice': 2784,
    'minecraft:sunflower[half=lower]': 2800,
    'minecraft:lilac[half=lower]': 2801,
    'minecraft:tall_grass[half=lower]': 2802,
    'minecraft:large_fern[half=lower]': 2803,
    'minecraft:rose_bush[half=lower]': 2804,
    'minecraft:peony[half=lower]': 2805,
    'minecraft:peony[half=upper]': 2811,
    'minecraft:white_banner[rotation=0]': 2816,
    'minecraft:white_banner[rotation=1]': 2817,
    'minecraft:white_banner[rotation=2]': 2818,
    'minecraft:white_banner[rotation=3]': 2819,
    'minecraft:white_banner[rotation=4]': 2820,
    'minecraft:white_banner[rotation=5]': 2821,
    'minecraft:white_banner[rotation=6]': 2822,
    'minecraft:white_banner[rotation=7]': 2823,
    'minecraft:white_banner[rotation=8]': 2824,
    'minecraft:white_banner[rotation=9]': 2825,
    'minecraft:white_banner[rotation=10]': 2826,
    'minecraft:white_banner[rotation=11]': 2827,
    'minecraft:white_banner[rotation=12]': 2828,
    'minecraft:white_banner[rotation=13]': 2829,
    'minecraft:white_banner[rotation=14]': 2830,
    'minecraft:white_banner[rotation=15]': 2831,
    'minecraft:white_wall_banner[facing=north]': 2834,
    'minecraft:white_wall_banner[facing=south]': 2835,
    'minecraft:white_wall_banner[facing=west]': 2836,
    'minecraft:white_wall_banner[facing=east]': 2837,
    'minecraft:daylight_detector[inverted=true,power=0]': 2848,
    'minecraft:daylight_detector[inverted=true,power=1]': 2849,
    'minecraft:daylight_detector[inverted=true,power=2]': 2850,
    'minecraft:daylight_detector[inverted=true,power=3]': 2851,
    'minecraft:daylight_detector[inverted=true,power=4]': 2852,
    'minecraft:daylight_detector[inverted=true,power=5]': 2853,
    'minecraft:daylight_detector[inverted=true,power=6]': 2854,
    'minecraft:daylight_detector[inverted=true,power=7]': 2855,
    'minecraft:daylight_detector[inverted=true,power=8]': 2856,
    'minecraft:daylight_detector[inverted=true,power=9]': 2857,
    'minecraft:daylight_detector[inverted=true,power=10]': 2858,
    'minecraft:daylight_detector[inverted=true,power=11]': 2859,
    'minecraft:daylight_detector[inverted=true,power=12]': 2860,
    'minecraft:daylight_detector[inverted=true,power=13]': 2861,
    'minecraft:daylight_detector[inverted=true,power=14]': 2862,
    'minecraft:daylight_detector[inverted=true,power=15]': 2863,
    'minecraft:red_sandstone': 2864,
    'minecraft:chiseled_red_sandstone': 2865,
    'minecraft:cut_red_sandstone': 2866,
    'minecraft:red_sandstone_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]': 2880,
    'minecraft:red_sandstone_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]': 2881,
    'minecraft:red_sandstone_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]': 2882,
    'minecraft:red_sandstone_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]': 2883,
    'minecraft:red_sandstone_stairs[facing=east,half=top,shape=straight,waterlogged=false]': 2884,
    'minecraft:red_sandstone_stairs[facing=west,half=top,shape=straight,waterlogged=false]': 2885,
    'minecraft:red_sandstone_stairs[facing=south,half=top,shape=straight,waterlogged=false]': 2886,
    'minecraft:red_sandstone_stairs[facing=north,half=top,shape=straight,waterlogged=false]': 2887,
    'minecraft:red_sandstone_slab[type=double,waterlogged=false]': 2896,
    'minecraft:smooth_red_sandstone': 2904,
    'minecraft:red_sandstone_slab[type=bottom,waterlogged=false]': 2912,
    'minecraft:red_sandstone_slab[type=top,waterlogged=false]': 2920,
    'minecraft:spruce_fence_gate[facing=south,in_wall=false,open=false,powered=false]': 2928,
    'minecraft:spruce_fence_gate[facing=west,in_wall=false,open=false,powered=false]': 2929,
    'minecraft:spruce_fence_gate[facing=north,in_wall=false,open=false,powered=false]': 2930,
    'minecraft:spruce_fence_gate[facing=east,in_wall=false,open=false,powered=false]': 2931,
    'minecraft:spruce_fence_gate[facing=south,in_wall=false,open=true,powered=false]': 2932,
    'minecraft:spruce_fence_gate[facing=west,in_wall=false,open=true,powered=false]': 2933,
    'minecraft:spruce_fence_gate[facing=north,in_wall=false,open=true,powered=false]': 2934,
    'minecraft:spruce_fence_gate[facing=east,in_wall=false,open=true,powered=false]': 2935,
    'minecraft:spruce_fence_gate[facing=south,in_wall=false,open=false,powered=true]': 2936,
    'minecraft:spruce_fence_gate[facing=west,in_wall=false,open=false,powered=true]': 2937,
    'minecraft:spruce_fence_gate[facing=north,in_wall=false,open=false,powered=true]': 2938,
    'minecraft:spruce_fence_gate[facing=east,in_wall=false,open=false,powered=true]': 2939,
    'minecraft:spruce_fence_gate[facing=south,in_wall=false,open=true,powered=true]': 2940,
    'minecraft:spruce_fence_gate[facing=west,in_wall=false,open=true,powered=true]': 2941,
    'minecraft:spruce_fence_gate[facing=north,in_wall=false,open=true,powered=true]': 2942,
    'minecraft:spruce_fence_gate[facing=east,in_wall=false,open=true,powered=true]': 2943,
    'minecraft:birch_fence_gate[facing=south,in_wall=false,open=false,powered=false]': 2944,
    'minecraft:birch_fence_gate[facing=west,in_wall=false,open=false,powered=false]': 2945,
    'minecraft:birch_fence_gate[facing=north,in_wall=false,open=false,powered=false]': 2946,
    'minecraft:birch_fence_gate[facing=east,in_wall=false,open=false,powered=false]': 2947,
    'minecraft:birch_fence_gate[facing=south,in_wall=false,open=true,powered=false]': 2948,
    'minecraft:birch_fence_gate[facing=west,in_wall=false,open=true,powered=false]': 2949,
    'minecraft:birch_fence_gate[facing=north,in_wall=false,open=true,powered=false]': 2950,
    'minecraft:birch_fence_gate[facing=east,in_wall=false,open=true,powered=false]': 2951,
    'minecraft:birch_fence_gate[facing=south,in_wall=false,open=false,powered=true]': 2952,
    'minecraft:birch_fence_gate[facing=west,in_wall=false,open=false,powered=true]': 2953,
    'minecraft:birch_fence_gate[facing=north,in_wall=false,open=false,powered=true]': 2954,
    'minecraft:birch_fence_gate[facing=east,in_wall=false,open=false,powered=true]': 2955,
    'minecraft:birch_fence_gate[facing=south,in_wall=false,open=true,powered=true]': 2956,
    'minecraft:birch_fence_gate[facing=west,in_wall=false,open=true,powered=true]': 2957,
    'minecraft:birch_fence_gate[facing=north,in_wall=false,open=true,powered=true]': 2958,
    'minecraft:birch_fence_gate[facing=east,in_wall=false,open=true,powered=true]': 2959,
    'minecraft:jungle_fence_gate[facing=south,in_wall=false,open=false,powered=false]': 2960,
    'minecraft:jungle_fence_gate[facing=west,in_wall=false,open=false,powered=false]': 2961,
    'minecraft:jungle_fence_gate[facing=north,in_wall=false,open=false,powered=false]': 2962,
    'minecraft:jungle_fence_gate[facing=east,in_wall=false,open=false,powered=false]': 2963,
    'minecraft:jungle_fence_gate[facing=south,in_wall=false,open=true,powered=false]': 2964,
    'minecraft:jungle_fence_gate[facing=west,in_wall=false,open=true,powered=false]': 2965,
    'minecraft:jungle_fence_gate[facing=north,in_wall=false,open=true,powered=false]': 2966,
    'minecraft:jungle_fence_gate[facing=east,in_wall=false,open=true,powered=false]': 2967,
    'minecraft:jungle_fence_gate[facing=south,in_wall=false,open=false,powered=true]': 2968,
    'minecraft:jungle_fence_gate[facing=west,in_wall=false,open=false,powered=true]': 2969,
    'minecraft:jungle_fence_gate[facing=north,in_wall=false,open=false,powered=true]': 2970,
    'minecraft:jungle_fence_gate[facing=east,in_wall=false,open=false,powered=true]': 2971,
    'minecraft:jungle_fence_gate[facing=south,in_wall=false,open=true,powered=true]': 2972,
    'minecraft:jungle_fence_gate[facing=west,in_wall=false,open=true,powered=true]': 2973,
    'minecraft:jungle_fence_gate[facing=north,in_wall=false,open=true,powered=true]': 2974,
    'minecraft:jungle_fence_gate[facing=east,in_wall=false,open=true,powered=true]': 2975,
    'minecraft:dark_oak_fence_gate[facing=south,in_wall=false,open=false,powered=false]': 2976,
    'minecraft:dark_oak_fence_gate[facing=west,in_wall=false,open=false,powered=false]': 2977,
    'minecraft:dark_oak_fence_gate[facing=north,in_wall=false,open=false,powered=false]': 2978,
    'minecraft:dark_oak_fence_gate[facing=east,in_wall=false,open=false,powered=false]': 2979,
    'minecraft:dark_oak_fence_gate[facing=south,in_wall=false,open=true,powered=false]': 2980,
    'minecraft:dark_oak_fence_gate[facing=west,in_wall=false,open=true,powered=false]': 2981,
    'minecraft:dark_oak_fence_gate[facing=north,in_wall=false,open=true,powered=false]': 2982,
    'minecraft:dark_oak_fence_gate[facing=east,in_wall=false,open=true,powered=false]': 2983,
    'minecraft:dark_oak_fence_gate[facing=south,in_wall=false,open=false,powered=true]': 2984,
    'minecraft:dark_oak_fence_gate[facing=west,in_wall=false,open=false,powered=true]': 2985,
    'minecraft:dark_oak_fence_gate[facing=north,in_wall=false,open=false,powered=true]': 2986,
    'minecraft:dark_oak_fence_gate[facing=east,in_wall=false,open=false,powered=true]': 2987,
    'minecraft:dark_oak_fence_gate[facing=south,in_wall=false,open=true,powered=true]': 2988,
    'minecraft:dark_oak_fence_gate[facing=west,in_wall=false,open=true,powered=true]': 2989,
    'minecraft:dark_oak_fence_gate[facing=north,in_wall=false,open=true,powered=true]': 2990,
    'minecraft:dark_oak_fence_gate[facing=east,in_wall=false,open=true,powered=true]': 2991,
    'minecraft:acacia_fence_gate[facing=south,in_wall=false,open=false,powered=false]': 2992,
    'minecraft:acacia_fence_gate[facing=west,in_wall=false,open=false,powered=false]': 2993,
    'minecraft:acacia_fence_gate[facing=north,in_wall=false,open=false,powered=false]': 2994,
    'minecraft:acacia_fence_gate[facing=east,in_wall=false,open=false,powered=false]': 2995,
    'minecraft:acacia_fence_gate[facing=south,in_wall=false,open=true,powered=false]': 2996,
    'minecraft:acacia_fence_gate[facing=west,in_wall=false,open=true,powered=false]': 2997,
    'minecraft:acacia_fence_gate[facing=north,in_wall=false,open=true,powered=false]': 2998,
    'minecraft:acacia_fence_gate[facing=east,in_wall=false,open=true,powered=false]': 2999,
    'minecraft:acacia_fence_gate[facing=south,in_wall=false,open=false,powered=true]': 3000,
    'minecraft:acacia_fence_gate[facing=west,in_wall=false,open=false,powered=true]': 3001,
    'minecraft:acacia_fence_gate[facing=north,in_wall=false,open=false,powered=true]': 3002,
    'minecraft:acacia_fence_gate[facing=east,in_wall=false,open=false,powered=true]': 3003,
    'minecraft:acacia_fence_gate[facing=south,in_wall=false,open=true,powered=true]': 3004,
    'minecraft:acacia_fence_gate[facing=west,in_wall=false,open=true,powered=true]': 3005,
    'minecraft:acacia_fence_gate[facing=north,in_wall=false,open=true,powered=true]': 3006,
    'minecraft:acacia_fence_gate[facing=east,in_wall=false,open=true,powered=true]': 3007,
    'minecraft:spruce_fence[east=false,north=false,south=false,waterlogged=false,west=false]': 3008,
    'minecraft:birch_fence[east=false,north=false,south=false,waterlogged=false,west=false]': 3024,
    'minecraft:jungle_fence[east=false,north=false,south=false,waterlogged=false,west=false]': 3040,
    'minecraft:dark_oak_fence[east=false,north=false,south=false,waterlogged=false,west=false]': 3056,
    'minecraft:acacia_fence[east=false,north=false,south=false,waterlogged=false,west=false]': 3072,
    'minecraft:spruce_door[facing=east,half=lower,hinge=right,open=false,powered=false]': 3088,
    'minecraft:spruce_door[facing=south,half=lower,hinge=right,open=false,powered=false]': 3089,
    'minecraft:spruce_door[facing=west,half=lower,hinge=right,open=false,powered=false]': 3090,
    'minecraft:spruce_door[facing=north,half=lower,hinge=right,open=false,powered=false]': 3091,
    'minecraft:spruce_door[facing=east,half=lower,hinge=right,open=true,powered=false]': 3092,
    'minecraft:spruce_door[facing=south,half=lower,hinge=right,open=true,powered=false]': 3093,
    'minecraft:spruce_door[facing=west,half=lower,hinge=right,open=true,powered=false]': 3094,
    'minecraft:spruce_door[facing=north,half=lower,hinge=right,open=true,powered=false]': 3095,
    'minecraft:spruce_door[facing=east,half=upper,hinge=left,open=false,powered=false]': 3096,
    'minecraft:spruce_door[facing=east,half=upper,hinge=right,open=false,powered=false]': 3097,
    'minecraft:spruce_door[facing=east,half=upper,hinge=left,open=false,powered=true]': 3098,
    'minecraft:spruce_door[facing=east,half=upper,hinge=right,open=false,powered=true]': 3099,
    'minecraft:birch_door[facing=east,half=lower,hinge=right,open=false,powered=false]': 3104,
    'minecraft:birch_door[facing=south,half=lower,hinge=right,open=false,powered=false]': 3105,
    'minecraft:birch_door[facing=west,half=lower,hinge=right,open=false,powered=false]': 3106,
    'minecraft:birch_door[facing=north,half=lower,hinge=right,open=false,powered=false]': 3107,
    'minecraft:birch_door[facing=east,half=lower,hinge=right,open=true,powered=false]': 3108,
    'minecraft:birch_door[facing=south,half=lower,hinge=right,open=true,powered=false]': 3109,
    'minecraft:birch_door[facing=west,half=lower,hinge=right,open=true,powered=false]': 3110,
    'minecraft:birch_door[facing=north,half=lower,hinge=right,open=true,powered=false]': 3111,
    'minecraft:birch_door[facing=east,half=upper,hinge=left,open=false,powered=false]': 3112,
    'minecraft:birch_door[facing=east,half=upper,hinge=right,open=false,powered=false]': 3113,
    'minecraft:birch_door[facing=east,half=upper,hinge=left,open=false,powered=true]': 3114,
    'minecraft:birch_door[facing=east,half=upper,hinge=right,open=false,powered=true]': 3115,
    'minecraft:jungle_door[facing=east,half=lower,hinge=right,open=false,powered=false]': 3120,
    'minecraft:jungle_door[facing=south,half=lower,hinge=right,open=false,powered=false]': 3121,
    'minecraft:jungle_door[facing=west,half=lower,hinge=right,open=false,powered=false]': 3122,
    'minecraft:jungle_door[facing=north,half=lower,hinge=right,open=false,powered=false]': 3123,
    'minecraft:jungle_door[facing=east,half=lower,hinge=right,open=true,powered=false]': 3124,
    'minecraft:jungle_door[facing=south,half=lower,hinge=right,open=true,powered=false]': 3125,
    'minecraft:jungle_door[facing=west,half=lower,hinge=right,open=true,powered=false]': 3126,
    'minecraft:jungle_door[facing=north,half=lower,hinge=right,open=true,powered=false]': 3127,
    'minecraft:jungle_door[facing=east,half=upper,hinge=left,open=false,powered=false]': 3128,
    'minecraft:jungle_door[facing=east,half=upper,hinge=right,open=false,powered=false]': 3129,
    'minecraft:jungle_door[facing=east,half=upper,hinge=left,open=false,powered=true]': 3130,
    'minecraft:jungle_door[facing=east,half=upper,hinge=right,open=false,powered=true]': 3131,
    'minecraft:acacia_door[facing=east,half=lower,hinge=right,open=false,powered=false]': 3136,
    'minecraft:acacia_door[facing=south,half=lower,hinge=right,open=false,powered=false]': 3137,
    'minecraft:acacia_door[facing=west,half=lower,hinge=right,open=false,powered=false]': 3138,
    'minecraft:acacia_door[facing=north,half=lower,hinge=right,open=false,powered=false]': 3139,
    'minecraft:acacia_door[facing=east,half=lower,hinge=right,open=true,powered=false]': 3140,
    'minecraft:acacia_door[facing=south,half=lower,hinge=right,open=true,powered=false]': 3141,
    'minecraft:acacia_door[facing=west,half=lower,hinge=right,open=true,powered=false]': 3142,
    'minecraft:acacia_door[facing=north,half=lower,hinge=right,open=true,powered=false]': 3143,
    'minecraft:acacia_door[facing=east,half=upper,hinge=left,open=false,powered=false]': 3144,
    'minecraft:acacia_door[facing=east,half=upper,hinge=right,open=false,powered=false]': 3145,
    'minecraft:acacia_door[facing=east,half=upper,hinge=left,open=false,powered=true]': 3146,
    'minecraft:acacia_door[facing=east,half=upper,hinge=right,open=false,powered=true]': 3147,
    'minecraft:dark_oak_door[facing=east,half=lower,hinge=right,open=false,powered=false]': 3152,
    'minecraft:dark_oak_door[facing=south,half=lower,hinge=right,open=false,powered=false]': 3153,
    'minecraft:dark_oak_door[facing=west,half=lower,hinge=right,open=false,powered=false]': 3154,
    'minecraft:dark_oak_door[facing=north,half=lower,hinge=right,open=false,powered=false]': 3155,
    'minecraft:dark_oak_door[facing=east,half=lower,hinge=right,open=true,powered=false]': 3156,
    'minecraft:dark_oak_door[facing=south,half=lower,hinge=right,open=true,powered=false]': 3157,
    'minecraft:dark_oak_door[facing=west,half=lower,hinge=right,open=true,powered=false]': 3158,
    'minecraft:dark_oak_door[facing=north,half=lower,hinge=right,open=true,powered=false]': 3159,
    'minecraft:dark_oak_door[facing=east,half=upper,hinge=left,open=false,powered=false]': 3160,
    'minecraft:dark_oak_door[facing=east,half=upper,hinge=right,open=false,powered=false]': 3161,
    'minecraft:dark_oak_door[facing=east,half=upper,hinge=left,open=false,powered=true]': 3162,
    'minecraft:dark_oak_door[facing=east,half=upper,hinge=right,open=false,powered=true]': 3163,
    'minecraft:end_rod[facing=down]': 3168,
    'minecraft:end_rod[facing=up]': 3169,
    'minecraft:end_rod[facing=north]': 3170,
    'minecraft:end_rod[facing=south]': 3171,
    'minecraft:end_rod[facing=west]': 3172,
    'minecraft:end_rod[facing=east]': 3173,
    'minecraft:chorus_plant[down=false,east=false,north=false,south=false,up=false,west=false]': 3184,
    'minecraft:chorus_flower[age=0]': 3200,
    'minecraft:chorus_flower[age=1]': 3201,
    'minecraft:chorus_flower[age=2]': 3202,
    'minecraft:chorus_flower[age=3]': 3203,
    'minecraft:chorus_flower[age=4]': 3204,
    'minecraft:chorus_flower[age=5]': 3205,
    'minecraft:purpur_block': 3216,
    'minecraft:purpur_pillar[axis=y]': 3232,
    'minecraft:purpur_pillar[axis=x]': 3236,
    'minecraft:purpur_pillar[axis=z]': 3240,
    'minecraft:purpur_stairs[facing=east,half=bottom,shape=straight,waterlogged=false]': 3248,
    'minecraft:purpur_stairs[facing=west,half=bottom,shape=straight,waterlogged=false]': 3249,
    'minecraft:purpur_stairs[facing=south,half=bottom,shape=straight,waterlogged=false]': 3250,
    'minecraft:purpur_stairs[facing=north,half=bottom,shape=straight,waterlogged=false]': 3251,
    'minecraft:purpur_stairs[facing=east,half=top,shape=straight,waterlogged=false]': 3252,
    'minecraft:purpur_stairs[facing=west,half=top,shape=straight,waterlogged=false]': 3253,
    'minecraft:purpur_stairs[facing=south,half=top,shape=straight,waterlogged=false]': 3254,
    'minecraft:purpur_stairs[facing=north,half=top,shape=straight,waterlogged=false]': 3255,
    'minecraft:purpur_slab[type=double,waterlogged=false]': 3264,
    'minecraft:purpur_slab[type=bottom,waterlogged=false]': 3280,
    'minecraft:purpur_slab[type=top,waterlogged=false]': 3288,
    'minecraft:end_stone_bricks': 3296,
    'minecraft:beetroots[age=0]': 3312,
    'minecraft:beetroots[age=1]': 3313,
    'minecraft:beetroots[age=2]': 3314,
    'minecraft:beetroots[age=3]': 3315,
    'minecraft:grass_path': 3328,
    'minecraft:end_gateway': 3344,
    'minecraft:repeating_command_block[conditional=false,facing=down]': 3360,
    'minecraft:repeating_command_block[conditional=false,facing=up]': 3361,
    'minecraft:repeating_command_block[conditional=false,facing=north]': 3362,
    'minecraft:repeating_command_block[conditional=false,facing=south]': 3363,
    'minecraft:repeating_command_block[conditional=false,facing=west]': 3364,
    'minecraft:repeating_command_block[conditional=false,facing=east]': 3365,
    'minecraft:repeating_command_block[conditional=true,facing=down]': 3368,
    'minecraft:repeating_command_block[conditional=true,facing=up]': 3369,
    'minecraft:repeating_command_block[conditional=true,facing=north]': 3370,
    'minecraft:repeating_command_block[conditional=true,facing=south]': 3371,
    'minecraft:repeating_command_block[conditional=true,facing=west]': 3372,
    'minecraft:repeating_command_block[conditional=true,facing=east]': 3373,
    'minecraft:chain_command_block[conditional=false,facing=down]': 3376,
    'minecraft:chain_command_block[conditional=false,facing=up]': 3377,
    'minecraft:chain_command_block[conditional=false,facing=north]': 3378,
    'minecraft:chain_command_block[conditional=false,facing=south]': 3379,
    'minecraft:chain_command_block[conditional=false,facing=west]': 3380,
    'minecraft:chain_command_block[conditional=false,facing=east]': 3381,
    'minecraft:chain_command_block[conditional=true,facing=down]': 3384,
    'minecraft:chain_command_block[conditional=true,facing=up]': 3385,
    'minecraft:chain_command_block[conditional=true,facing=north]': 3386,
    'minecraft:chain_command_block[conditional=true,facing=south]': 3387,
    'minecraft:chain_command_block[conditional=true,facing=west]': 3388,
    'minecraft:chain_command_block[conditional=true,facing=east]': 3389,
    'minecraft:frosted_ice[age=0]': 3392,
    'minecraft:frosted_ice[age=1]': 3393,
    'minecraft:frosted_ice[age=2]': 3394,
    'minecraft:frosted_ice[age=3]': 3395,
    'minecraft:magma_block': 3408,
    'minecraft:nether_wart_block': 3424,
    'minecraft:red_nether_bricks': 3440,
    'minecraft:bone_block[axis=y]': 3456,
    'minecraft:bone_block[axis=x]': 3460,
    'minecraft:bone_block[axis=z]': 3464,
    'minecraft:structure_void': 3472,
    'minecraft:observer[facing=down,powered=false]': 3488,
    'minecraft:observer[facing=up,powered=false]': 3489,
    'minecraft:observer[facing=north,powered=false]': 3490,
    'minecraft:observer[facing=south,powered=false]': 3491,
    'minecraft:observer[facing=west,powered=false]': 3492,
    'minecraft:observer[facing=east,powered=false]': 3493,
    'minecraft:observer[facing=down,powered=true]': 3496,
    'minecraft:observer[facing=up,powered=true]': 3497,
    'minecraft:observer[facing=north,powered=true]': 3498,
    'minecraft:observer[facing=south,powered=true]': 3499,
    'minecraft:observer[facing=west,powered=true]': 3500,
    'minecraft:observer[facing=east,powered=true]': 3501,
    'minecraft:white_shulker_box[facing=down]': 3504,
    'minecraft:white_shulker_box[facing=up]': 3505,
    'minecraft:white_shulker_box[facing=north]': 3506,
    'minecraft:white_shulker_box[facing=south]': 3507,
    'minecraft:white_shulker_box[facing=west]': 3508,
    'minecraft:white_shulker_box[facing=east]': 3509,
    'minecraft:orange_shulker_box[facing=down]': 3520,
    'minecraft:orange_shulker_box[facing=up]': 3521,
    'minecraft:orange_shulker_box[facing=north]': 3522,
    'minecraft:orange_shulker_box[facing=south]': 3523,
    'minecraft:orange_shulker_box[facing=west]': 3524,
    'minecraft:orange_shulker_box[facing=east]': 3525,
    'minecraft:magenta_shulker_box[facing=down]': 3536,
    'minecraft:magenta_shulker_box[facing=up]': 3537,
    'minecraft:magenta_shulker_box[facing=north]': 3538,
    'minecraft:magenta_shulker_box[facing=south]': 3539,
    'minecraft:magenta_shulker_box[facing=west]': 3540,
    'minecraft:magenta_shulker_box[facing=east]': 3541,
    'minecraft:light_blue_shulker_box[facing=down]': 3552,
    'minecraft:light_blue_shulker_box[facing=up]': 3553,
    'minecraft:light_blue_shulker_box[facing=north]': 3554,
    'minecraft:light_blue_shulker_box[facing=south]': 3555,
    'minecraft:light_blue_shulker_box[facing=west]': 3556,
    'minecraft:light_blue_shulker_box[facing=east]': 3557,
    'minecraft:yellow_shulker_box[facing=down]': 3568,
    'minecraft:yellow_shulker_box[facing=up]': 3569,
    'minecraft:yellow_shulker_box[facing=north]': 3570,
    'minecraft:yellow_shulker_box[facing=south]': 3571,
    'minecraft:yellow_shulker_box[facing=west]': 3572,
    'minecraft:yellow_shulker_box[facing=east]': 3573,
    'minecraft:lime_shulker_box[facing=down]': 3584,
    'minecraft:lime_shulker_box[facing=up]': 3585,
    'minecraft:lime_shulker_box[facing=north]': 3586,
    'minecraft:lime_shulker_box[facing=south]': 3587,
    'minecraft:lime_shulker_box[facing=west]': 3588,
    'minecraft:lime_shulker_box[facing=east]': 3589,
    'minecraft:pink_shulker_box[facing=down]': 3600,
    'minecraft:pink_shulker_box[facing=up]': 3601,
    'minecraft:pink_shulker_box[facing=north]': 3602,
    'minecraft:pink_shulker_box[facing=south]': 3603,
    'minecraft:pink_shulker_box[facing=west]': 3604,
    'minecraft:pink_shulker_box[facing=east]': 3605,
    'minecraft:gray_shulker_box[facing=down]': 3616,
    'minecraft:gray_shulker_box[facing=up]': 3617,
    'minecraft:gray_shulker_box[facing=north]': 3618,
    'minecraft:gray_shulker_box[facing=south]': 3619,
    'minecraft:gray_shulker_box[facing=west]': 3620,
    'minecraft:gray_shulker_box[facing=east]': 3621,
    'minecraft:light_gray_shulker_box[facing=down]': 3632,
    'minecraft:light_gray_shulker_box[facing=up]': 3633,
    'minecraft:light_gray_shulker_box[facing=north]': 3634,
    'minecraft:light_gray_shulker_box[facing=south]': 3635,
    'minecraft:light_gray_shulker_box[facing=west]': 3636,
    'minecraft:light_gray_shulker_box[facing=east]': 3637,
    'minecraft:cyan_shulker_box[facing=down]': 3648,
    'minecraft:cyan_shulker_box[facing=up]': 3649,
    'minecraft:cyan_shulker_box[facing=north]': 3650,
    'minecraft:cyan_shulker_box[facing=south]': 3651,
    'minecraft:cyan_shulker_box[facing=west]': 3652,
    'minecraft:cyan_shulker_box[facing=east]': 3653,
    'minecraft:purple_shulker_box[facing=down]': 3664,
    'minecraft:purple_shulker_box[facing=up]': 3665,
    'minecraft:purple_shulker_box[facing=north]': 3666,
    'minecraft:purple_shulker_box[facing=south]': 3667,
    'minecraft:purple_shulker_box[facing=west]': 3668,
    'minecraft:purple_shulker_box[facing=east]': 3669,
    'minecraft:blue_shulker_box[facing=down]': 3680,
    'minecraft:blue_shulker_box[facing=up]': 3681,
    'minecraft:blue_shulker_box[facing=north]': 3682,
    'minecraft:blue_shulker_box[facing=south]': 3683,
    'minecraft:blue_shulker_box[facing=west]': 3684,
    'minecraft:blue_shulker_box[facing=east]': 3685,
    'minecraft:brown_shulker_box[facing=down]': 3696,
    'minecraft:brown_shulker_box[facing=up]': 3697,
    'minecraft:brown_shulker_box[facing=north]': 3698,
    'minecraft:brown_shulker_box[facing=south]': 3699,
    'minecraft:brown_shulker_box[facing=west]': 3700,
    'minecraft:brown_shulker_box[facing=east]': 3701,
    'minecraft:green_shulker_box[facing=down]': 3712,
    'minecraft:green_shulker_box[facing=up]': 3713,
    'minecraft:green_shulker_box[facing=north]': 3714,
    'minecraft:green_shulker_box[facing=south]': 3715,
    'minecraft:green_shulker_box[facing=west]': 3716,
    'minecraft:green_shulker_box[facing=east]': 3717,
    'minecraft:red_shulker_box[facing=down]': 3728,
    'minecraft:red_shulker_box[facing=up]': 3729,
    'minecraft:red_shulker_box[facing=north]': 3730,
    'minecraft:red_shulker_box[facing=south]': 3731,
    'minecraft:red_shulker_box[facing=west]': 3732,
    'minecraft:red_shulker_box[facing=east]': 3733,
    'minecraft:black_shulker_box[facing=down]': 3744,
    'minecraft:black_shulker_box[facing=up]': 3745,
    'minecraft:black_shulker_box[facing=north]': 3746,
    'minecraft:black_shulker_box[facing=south]': 3747,
    'minecraft:black_shulker_box[facing=west]': 3748,
    'minecraft:black_shulker_box[facing=east]': 3749,
    'minecraft:white_glazed_terracotta[facing=south]': 3760,
    'minecraft:white_glazed_terracotta[facing=west]': 3761,
    'minecraft:white_glazed_terracotta[facing=north]': 3762,
    'minecraft:white_glazed_terracotta[facing=east]': 3763,
    'minecraft:orange_glazed_terracotta[facing=south]': 3776,
    'minecraft:orange_glazed_terracotta[facing=west]': 3777,
    'minecraft:orange_glazed_terracotta[facing=north]': 3778,
    'minecraft:orange_glazed_terracotta[facing=east]': 3779,
    'minecraft:magenta_glazed_terracotta[facing=south]': 3792,
    'minecraft:magenta_glazed_terracotta[facing=west]': 3793,
    'minecraft:magenta_glazed_terracotta[facing=north]': 3794,
    'minecraft:magenta_glazed_terracotta[facing=east]': 3795,
    'minecraft:light_blue_glazed_terracotta[facing=south]': 3808,
    'minecraft:light_blue_glazed_terracotta[facing=west]': 3809,
    'minecraft:light_blue_glazed_terracotta[facing=north]': 3810,
    'minecraft:light_blue_glazed_terracotta[facing=east]': 3811,
    'minecraft:yellow_glazed_terracotta[facing=south]': 3824,
    'minecraft:yellow_glazed_terracotta[facing=west]': 3825,
    'minecraft:yellow_glazed_terracotta[facing=north]': 3826,
    'minecraft:yellow_glazed_terracotta[facing=east]': 3827,
    'minecraft:lime_glazed_terracotta[facing=south]': 3840,
    'minecraft:lime_glazed_terracotta[facing=west]': 3841,
    'minecraft:lime_glazed_terracotta[facing=north]': 3842,
    'minecraft:lime_glazed_terracotta[facing=east]': 3843,
    'minecraft:pink_glazed_terracotta[facing=south]': 3856,
    'minecraft:pink_glazed_terracotta[facing=west]': 3857,
    'minecraft:pink_glazed_terracotta[facing=north]': 3858,
    'minecraft:pink_glazed_terracotta[facing=east]': 3859,
    'minecraft:gray_glazed_terracotta[facing=south]': 3872,
    'minecraft:gray_glazed_terracotta[facing=west]': 3873,
    'minecraft:gray_glazed_terracotta[facing=north]': 3874,
    'minecraft:gray_glazed_terracotta[facing=east]': 3875,
    'minecraft:light_gray_glazed_terracotta[facing=south]': 3888,
    'minecraft:light_gray_glazed_terracotta[facing=west]': 3889,
    'minecraft:light_gray_glazed_terracotta[facing=north]': 3890,
    'minecraft:light_gray_glazed_terracotta[facing=east]': 3891,
    'minecraft:cyan_glazed_terracotta[facing=south]': 3904,
    'minecraft:cyan_glazed_terracotta[facing=west]': 3905,
    'minecraft:cyan_glazed_terracotta[facing=north]': 3906,
    'minecraft:cyan_glazed_terracotta[facing=east]': 3907,
    'minecraft:purple_glazed_terracotta[facing=south]': 3920,
    'minecraft:purple_glazed_terracotta[facing=west]': 3921,
    'minecraft:purple_glazed_terracotta[facing=north]': 3922,
    'minecraft:purple_glazed_terracotta[facing=east]': 3923,
    'minecraft:blue_glazed_terracotta[facing=south]': 3936,
    'minecraft:blue_glazed_terracotta[facing=west]': 3937,
    'minecraft:blue_glazed_terracotta[facing=north]': 3938,
    'minecraft:blue_glazed_terracotta[facing=east]': 3939,
    'minecraft:brown_glazed_terracotta[facing=south]': 3952,
    'minecraft:brown_glazed_terracotta[facing=west]': 3953,
    'minecraft:brown_glazed_terracotta[facing=north]': 3954,
    'minecraft:brown_glazed_terracotta[facing=east]': 3955,
    'minecraft:green_glazed_terracotta[facing=south]': 3968,
    'minecraft:green_glazed_terracotta[facing=west]': 3969,
    'minecraft:green_glazed_terracotta[facing=north]': 3970,
    'minecraft:green_glazed_terracotta[facing=east]': 3971,
    'minecraft:red_glazed_terracotta[facing=south]': 3984,
    'minecraft:red_glazed_terracotta[facing=west]': 3985,
    'minecraft:red_glazed_terracotta[facing=north]': 3986,
    'minecraft:red_glazed_terracotta[facing=east]': 3987,
    'minecraft:black_glazed_terracotta[facing=south]': 4000,
    'minecraft:black_glazed_terracotta[facing=west]': 4001,
    'minecraft:black_glazed_terracotta[facing=north]': 4002,
    'minecraft:black_glazed_terracotta[facing=east]': 4003,
    'minecraft:white_concrete': 4016,
    'minecraft:orange_concrete': 4017,
    'minecraft:magenta_concrete': 4018,
    'minecraft:light_blue_concrete': 4019,
    'minecraft:yellow_concrete': 4020,
    'minecraft:lime_concrete': 4021,
    'minecraft:pink_concrete': 4022,
    'minecraft:gray_concrete': 4023,
    'minecraft:light_gray_concrete': 4024,
    'minecraft:cyan_concrete': 4025,
    'minecraft:purple_concrete': 4026,
    'minecraft:blue_concrete': 4027,
    'minecraft:brown_concrete': 4028,
    'minecraft:green_concrete': 4029,
    'minecraft:red_concrete': 4030,
    'minecraft:black_concrete': 4031,
    'minecraft:white_concrete_powder': 4032,
    'minecraft:orange_concrete_powder': 4033,
    'minecraft:magenta_concrete_powder': 4034,
    'minecraft:light_blue_concrete_powder': 4035,
    'minecraft:yellow_concrete_powder': 4036,
    'minecraft:lime_concrete_powder': 4037,
    'minecraft:pink_concrete_powder': 4038,
    'minecraft:gray_concrete_powder': 4039,
    'minecraft:light_gray_concrete_powder': 4040,
    'minecraft:cyan_concrete_powder': 4041,
    'minecraft:purple_concrete_powder': 4042,
    'minecraft:blue_concrete_powder': 4043,
    'minecraft:brown_concrete_powder': 4044,
    'minecraft:green_concrete_powder': 4045,
    'minecraft:red_concrete_powder': 4046,
    'minecraft:black_concrete_powder': 4047,
    'minecraft:structure_block[mode=save]': 4080,
    'minecraft:structure_block[mode=load]': 4081,
    'minecraft:structure_block[mode=corner]': 4082,
    'minecraft:structure_block[mode=data]': 4083
};

// Key: Java Banner Color | Value: Bedrock Banner Color
var BannerColorJavaToBedrock = {
    0: 15, // white
    1: 14, // orange
    2: 13, // magenta
    3: 12, // light blue
    4: 11, // yellow
    5: 10, // lime
    6: 9, // pink
    9: 6, // cyan
    7: 8, // gray
    8: 7, // light gray
    10: 5, // purple
    11: 4, // blue
    12: 3, // brown
    13: 2, // green
    14: 1, // red
    15: 0 // black
};

var BannerColorSidToBedrockID = {
    'minecraft:white_banner': 15, // white
    'minecraft:orange_banner': 14, // orange
    'minecraft:magenta_banner': 13, // magenta
    'minecraft:Light_blight_blue_banner': 12, // light blue
    'minecraft:yellow_banner': 11, // yellow
    'minecraft:lime_banner': 10, // lime
    'minecraft:pink_banner': 9, // pink
    'minecraft:cyan_banner': 6, // cyan
    'minecraft:gray_banner': 8, // gray
    'minecraft:light_gray_banner': 7, // light gray
    'minecraft:purple_banner': 5, // purple
    'minecraft:blue_banner': 4, // blue
    'minecraft:brown_banner': 3, // brown
    'minecraft:green_banner': 2, // green
    'minecraft:red_banner': 1, // red
    'minecraft:black_banner': 0 // black
};

function schemtoschematic(arrayBuffer, callback) {
    function getKeyByValue(object, value) {
        return Object.keys(object).find((key) => {
            return object[key].value === value;
        });
    }

    // Move the schematic offset data to the old location
    function moveOffset(root) {
        if ('Metadata' in root.value) {
            root.value.WEOffsetX = root.value.Metadata.value.WEOffsetX;
            root.value.WEOffsetY = root.value.Metadata.value.WEOffsetY;
            root.value.WEOffsetZ = root.value.Metadata.value.WEOffsetZ;

            delete root.value.Metadata;
        }
    }

    // Move the schematic origin data to the old location
    function moveOrigin(root) {
        if ('Offset' in root.value) {
            root.value.WEOriginX = {
                type: 'int',
                value: root.value.Offset.value[0]
            };
            root.value.WEOriginY = {
                type: 'int',
                value: root.value.Offset.value[1]
            };
            root.value.WEOriginZ = {
                type: 'int',
                value: root.value.Offset.value[2]
            };

            delete root.value.Offset;
        }
    }

    // Set the schematic materials type
    function setMaterials(root) {
        root.value.Materials = { type: 'string', value: 'Alpha' };
    }

    // Move the tile entites to the old location and modify their position and id data
    function moveTileEntities(root, oldRoot) {
        if ('BlockEntities' in root.value) {
            root.value.TileEntities = root.value.BlockEntities;
            delete root.value.BlockEntities;

            for (let tileEntity of root.value.TileEntities.value.value) {
                if ('Pos' in tileEntity) {
                    tileEntity.x = {
                        type: 'int',
                        value: tileEntity.Pos.value[0]
                    };
                    tileEntity.y = {
                        type: 'int',
                        value: tileEntity.Pos.value[1]
                    };
                    tileEntity.z = {
                        type: 'int',
                        value: tileEntity.Pos.value[2]
                    };

                    delete tileEntity.Pos;
                }

                if ('Id' in tileEntity) {
                    tileEntity.id = tileEntity.Id;
                    if (tileEntity.id.value.startsWith('minecraft:')) {
                        tileEntity.id.value = tileEntity.id.value.split(':')[1];
                        tileEntity.id.value =
                            tileEntity.id.value.charAt(0).toUpperCase() +
                            tileEntity.id.value.slice(1);

                        if (tileEntity.id.value === 'Banner') {
                            // const index = x + z * MaxX + y * MaxX * MaxY;
                            const index =
                                tileEntity.x.value +
                                tileEntity.z.value * oldRoot.value.Width.value +
                                tileEntity.y.value *
                                    oldRoot.value.Width.value *
                                    oldRoot.value.Height.value;

                            const patternIndex =
                                oldRoot.value.BlockData.value[index];

                            let val = getKeyByValue(
                                oldRoot.value.Palette.value,
                                patternIndex
                            );

                            tileEntity.Base = {
                                type: 'int',
                                value:
                                    BannerColorSidToBedrockID[val.split('[')[0]]
                            };
                        }

                        if (tileEntity.Patterns)
                            for (let pattern of tileEntity.Patterns.value
                                .value) {
                                pattern.Color.value =
                                    BannerColorJavaToBedrock[
                                        pattern.Color.value
                                    ];
                            }
                    }

                    delete tileEntity.Id;
                }
            }
        }
    }

    function convertToLegacyBlockId(namespaceKey) {
        if (namespaceKey in blocksNamespace) {
            return blocksNamespace[namespaceKey];
        }

        // Not in the table, try to find a match
        var originalKey = namespaceKey;
        var index;

        if (~(index = namespaceKey.indexOf('shape='))) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'shape=straight' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (~(index = namespaceKey.indexOf('smooth_stone_slab'))) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'stone_slab' +
                namespaceKey.substr(namespaceKey.indexOf('[', index));
        }

        if (~(index = namespaceKey.indexOf('_wall_sign'))) {
            namespaceKey =
                'minecraft:wall_sign' +
                namespaceKey.substr(namespaceKey.indexOf('[', index));
        }

        if (
            !~namespaceKey.indexOf('wall_sign') &&
            ~(index = namespaceKey.indexOf('_sign'))
        ) {
            namespaceKey =
                'minecraft:sign' +
                namespaceKey.substr(namespaceKey.indexOf('[', index));
        }

        if (~(index = namespaceKey.indexOf('_wall_banner'))) {
            namespaceKey =
                'minecraft:white_wall_banner' +
                namespaceKey.substr(namespaceKey.indexOf('[', index));
        }

        if (
            !~namespaceKey.indexOf('wall_banner') &&
            ~(index = namespaceKey.indexOf('_banner'))
        ) {
            namespaceKey =
                'minecraft:white_banner' +
                namespaceKey.substr(namespaceKey.indexOf('[', index));
        }

        if (~(index = namespaceKey.indexOf('_bed'))) {
            namespaceKey =
                'minecraft:red_bed' +
                namespaceKey.substr(namespaceKey.indexOf('[', index));
        }

        if (~(index = namespaceKey.indexOf('_wall_head'))) {
            namespaceKey =
                'minecraft:skeleton_wall_skull' +
                namespaceKey.substr(namespaceKey.indexOf('[', index));
        }

        if (
            !~(index = namespaceKey.indexOf('_wall_head')) &&
            ~(index = namespaceKey.indexOf('_head'))
        ) {
            namespaceKey =
                'minecraft:skeleton_skull' +
                namespaceKey.substr(namespaceKey.indexOf('[', index));
        }

        if (~(index = namespaceKey.indexOf('east='))) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'east=false' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (~(index = namespaceKey.indexOf('north='))) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'north=false' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (~(index = namespaceKey.indexOf('south='))) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'south=false' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (~(index = namespaceKey.indexOf('west='))) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'west=false' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (~(index = namespaceKey.indexOf('distance='))) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'distance=1' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (
            ~(index = namespaceKey.indexOf('type=left')) ||
            ~(index = namespaceKey.indexOf('type=right'))
        ) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'type=single' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (~(index = namespaceKey.indexOf('waterlogged=true'))) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'waterlogged=false' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (~(index = namespaceKey.indexOf('snowy=true'))) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'snowy=false' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (namespaceKey in blocksNamespace) {
            return blocksNamespace[namespaceKey];
        }

        if (~(index = namespaceKey.indexOf('up=false'))) {
            tempkey =
                namespaceKey.substr(0, index) +
                'up=true' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));

            if (tempkey in blocksNamespace) {
                return blocksNamespace[tempkey];
            }
        }

        if (~(index = namespaceKey.indexOf('up=true'))) {
            tempkey =
                namespaceKey.substr(0, index) +
                'up=false' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));

            if (tempkey in blocksNamespace) {
                return blocksNamespace[tempkey];
            }
        }

        if (
            ~(index = namespaceKey.indexOf('axis=x')) ||
            ~(index = namespaceKey.indexOf('axis=z'))
        ) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'axis=y' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (~(index = namespaceKey.indexOf('east=false'))) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'east=none' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (~(index = namespaceKey.indexOf('north=false'))) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'north=none' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (~(index = namespaceKey.indexOf('south=false'))) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'south=none' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (~(index = namespaceKey.indexOf('west=false'))) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'west=none' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (~(index = namespaceKey.indexOf('rotation='))) {
            namespaceKey =
                namespaceKey.substr(0, index) +
                'rotation=0' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));
        }

        if (namespaceKey in blocksNamespace) {
            return blocksNamespace[namespaceKey];
        }

        if (
            ~(index = namespaceKey.indexOf('facing=')) &&
            ~namespaceKey.indexOf('hinge=')
        ) {
            tempkey =
                namespaceKey.substr(0, index) +
                'facing=east' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));

            if (~(index = tempkey.indexOf('open=true'))) {
                tempkey =
                    tempkey.substr(0, index) +
                    'open=false' +
                    tempkey.substr(namespaceKey.indexOf(',', index));
            }

            if (tempkey in blocksNamespace) {
                return blocksNamespace[tempkey];
            }

            index = namespaceKey.indexOf('hinge=');

            tempkey =
                namespaceKey.substr(0, index) +
                'hinge=right' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));

            if (tempkey in blocksNamespace) {
                return blocksNamespace[tempkey];
            }
        }

        if (~(index = namespaceKey.indexOf('facing=east'))) {
            tempkey =
                namespaceKey.substr(0, index) +
                'facing=west' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));

            if (tempkey in blocksNamespace) {
                return blocksNamespace[tempkey];
            }
        }

        if (~(index = namespaceKey.indexOf('facing='))) {
            tempkey =
                namespaceKey.substr(0, index) +
                'facing=north' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));

            if (tempkey in blocksNamespace) {
                return blocksNamespace[tempkey];
            }
        }

        if (~(index = namespaceKey.indexOf('half=upper'))) {
            tempkey =
                namespaceKey.substr(0, index) +
                'half=lower' +
                namespaceKey.substr(namespaceKey.indexOf(',', index));

            if (tempkey in blocksNamespace) {
                return blocksNamespace[tempkey];
            }
        }

        if (~(index = originalKey.indexOf('powered=true'))) {
            tempkey =
                originalKey.substr(0, index) +
                'powered=false' +
                originalKey.substr(originalKey.indexOf(',', index));

            return convertToLegacyBlockId(tempkey);
        }

        // How about no block states?
        if (~(index = originalKey.indexOf('['))) {
            tempkey = originalKey.substr(0, index);

            if (tempkey in blocksNamespace) {
                return blocksNamespace[tempkey];
            }
        }

        var error =
            'Unknown namespace key: ' + originalKey + ', replacing with air.';

        if (document && document.querySelector) {
            var errorNode = document.querySelector('#error');

            if (errorNode && !~errorNode.innerHTML.indexOf(error)) {
                errorNode.innerHTML += error + '<br/>';
            }
        }

        console.log(error);
        return 0;
    }

    // Convert the block data to the legacy blocks and data
    function convertBlockData(root) {
        if ('Palette' in root.value && 'BlockData' in root.value) {
            var palette = [];

            for (var key in root.value.Palette.value) {
                palette[root.value.Palette.value[key].value] = key;
            }

            var blockdata = root.value.BlockData.value;
            var blocks = [];
            var data = [];
            var varInt = 0;
            var varIntLength = 0;
            var blockId;

            for (var i = 0; i < blockdata.length; i++) {
                varInt |= (blockdata[i] & 127) << (varIntLength++ * 7);

                if ((blockdata[i] & 128) == 128) {
                    continue;
                }

                blockId = convertToLegacyBlockId(palette[varInt]);

                blocks.push(blockId >> 4);
                data.push(blockId & 0xf);

                varIntLength = 0;
                varInt = 0;
            }

            root.value.Blocks = { type: 'byteArray', value: blocks };
            root.value.Data = { type: 'byteArray', value: data };
            delete root.value.BlockData;
        }
    }

    nbt.parse(arrayBuffer, function (error, root) {
        if (error) {
            throw error;
        }
        const oldRoot = root;

        moveOffset(root);
        moveOrigin(root);
        setMaterials(root);
        moveTileEntities(root, oldRoot);
        convertBlockData(root);
        console.log(root);

        zlib.gzip(
            new Uint8Array(nbt.writeUncompressed(root)),
            function (error, data) {
                if (error) {
                    throw error;
                }

                callback(data);
            }
        );
    });
}

if (typeof exports !== 'undefined') {
    exports = schemtoschematic;
}
