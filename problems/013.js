/* eslint-disable no-loss-of-precision */
const numbers = [
	37_107_287_533_902_102_798_797_998_220_837_590_246_510_135_740_250,
	46_376_937_677_490_009_712_648_124_896_970_078_050_417_018_260_538,
	74_324_986_199_524_741_059_474_233_309_513_058_123_726_617_309_629,
	91_942_213_363_574_161_572_522_430_563_301_811_072_406_154_908_250,
	23_067_588_207_539_346_171_171_980_310_421_047_513_778_063_246_676,
	89_261_670_696_623_633_820_136_378_418_383_684_178_734_361_726_757,
	28_112_879_812_849_979_408_065_481_931_592_621_691_275_889_832_738,
	44_274_228_917_432_520_321_923_589_422_876_796_487_670_272_189_318,
	47_451_445_736_001_306_439_091_167_216_856_844_588_711_603_153_276,
	70_386_486_105_843_025_439_939_619_828_917_593_665_686_757_934_951,
	62_176_457_141_856_560_629_502_157_223_196_586_755_079_324_193_331,
	64_906_352_462_741_904_929_101_432_445_813_822_663_347_944_758_178,
	92_575_867_718_337_217_661_963_751_590_579_239_728_245_598_838_407,
	58_203_565_325_359_399_008_402_633_568_948_830_189_458_628_227_828,
	80_181_199_384_826_282_014_278_194_139_940_567_587_151_170_094_390,
	35_398_664_372_827_112_653_829_987_240_784_473_053_190_104_293_586,
	86_515_506_006_295_864_861_532_075_273_371_959_191_420_517_255_829,
	71_693_888_707_715_466_499_115_593_487_603_532_921_714_970_056_938,
	54_370_070_576_826_684_624_621_495_650_076_471_787_294_438_377_604,
	53_282_654_108_756_828_443_191_190_634_694_037_855_217_779_295_145,
	36_123_272_525_000_296_071_075_082_563_815_656_710_885_258_350_721,
	45_876_576_172_410_976_447_339_110_607_218_265_236_877_223_636_045,
	17_423_706_905_851_860_660_448_207_621_209_813_287_860_733_969_412,
	81_142_660_418_086_830_619_328_460_811_191_061_556_940_512_689_692,
	51_934_325_451_728_388_641_918_047_049_293_215_058_642_563_049_483,
	62_467_221_648_435_076_201_727_918_039_944_693_004_732_956_340_691,
	15_732_444_386_908_125_794_514_089_057_706_229_429_197_107_928_209,
	55_037_687_525_678_773_091_862_540_744_969_844_508_330_393_682_126,
	18_336_384_825_330_154_686_196_124_348_767_681_297_534_375_946_515,
	80_386_287_592_878_490_201_521_685_554_828_717_201_219_257_766_954,
	78_182_833_757_993_103_614_740_356_856_449_095_527_097_864_797_581,
	16_726_320_100_436_897_842_553_539_920_931_837_441_497_806_860_984,
	48_403_098_129_077_791_799_088_218_795_327_364_475_675_590_848_030,
	87_086_987_551_392_711_854_517_078_544_161_852_424_320_693_150_332,
	59_959_406_895_756_536_782_107_074_926_966_537_676_326_235_447_210,
	69_793_950_679_652_694_742_597_709_739_166_693_763_042_633_987_085,
	41_052_684_708_299_085_211_399_427_365_734_116_182_760_315_001_271,
	65_378_607_361_501_080_857_009_149_939_512_557_028_198_746_004_375,
	35_829_035_317_434_717_326_932_123_578_154_982_629_742_552_737_307,
	94_953_759_765_105_305_946_966_067_683_156_574_377_167_401_875_275,
	88_902_802_571_733_229_619_176_668_713_819_931_811_048_770_190_271,
	25_267_680_276_078_003_013_678_680_992_525_463_401_061_632_866_526,
	36_270_218_540_497_705_585_629_946_580_636_237_993_140_746_255_962,
	24_074_486_908_231_174_977_792_365_466_257_246_923_322_810_917_141,
	91_430_288_197_103_288_597_806_669_760_892_938_638_285_025_333_403,
	34_413_065_578_016_127_815_921_815_005_561_868_836_468_420_090_470,
	23_053_081_172_816_430_487_623_791_969_842_487_255_036_638_784_583,
	11_487_696_932_154_902_810_424_020_138_335_124_462_181_441_773_470,
	63_783_299_490_636_259_666_498_587_618_221_225_225_512_486_764_533,
	67_720_186_971_698_544_312_419_572_409_913_959_008_952_310_058_822,
	95_548_255_300_263_520_781_532_296_796_249_481_641_953_868_218_774,
	76_085_327_132_285_723_110_424_803_456_124_867_697_064_507_995_236,
	37_774_242_535_411_291_684_276_865_538_926_205_024_910_326_572_967,
	23_701_913_275_725_675_285_653_248_258_265_463_092_207_058_596_522,
	29_798_860_272_258_331_913_126_375_147_341_994_889_534_765_745_501,
	18_495_701_454_879_288_984_856_827_726_077_713_721_403_798_879_715,
	38_298_203_783_031_473_527_721_580_348_144_513_491_373_226_651_381,
	34_829_543_829_199_918_180_278_916_522_431_027_392_251_122_869_539,
	40_957_953_066_405_232_632_538_044_100_059_654_939_159_879_593_635,
	29_746_152_185_502_371_307_642_255_121_183_693_803_580_388_584_903,
	41_698_116_222_072_977_186_158_236_678_424_689_157_993_532_961_922,
	62_467_957_194_401_269_043_877_107_275_048_102_390_895_523_597_457,
	23_189_706_772_547_915_061_505_504_953_922_979_530_901_129_967_519,
	86_188_088_225_875_314_529_584_099_251_203_829_009_407_770_775_672,
	11_306_739_708_304_724_483_816_533_873_502_340_845_647_058_077_308,
	82_959_174_767_140_363_198_008_187_129_011_875_491_310_547_126_581,
	97_623_331_044_818_386_269_515_456_334_926_366_572_897_563_400_500,
	42_846_280_183_517_070_527_831_839_425_882_145_521_227_251_250_327,
	55_121_603_546_981_200_581_762_165_212_827_652_751_691_296_897_789,
	32_238_195_734_329_339_946_437_501_907_836_945_765_883_352_399_886,
	75_506_164_965_184_775_180_738_168_837_861_091_527_357_929_701_337,
	62_177_842_752_192_623_401_942_399_639_168_044_983_993_173_312_731,
	32_924_185_707_147_349_566_916_674_687_634_660_915_035_914_677_504,
	99_518_671_430_235_219_628_894_890_102_423_325_116_913_619_626_622,
	73_267_460_800_591_547_471_830_798_392_868_535_206_946_944_540_724,
	76_841_822_524_674_417_161_514_036_427_982_273_348_055_556_214_818,
	97_142_617_910_342_598_647_204_516_893_989_422_179_826_088_076_852,
	87_783_646_182_799_346_313_767_754_307_809_363_333_018_982_642_090,
	10_848_802_521_674_670_883_215_120_185_883_543_223_812_876_952_786,
	71_329_612_474_782_464_538_636_993_009_049_310_363_619_763_878_039,
	62_184_073_572_399_794_223_406_235_393_808_339_651_327_408_011_116,
	66_627_891_981_488_087_797_941_876_876_144_230_030_984_490_851_411,
	60_661_826_293_682_836_764_744_779_239_180_335_110_989_069_790_714,
	85_786_944_089_552_990_653_640_447_425_576_083_659_976_645_795_096,
	66_024_396_409_905_389_607_120_198_219_976_047_599_490_197_230_297,
	64_913_982_680_032_973_156_037_120_041_377_903_785_566_085_089_252,
	16_730_939_319_872_750_275_468_906_903_707_539_413_042_652_315_011,
	94_809_377_245_048_795_150_954_100_921_645_863_754_710_598_436_791,
	78_639_167_021_187_492_431_995_700_641_917_969_777_599_028_300_699,
	15_368_713_711_936_614_952_811_305_876_380_278_410_754_449_733_078,
	40_789_923_115_535_562_561_142_322_423_255_033_685_442_488_917_353,
	44_889_911_501_440_648_020_369_068_063_960_672_322_193_204_149_535,
	41_503_128_880_339_536_053_299_340_368_006_977_710_650_566_631_954,
	81_234_880_673_210_146_739_058_568_557_934_581_403_627_822_703_280,
	82_616_570_773_948_327_592_232_845_941_706_525_094_512_325_230_608,
	22_918_802_058_777_319_719_839_450_180_888_072_429_661_980_811_197,
	77_158_542_502_016_545_090_413_245_809_786_882_778_948_721_859_617,
	72_107_838_435_069_186_155_435_662_884_062_257_473_692_284_509_516,
	20_849_603_980_134_001_723_930_671_666_823_555_245_252_804_609_722,
	53_503_534_226_472_524_250_874_054_075_591_789_781_264_330_331_690,
];

const problem013 = () => `Problem 13 solution is: ${numbers.reduce((a, b) => a + b).toLocaleString().replaceAll(",", "").slice(0, 10)}`;

export default problem013;
