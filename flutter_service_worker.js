'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "9ed4234eb170d98a53187bed65976f8e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "079307fd95c8273cbfeaafbbaf68bfa2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2186aec788778df043458b7c35249b7b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d9ca15fa0bef01205441b6749e8863ec",
".git/logs/refs/heads/main": "ac728224d9c03298bf86b51949ddf890",
".git/logs/refs/remotes/origin/main": "10305e544bb7bdf3756a5543f3914ac6",
".git/logs/refs/remotes/origin-push/main": "2280434228ab7da77a203fc3dc72ecb5",
".git/objects/00/20e7272f2288fc00f88bfabe281222f0847c95": "ca5f0d1d0a6cd869b800beec01838095",
".git/objects/00/bff3495fa9d2f98c1c9ce436add6a1bcfe87fb": "2f5781564b24a114d6c3bb383f212a80",
".git/objects/01/b132dfc3cc6de0067655947634417f8981327c": "b93cd5a46672f420bbcde3e627533ead",
".git/objects/01/e644220451e501c7c8d51bc23ea1174007feb3": "6bfc1b0f71205f213ab2d8105d44ff5b",
".git/objects/02/0209f1e0c0acd4e2d02de65f458cf1f14e4de1": "8ad7e93507ac64218903f06ff60b541d",
".git/objects/02/99b68fe81d94376d2ec9d26b21a5394ebf3ec8": "7c626f845fa41e845251b9552d53b3c0",
".git/objects/03/f0e42dfbb2f5c932683c5e9072b322435d4971": "3a8cdb650e938f7c9b2d66c97a1e539c",
".git/objects/05/40783640f704a608fa237e27de16b39618d82c": "f6dcc3b4c7d309bfcd9c9b53039a8afe",
".git/objects/06/f3258ce5b48257805c4e767d67b8fac5308047": "2c882124b5d8a73e2946824d39d41502",
".git/objects/07/5b5a7666f11dd7b0724e83b435dc369892ea29": "153c14556d0e605033ed6f5ed307f98e",
".git/objects/08/0d73d4354585c1a29158bcc5b7b4f3642cbf74": "c06b5dfec39fc91c4129761af15dc178",
".git/objects/0a/caaff03d4bb7606de02a827aeee338e5a86910": "57ae176e14d4502d7efbbf71371f0a1d",
".git/objects/0a/e390d74c9f665cf8b1e5ea5483395da7513444": "8e323d1f2181fe5149b99fcae9109d0e",
".git/objects/0c/4bd3cdaf1f41d1b156193d7568a3725cd47025": "c8a6c0156034f029a26c793300183077",
".git/objects/0e/7da821eee0dd05a0a6f0b16c2c1345dc573a84": "7832513a48d0332430c83a4e34f7860e",
".git/objects/0e/9b0f354ad460202bba554359f5adcc8da666b7": "4c206f017cff48fc3b7b4d52d7e862ba",
".git/objects/10/9a3cfa3a9656f98d4a109c4ab024ed4b06390a": "efb387a0a7e6125a449839f20d7beb33",
".git/objects/10/bc23bea919e1af5910537e2af17549afba9d02": "2e1f11b99cbc33e6b2222be55422214e",
".git/objects/11/96f72049d285088ac5ebd5b6cea3c4b71c6fd2": "df387c81798e833bf23d6ae35b1fab55",
".git/objects/11/bf49651189808a10edb82f429ebaddaf4a2281": "19bab569a40a3190aa36ee28052fd4f8",
".git/objects/12/44cd322a2e54c45e5c57eb2fe4c7a9aa08f0ab": "e1d70f4426398ac1f5e6b1d0ed471917",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/096a01103a7baf10fb8e3e7d79e14907ecb957": "34e7fbd3c5d85e069bdfc34a4368c77d",
".git/objects/14/6f72df7ea7cbd5ec5e00fcaf08361789ae1beb": "e5cea45f999f77ef72f20f1553f36c85",
".git/objects/17/6e5d7d56f1b98b07a31a8b1877f26abebc63d0": "44fcbca2ebc53cbda36d0cf40e8ca0b7",
".git/objects/17/beef1b2eb482e9c49985ffbd48d01b124529c5": "13cf264426a2fa864dca02386cb50e25",
".git/objects/18/66f55871e4b2d47848ff3ff67d55f0dd5f3bc8": "1a92d97c4b66c2061847cbea6458eed4",
".git/objects/19/0c616c9dc8bf8fc2ab62cc2e42c3f1b47bca00": "8261f47e1b1519db0edfff59b36e7081",
".git/objects/19/98c8cb6454db2a99e270fb9ee4b1e766b4259c": "ca397eafb79f12c456994b1e4a0d5300",
".git/objects/1d/b70d99d604fe6f70a780669f7228059a8b0aed": "af654dbe9c412d4c9c8a38c5b40f8641",
".git/objects/1e/45310cd61d758d12726d54467a149ef26d61fc": "6bb15958adae8fe15543dac2e95beb87",
".git/objects/21/5c143fd7805a5c2b222bd7892a1a2b09610020": "1672378e99174daadd9074de6b4175c8",
".git/objects/21/f5812968c42392a3eaea9b0c6320870b6b8b38": "cf48166d50ceb9b0c541c37588032865",
".git/objects/23/3696f5790812f5397aacd5271fe4277547656c": "27d8369ffa5b3acd4c2223a6241283d8",
".git/objects/24/0985885b4543b54b1e1bd4df118164f8c67362": "90c4c0592b958ed13f4de77efe2492fb",
".git/objects/24/32419f28936aff53ddfa2a732d027e6a6648fd": "617e47dd08567137a803327fff33a806",
".git/objects/24/9a28662218a7a17ad8bd1fe072169ecb666a49": "510a683ad3e676d6d875612dc2a46da9",
".git/objects/25/d96b4fa8f89551d0713f1992901ee151b6be3c": "189e2647ee62c60d25c6977c36326413",
".git/objects/27/92957db9ae4a0531fa07558425de0d068d8725": "42d93a58b248f9092090b0d5b0472415",
".git/objects/28/50a260c8c41b55e6cf8b539af5edd0b6b9aa4f": "3a818fe2a3f5c676ba214d8621319be6",
".git/objects/28/52000e779d82c632fc6eb7420b142106f82f90": "db28d602221de3bf2d9366dc8fcc3371",
".git/objects/29/657023adc09956249f6295746c8ce4469b50d3": "64911e9dac94171ef1bfa4caf8603645",
".git/objects/2a/5948ed08fd57eaf9251fee58a66140aeb1c4a1": "2a40b93923c8c501c197402d8390bebd",
".git/objects/2b/2930ccfb2fe982529f1e823b18f4d6ebf66a45": "54fdecd2943b563d1209c5f51faef6b3",
".git/objects/2c/0b8c6b70c740de32548ed5980c69deff3ce48a": "9465f8e32cb4e3b4953382a09df2e150",
".git/objects/2c/5897f5ffa13af667c8e383bc21a73065e8f606": "6c08e25c045fc59d437d1a2e995005e3",
".git/objects/2e/3d2826fad5b8d508ca3d1e4133b66083372abb": "e2924a2932d7e4df2b157499fecaf8ab",
".git/objects/2f/65a8a3a6d3628d11ea9c26c9077cef672fe427": "4df1192bbbb8e43b045ef67721553c6d",
".git/objects/2f/bdbc00661a734208b23976873f99c114d319e9": "17fb0cd6c8d8d72016f5d7b110d9a62b",
".git/objects/30/a0fd02d67b08d6a2eb54d488b776f3a8ab394a": "4ac31de0fe83ac42709731395747112c",
".git/objects/31/b84829b42edae20d0148eeec0d922dad2108c4": "c41708daf220129ead705f3fb75f036b",
".git/objects/32/262432e3a08215c9417a4972f9282273fcd75c": "9d2239f80215275f4a3c9ffd84147e22",
".git/objects/32/d15e65d4ace5ddac9d1c1087799cbe87146d74": "69c8bd3ba08322343b51aeb5ab1f985b",
".git/objects/34/9c06dc609f896392fd5bc8b364d3bc3efc9330": "3daf1b61bcadd570a3f1635da064f4f6",
".git/objects/34/ae0ba81d167b9cf71ea78acc8446b79616f323": "f792a544ef599f6a62d673a0117f9ed1",
".git/objects/36/693298696f4380df34235df9facc30e63b8f64": "c74b74221f5ecdd15c2bf600a15a7613",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/bd538754c2bf944fd54545e119ebb9f995bfb7": "74634eab784b4d3bacf60a379689a7d2",
".git/objects/39/5f28beac23c7b0f7f3a1e714bd8dac253dd3bc": "1e4fb60ea5bd2ef46be28c84ded6fd7f",
".git/objects/39/8896d110fc1a13e320f4f69eaf4b8e7d30d3fe": "c925b12656d21eb19140da2487cb9c3f",
".git/objects/3a/00ae1b29c6451db61a86d356ca47e0cc6cfdbb": "9826bc8a9540581ce67b32fc7687ac0a",
".git/objects/3c/3dd898ada5c21a08daeeb09954f6132588d7e1": "13637cdedee4be9e8b7b0e058048784d",
".git/objects/3d/3bed5d4f5e70259067ed189b9cd26559cf0f5b": "592bc9f7b328fc667d81095ebff0a807",
".git/objects/3f/0558675443d6c26f28d5da17281d6c08317b54": "ebdb64a9f9c9cc60d561c255ffbb0fc4",
".git/objects/40/048b5f0041b0d4aef8b2ff17dd87bcdd50cef6": "1c9c70495261a155941d78b2daf6fb92",
".git/objects/40/60e627dc341c1854260cbc3f7386e222a4d297": "98f19befdb7b2fa83969f4b5ec4e7300",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/17fc1fb7a988efda5b85f6608b3d2aa663b25b": "94366f02921d2793938ad1915d615f69",
".git/objects/44/4950ef644b790804f371669bc5e13d6759215e": "d44f07d809f4566bcb7751efc017aca4",
".git/objects/46/8f977252e0a96a97626104bee0ad1f4c95eb33": "7dfe6812375db453eca45a974035f580",
".git/objects/48/9bcf65120150b76e727550a09338f47da2aed0": "ad5f42110215123470993c7e3e81d9a7",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/b9b0b6b34a8d44089f153a790e81ef32848cee": "778cda95e09f9b219b0c5050d4e9f9fb",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/01fe74b5540c14a212bf8277b854de625b712b": "bfa4c34df3c5018578c214859d7913ff",
".git/objects/4d/7824c214dbdc31b5dab422572ec4bfa6b34de3": "ff2b1335c65b80986df9e521445d5efd",
".git/objects/4e/43f43682c87adceeca80d882943cc6c77a1872": "ddf56e509232b57c0682c0efc5fbf60f",
".git/objects/4e/98259c3b54076d684bf3459baeaeae8dbce97a": "7e47b2e9cc2a55f881df75a5650f92a6",
".git/objects/4f/ef806ac633ae60a973a1984660dab4fa78cc4f": "6230aeaa38116e394d891bd1e3e786f6",
".git/objects/50/e7eaeb335ee972c8339198f7e1fd4d1b0cc40c": "9d70da7310cf169148397d4a55acf1ba",
".git/objects/52/e875e6404b23d5201cb2c1e161e3f9ac69f059": "491e23ba1395fa457d6de00828e81fe8",
".git/objects/53/7279f6bd2184ed32f1a5168850609147d58ee6": "9d9d76a7f3a2660ad30a55cbfa2b8488",
".git/objects/53/a11e3c1922483ab9d68106e351594bfe466a49": "bca04586ace029857f47e573eccf4a9f",
".git/objects/53/d447ee2c647916ccb3b12c309060a2543dde11": "061b678811ef633d08f0b1e3d8bda76e",
".git/objects/54/5533b2928dd613d7a350d35a42a5bd0b89fe8b": "a5d0d1c897c07839ba0487b3f2ba189c",
".git/objects/55/781d448ba03b978187dfa92cebff6c078eba3e": "529d6cb7c86b61f537570446a671da07",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/cc2a8cab7878cc56e5b9eb71f990d6123482d1": "8cb28fef027fed6aced34b70e23811f9",
".git/objects/57/9e1fb5bfcc79cfd03b51443e5e00d934cb4b80": "93a0bfc56194716fb214043711b83e5e",
".git/objects/58/f941290eea80d579f81fbaff68b6da508c8735": "c7046a8527a7aefc43c42ed5a6682c08",
".git/objects/59/31794de4a2a485fa70099bf2659b145976d043": "b324a60b946b49d95134e5b1ad3dd737",
".git/objects/59/b9898492e638c7bd029b2092d39b6a612cda98": "04284375e244026ab6bed3c01eac73aa",
".git/objects/5a/73c58b52cf6693d3b00c674cec724d7eb2a03d": "8059b3c8d34157cff99b59e7890d7148",
".git/objects/5a/879d9ddc92bd4ba5d1a08d45055a879d4d778a": "6dcbff14e3aaf4d5b9a10bd71344a810",
".git/objects/5a/d76f09a2f71285cbc33098dc1003e66e8dc10e": "2d61ae7a8bc2c07ec0df586c39a45673",
".git/objects/5b/4f23f60d14a583bdad020584f49c1188c3ec4a": "93e14bedd7dbc22cc6eea2ca544938af",
".git/objects/5c/5ed3a83bb95b7234bc9d3ccd54feb32a89096d": "7b8b85a3dd6a1b9869dd31c836d0a162",
".git/objects/5c/de8c191aa77bfe8e1c97b73abc1902358bd12d": "0de2183611cf33d77045d37b5526b4e5",
".git/objects/5f/bcbdcc21db18edb6beecdd6eafbf7cc8e67931": "18eaad59e02f5356241b236a91a9f42e",
".git/objects/63/2d269c134251c280256d5d4073eae66f5a88e7": "bb0be97341f56a1bf2203d64ae3af4fe",
".git/objects/64/1ed1b7d2076ffa9bc880fd944a39194c7718fd": "3c424cdd06521f576f7c1c23049289f1",
".git/objects/64/30a93f999940837b6ff7a668d55537df892679": "f06c7b086fae1c282fa33967298bcc6a",
".git/objects/64/6efc7081ba83cc69f413e885072563d472903f": "26556e64560cfc37745d7f25a9a57716",
".git/objects/64/dba4a6454739d8c5f0919d1f3e2ca57d2d3507": "59d9633720bef32407ae4ad0a80518b5",
".git/objects/65/263a4d10ec76f390a6a182201fc3df152b7a54": "ab332a0327c03e8bc753eff714734a4b",
".git/objects/66/20964b0b68c000de6fdc51197003d9b11a8449": "350662912058f02db336d14438bcf47a",
".git/objects/67/807b0bd4f867853271f5917fb3adf377f93f53": "638372b81190413c6f51eef2fda41d79",
".git/objects/68/0c13085076a2f6c5a7e695935ec3f21cddb65f": "01e7b3913c9e03517f46d244870d979d",
".git/objects/68/d71c20b6adb79d18579faadd6f58128fd8e5bd": "4355077dacc8102c11d1443ffab48637",
".git/objects/69/7d890649d4c327698fa3921bc6d17bd66dd78e": "b7d376b572d6aa919c67157f8df64c81",
".git/objects/69/a3caba8b0d8a2b22f87a7ccdc52f88e1de74b0": "9828b890e3f8e5e8bb9b850ae7484e37",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/86d98b154d64d277bd32bcb4c66c79e07c0390": "a1f9fc939ec90504500552f0a497893d",
".git/objects/6b/3dff68a5008f2ddd76897efb5bdca641b42acd": "6cd35787bd35e7acdb95dd91e4e27e3c",
".git/objects/6c/079f066736ab260547cf943cb8aa4dd3417687": "1313295e83e1d29898e27024a26eef37",
".git/objects/6c/b332c1a1eea4da629cfeb1564fc2c23585ea66": "552f66a588b6e94e9f6e9f428b48b8f5",
".git/objects/6d/5af2875e7fbd9a147a7e793cbb90f99fa63af6": "775b5269558c12c45593e32ac98d620f",
".git/objects/6f/43b594b6c1d863a0e3f93b001f8dd503316464": "f90cf6dbc4ad24b10b43a1e76729b464",
".git/objects/70/d559b4e937ca1b805eb39f544cbebe3c58ca6f": "287fe27d030bfaf783edd46980419817",
".git/objects/71/67c2783abc5d6e1f85d2177179a37db2e88080": "a120d8e9c2dc3e7d5d6af7a62726da48",
".git/objects/71/6f2d37c08690a9995c9a9e25f2b97ac8b52218": "7afbe31acf0d76ba7ffba25bc222985d",
".git/objects/71/70bc37e4f3a1b832cc722a2480de26ec25ff4f": "09c7063b7f9a1e2c5d9ec6c1489b9f83",
".git/objects/72/321183cd69781369c8fde966afdb01088249fe": "b14ef2f4aec87c0dae8bc1046e5f3ecf",
".git/objects/72/8ce7a1e2cb689df32c3a6c26e1bd072dcf2acb": "e23e5d15b34329c30ca190686e081a49",
".git/objects/72/ebc8f49d7bd526651d28472e7da9dec3b18c31": "c22ce4f1afba261de0a89b202c661121",
".git/objects/73/16151036dc8e92fc77c230f82ba2a5f8fc251c": "624cf8641c64aac189a5e3b8e3c9979a",
".git/objects/73/5f6948d63c8cc7f8233735bb9c8d843c83d804": "ebe10d3c436281d13f367a8c1ebc1945",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/04ef59d2e4fc9587e3f61835c6b3b60b93e26e": "00cafd12c93fcf407a9d7459b7e299cb",
".git/objects/74/579dd9a11051d6396bc3b81367977368e8a529": "0367689dc37d7bf67dd24a32df79c429",
".git/objects/74/f08921f00f71f413ca42c9d1c90202e672ef38": "eaf71624f2115a44ba63d6cfaf0a6e13",
".git/objects/75/0b96ee12393a63c0f0bef788675206cd57b1bb": "ff7f8ede8fc827b1b84c1486fd3eb4a8",
".git/objects/75/344a1f98e37e2c631e178065854c3a81fb842f": "59eba43822cc21b3367a619374166012",
".git/objects/75/c8f4172b669b77785cdcf488f0e2825574b520": "5d21509aa86487291291ab79e39d0dfc",
".git/objects/77/1f1af705f5cef5f578b3a1e7d8eff66f9b76b0": "a627cc26d07b25edda9f745a877666f8",
".git/objects/77/a70c6100348c0511150adfa86314be7552644b": "28bfba58fce2749d36d06e0eb94f4f8a",
".git/objects/78/272f1b6e05f9854667c990ccca5d923cef766a": "6544366055b51a1c1a901590806be915",
".git/objects/78/282b5373ba1414a3dcf3898a0bce25ff514783": "19e40b46fbd943f0b290be2d230e36b8",
".git/objects/78/287261a73f4a0bfceeba1ba46ef810e88b6d4f": "83055f76a9ebd3ed33b88f6de5f314ea",
".git/objects/78/c32c41b4c5513e65184b48588cd224dc19db9b": "958ed6dc84137d4cd6b084c04e2f6342",
".git/objects/7a/212caf91c0007e826fee2d622bf48acbd30dde": "089a41ed1a7775002e23badffaeee112",
".git/objects/7a/600d31520db06ac13d802ebea6e2ab19670d80": "8ee4f3cbb4e0ae0674ebf419eee3dd41",
".git/objects/7d/5345befffe15664ef1485ad0f6f1ea4325f36c": "e9fed8c7582ae65f7afd911bce91811a",
".git/objects/7d/b1860bf7967a13fc78eca6e1fe64b1674b02ab": "672ffc505a96d08951ac75a8e9fd078d",
".git/objects/7e/02df963621a5e26d53d510f0b4992eebde1c60": "568df0f074643d989bd3eb4ec3b167a4",
".git/objects/7f/292d91184f257054ef77cc1cd3443db757c9cc": "2d3cd44c7ecff13c30fbd487f65ce4df",
".git/objects/80/353eed3462cdf5c097cf2682f16360e8fb6cf7": "eb8236a124de0e5f31354cf73ebeddc8",
".git/objects/82/2ebe128cd9a56d01e30cac8660c23c6ed12e30": "6ef97d4a7139a5d3e3f16438a16972f5",
".git/objects/82/648a960d954a2f00108bcf111d41000aa09394": "ee829cea3c0f8b88331b2871545cab1c",
".git/objects/85/ae8cbc0d2e04fc49570568f25628ed46ce612d": "85b3f9aa28ebd3fca544bb58a7660249",
".git/objects/86/0d2d62ef48f94ca5da10ba66737f613ca35db5": "27f56328dfa96c70d9722b1824da37de",
".git/objects/86/b9080261d2d2a6a047067576a3bf91b52a4d0a": "134a5167f62254f6c676e6355c2a1a02",
".git/objects/86/d5eba48a5dd6e0a4191151c5e1fe8d583a77bf": "6ce00d283f87b3bba7bb7974485e7b12",
".git/objects/87/186a9fc342fe29f7f6f7c45eb9d22e4abf8090": "37ef22f022c7408102ed43f875d5cb1d",
".git/objects/87/1fd7d19d8658f64d8696ed9cdfc82c821ed76d": "2dcb53aca46093a175bdff6f925ef3e2",
".git/objects/87/da948ad6b3eaae64f7739c372dca6f799c5562": "938163139dd95b04ea78c4b606456331",
".git/objects/87/ffef78c17ad94acd0cecbb1cf54fd6a1671651": "c81bbe425613ecc258164ec78d042e16",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/02502e444065154f60406b2f83cd1ab676680a": "a00a8748496e6823dedbb78202f541fc",
".git/objects/8a/03700e6451bd3250d61369d59361951b506bd2": "d9bb7d059ab34939ad9e75dd87697355",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/42c84b90aa720478466cab98b22a5db2be4885": "22deae2b7de7d8d1bb45f10ac24a81f5",
".git/objects/8b/693a6acbc7224d57a6f0b25a72e7149f642c77": "4df2659ea0bdcfe2eefc368bb2ef1729",
".git/objects/8b/97b357abedfaa84b29849dba4a56b944fd2217": "ab6c373c8f1db7f4843847c633fcadfa",
".git/objects/8c/4f8edd6cf0cfcfcd285f5ddc1ff1b1f0440f31": "3a7540c74449caec48d100a8397c97b4",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/0a8afbf3df02ab4a217453e2c89efb52ba4481": "d4e0077ad5ca9a0233be52ff1154c722",
".git/objects/8d/1cbce5a319b0fa49d9655b0b0b8c0abec103c6": "762dc5895426cb98bfbc1ba78a214975",
".git/objects/8d/47c02d9408d34b2a9d566c0fe0d42bf82fb735": "8b6841b71c0a6948dab38eae4a609e77",
".git/objects/8d/7eb5cc421701ada43fb64842ddfc9a9fcdb99f": "81a72361fc2e0d0068bbf4afc0aa5daf",
".git/objects/91/5b330643824c76a4b867db1d7f7322d4525dbc": "d095cf6a8ef420cca224b232eb6b6730",
".git/objects/92/00acf794a450c9b0cd2c31d45a013d134e671a": "5967e083097e1ff6138caf38755f532a",
".git/objects/92/2c361af959062b89652f6f547595b5cf57773b": "63f9766a4a8aba82d418d27d30faed56",
".git/objects/92/66cf238b4667a7281224acb437422b9cbf6d3a": "4f2be24e064597add53e8a8cfdd1eb91",
".git/objects/92/9771ecec42b1ba63de4a62db609b8254b32646": "a1341071d497efdbdf8d8b87be37c48b",
".git/objects/92/e06103b870b83752c054944c734498aae3b13d": "37518ea829a5344f772be486cc3ca61b",
".git/objects/94/c64b9983bf7bec1a7cfa0790e6cda3115c67a2": "6d5a92410064b073e0690efc3a958a5b",
".git/objects/95/fff2c41ca0c3f489333f9bd1237c766d93f0b7": "e6e00592476cdf9d93a19cc22c195fad",
".git/objects/96/46585683adec893e864c3c130058db15c13848": "676be465ec178419368475424ee1f8a9",
".git/objects/96/c665141511331505193d2c81c1c123be83f70a": "5c1c9a3fb321e612f7683007f6218ba4",
".git/objects/97/59710d1d3e16eb10012d56babb73f2479ba9f0": "1336efbd462f98525cc81e916cbe5bcd",
".git/objects/97/612561273754be54c477f017eb7d97f5192f6e": "48e58e47162e41c326c4b174e273777e",
".git/objects/9b/dd534fd2beb9b878f0219da9d63ffba56677e2": "8863ca71c5484bcaf014e230833151e8",
".git/objects/9c/232710476560489faef43a40a985edaa8e0c0b": "c21bc99559f67e8dfaa6864423612de8",
".git/objects/9f/dd881e3366db4d9a070b4744bdaaa427f4f675": "d618ad0688e0e2c74be2592e12fbfdab",
".git/objects/9f/f4a5e04421e5107f74c28e27354e0b2a4e7ef8": "ac8a95a97cb1bfd02d610f8c3f2d56be",
".git/objects/9f/fc80624c036141dc0f9d9a52f14cff9359c4fa": "7da1296b0fe5f1545eda37fd1161e859",
".git/objects/a0/80280d966627365b28bc25483156cc32686d21": "a1470c841ca07600bf87deb39574c61b",
".git/objects/a1/b79d2abb9efdf42d1b13104cf4072cae95cbf3": "a6cb5636891fc869a975e5f4cd4cb6dd",
".git/objects/a2/5b59457f4d3c68f5c3e6c35bb4ebb8b325d008": "66d1ce57539c70f6b97003c6d6570213",
".git/objects/a3/799123409848210b9a08111916620ed916e757": "9525fda295358c9b8ac319f823c91fe9",
".git/objects/a3/e791d6f2823bd0d02fce7fb84747bcec3bf131": "c100d76ca1c1eca9c94deae4172c9be6",
".git/objects/a4/fd8c940cd120baeac9a17b21a5f0ed38f1ddb6": "cc868da6e68099de530c6a366a229c6e",
".git/objects/a5/c7237f5188f7defff1efb04258805277c73516": "b593f78ade73c1257da64904adc8e14d",
".git/objects/a5/fa83b0422628e0c00c28a591d652b0ab4332df": "bcb95e57cfa01aaf218b10d011a4cd05",
".git/objects/a7/327775babfa61721e82153b24e3095bd51961f": "e3d00d8b26b0f81e7e07557ffd276cfa",
".git/objects/a7/a79b8a0b68d70a918680acaf48043527dde063": "67e6dbd37462b08ec435c0f9094a6e18",
".git/objects/a8/1d06b307508f881277b98af889c9ca31b37b99": "16684479895d63d051d3a201c41fdbc0",
".git/objects/a9/02d6b059cbb954e37af615d00f25ae4b31b87a": "93b298bed25e708b1c3673603842344b",
".git/objects/a9/0eea85f6f7bded69ff5d40114447a6d8b48cfe": "53a11aa3cd07a750b646ea36435222b9",
".git/objects/a9/b9ffdf179109208c4f864b609edf1a5447efe7": "8ef8cb67f1728758defe6ef79967d614",
".git/objects/aa/0b43db6a515e0232f2162db77240dedfb7003f": "e9c57513d162b1ebe7d4bcfa369b7db8",
".git/objects/aa/294cf139d44b30e89861992d8e510cb8fbcc71": "f56ff0079c70c078dc20a1e754a4b031",
".git/objects/aa/df4476d8b3f37c024a1b1eee2d3acf74e82be6": "d50701d54eec532f4ff63cdc27c61943",
".git/objects/ab/2ad21da6fbe6c171bb869240954d0ead8f68fd": "b3c89487d7fdb6ee09d6b31302b99d1d",
".git/objects/ac/465db331abc1ad6938885b4d4e6bcc37891023": "f4e8104a1f0f687d3f6e9f2714487e8d",
".git/objects/ac/538b86d5b5a4430d7945e9a91cb60d278d800f": "4b305853f7a2942373a83e50e38a6ad8",
".git/objects/ac/84fc7249cb3324397dc2cf8bd00a2bac1d2aef": "392ac543878c268adb0cba96f37ee5bc",
".git/objects/ac/ab069f90b6fe6301a004e6f8beaf6a0db48bce": "19b1d17dd42c0559e39dad9e690129e0",
".git/objects/ac/fb0dcc40ce8dc6aca1d840e5c12b577ce9efde": "c2f51e725938f10b6bc7e2c6862e5e70",
".git/objects/ad/a071c17a0ab48baf368c14279af8f3a9c451a2": "db93b482ac49251cd065a2e71cf7335c",
".git/objects/ae/53abf5fda8a553b8b35ca14b8284f7a91009d8": "be8973dcbda4baa64f134062543aa887",
".git/objects/af/0212f855440c78cd556d4502316ec43fe300a2": "e4a69b57e9ef3644d123075df99551b8",
".git/objects/af/792f5bf18fadfeafeaea6306e3764721fad3a9": "c14b95d6280771565fc4a82bee6a41c5",
".git/objects/af/c98f1d63c871885e4d5fae5ace86f1304e7746": "0da51d6cb088f2e73a7499d0a1e8004f",
".git/objects/b2/55011b1376a8f704d124a05ebd44fb4628f6f3": "b79746914e3c1fa08ecd69ee3ceff10d",
".git/objects/b3/048fc115681ee6c1bc86b0aa158cfbbf59daa3": "1e5567a3dcc4106e35d62c6dcb397652",
".git/objects/b5/0920e138807f385d0b0359f4f0f09891f18406": "06323d363a26a919f59dc7e58affdfe5",
".git/objects/b7/0735c3738e27330a1da4e3d0fc87b48462373d": "26b9521a333922a1967f2d1c65067a4a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5bd5cbbb87547c567e907f956c832e59abbb0f": "e3527fb88f39cacf7023a182b40233b3",
".git/objects/b7/77bf965e5fffab8d52c88f85fab7a4eaf13417": "5a970455a47ffd37745624708e0bcd7a",
".git/objects/b8/04d7b33a3fa5b2587d2d1d55006aed678e3eb2": "c2713fff649db4d9ee046c291e0a2aa7",
".git/objects/b8/461b275fae76efd0d21fd0f1aaa696a5b10f9a": "fe100c31f2e81504dbf3b64f052a7c36",
".git/objects/b8/9cba1dc205f8cfd7a1faec28fd0513aee99a74": "67fb1820eca44d74c1ead8efa6f5cfe0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c333897346155fc15fa189a61ff35d6cbb5243": "b87e7c86097a1e83b37bd434418ce0f4",
".git/objects/bb/8386c6b6f79745429e3c7bdf4e05d2319e13c9": "e1b1fa4d85f2f71847ad150e57d8d194",
".git/objects/bb/883f2776bc407864eb1e39e8da34df613834e2": "85d06dfdf71bd5ec74c284ddaf6061e6",
".git/objects/bc/84098869849528b3698726dade27f7d542f38c": "9b49c8eebf48ada485183de2dc5e97bd",
".git/objects/bd/be5de1424327de9f75bd232aead15187c66985": "7991285d0daebc9f3776be86c88d6a90",
".git/objects/be/a1d814bc101d03314bfc9c6a4bafbcc9936749": "c2b6107d75cef0d7dbbc5b23661953b0",
".git/objects/bf/58fe419a24b698768eab8b48e98d75bf79da93": "eec89ddc64a2ac9a3cafca4bf7e8e1b6",
".git/objects/bf/81c7e98e483a3b375e2307b68ec9c90a271ded": "d3a5c8377a36082c003d16022af3f949",
".git/objects/bf/b4b99255cb5228de0072ee06abfb9f0773291d": "243e6e8196f700b2e129aa56f657d466",
".git/objects/c1/69ec639f38cf5408c7744afa6a0ad2f2e32306": "2391adb5f2375287dcec5fb84bcd12f9",
".git/objects/c2/4835cc1ae688fb64f4ec18d7ab53d7544c0ad4": "a173c8d64f490dc6333effec1db2ecb7",
".git/objects/c3/f24c4d8f3f27a22ddf544762d02ee765b8fbc8": "e61ff8fa433ff1f1c60f24581da42487",
".git/objects/c4/b20e0b1d2b2973fc2219142655a928088cb47a": "9718c6969632b561939f077ba91e4f67",
".git/objects/c5/a8462fbfe2c39a7c1857b9e296e62500a8a8a5": "593ca163f1cd200e634106782603ccf7",
".git/objects/c6/f9a5e7c03f9e64e9c7b4773a8e37ade8eaf406": "dc18bf411062b7db963c2bee999523f0",
".git/objects/c7/180999419c29f2d75644052bd821aff302ed5c": "b7d3c5a5b28a415cfab1f3fc6b298212",
".git/objects/c7/638acc1c2089474f553a9524403ca9e1a0717d": "45346400f7c9e47dfe74d1e2944b66b6",
".git/objects/c7/78e34f1ca72ab8ea62e7497c1735ae99e6ace9": "c65d6996191da27939e03cf83e6fc3fd",
".git/objects/c7/dd17afe594ef03ad23fc8c18f2263e8d395bee": "648031c6fc9eb35a595b903087c58142",
".git/objects/c8/1a06c9939ab0b98270bec9192c2693d7b675e0": "8cceb8230620c6dbc87da3f57f77597a",
".git/objects/c8/3252c5714c71a3e0ec62195884167339a0129b": "737b019be7af71053abaa8cf28b03899",
".git/objects/c8/4a182adf7ae3c69411710830bdd7c135b8c488": "930499d51c86c61cdf327c9e6eb06f77",
".git/objects/ca/fb08f6a0b8420244546f71bb9275c94aca2bae": "ac59e87c4b2e1d86d5812e146dd3878f",
".git/objects/cb/9d5220f9cfb7295a6e36f6f342723e061af678": "cc71962965f0168ecf07c01be089a3d9",
".git/objects/cc/39092b341e0e21f067e15e9b2b68716b5e595f": "bb52e7e0a2be00195d5a873acd96666d",
".git/objects/cd/e38e34a9a8d4de508a87017190159bd8f53fdc": "5c51ba4cd61c1b688e469400b5d6630c",
".git/objects/ce/a968726243725d9b888de6d5e34457ef6b3ea7": "7df69580075cf3e0f0a8096d68884a21",
".git/objects/cf/5a09ba3f76274e77583b5f2363a3438dddcdcf": "63a179fbf462f946f3b66294f7796df6",
".git/objects/cf/9e51a75316c9e2f196308614c2bdaf2acb4f24": "baa675a3b1756283d74c9ac847f35f1b",
".git/objects/cf/aa3bda59246b49e94298478d6de3b3208066c8": "4235f561bd61d5de468c949780bcb054",
".git/objects/cf/aba441a725660f053b7f179521f68f73adbfaa": "15a10cf30a692642e64c05440a403519",
".git/objects/d0/7712f7756a7780aee6ccb1cfeca8fcc9dc3cc2": "351804cba2caebab6308ef2464f23973",
".git/objects/d2/41d9be2d317f7b39b401d96c8b18836acea0fa": "15d86e9b0ba436d412ebf9b05fb32604",
".git/objects/d2/dfd8108fad2edc51b9f2d976e6185af27683e1": "565475814e82b6ce24b84501a95ed58a",
".git/objects/d4/a3c5d7753db875309d8df7f76cce78b633271b": "e92c75e179e718bee9a3dcb2c4343b25",
".git/objects/d5/850df98ec19de2eee9ff922ef59586efe471d0": "c2749677c31aa279128971bc40d2e09c",
".git/objects/d5/891752bc978825b8c2eff8f5770dece65471ed": "4c62714c4555150145d0a22d57757392",
".git/objects/d6/04e0d06876f9081a41f79ce100d4fb5f5859c1": "05ed955dde16040bbb1dc6e9e9f8c8a2",
".git/objects/d6/45695673349e3947e8e5ae42332d0ac3164cd7": "ebdfb3a967cb8dfccb83cfd1bafe5255",
".git/objects/d6/4e8093be282c9f5cc9154b7f36e86a701dd701": "19951a2a161c469df99756b3d979f1b0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/71bbbfe03e584669314658437f80782a268f57": "79b739039af3b8845a5404c30077e838",
".git/objects/d7/92c5ecb34e699d10b112abe108001b2a0cc240": "c48a9b1ccb0a175825b82c62ddefb293",
".git/objects/d7/ac0eee0d2ff67970fa38f7d79b7b179c4e82dd": "65c19b7f08d405b57edd660bfbbf1097",
".git/objects/db/897c8a9a9b73d49149a0bc15a03675d315825d": "a6a4f8d9275a74a68794845cd5eced77",
".git/objects/dc/007977ee709a236d9e82719cf7d4e5577a81b9": "782db5f97dd79527a5b6ce8d3529850a",
".git/objects/dc/4f8a205a2fda3f4059b4c17a62778ed99d4ee5": "1f5ed70a55cf18b44d0ab5e947179022",
".git/objects/dc/59fa0b74da3156f09c474a97e07b1f1b1e1050": "65669a10bef9f10f810ab969de5cd5ea",
".git/objects/dd/45e1ed2e18b32c516d9b481ebed3cb8bffa711": "a67d677fc5f5cbca96d67ad9a4efd6d2",
".git/objects/de/a12d74195be85429defa3ae2f2a6f69c0912a2": "efca86651c58bdd8d2c809bc4bd0dcff",
".git/objects/de/d94880334eeeacc6fae8a23377b1498d4b8370": "c2df42859b47eb68ff93aca05540fdbe",
".git/objects/df/d717d04610caac7b5fcdb197988090807b32d5": "bd6eb66ce26e3145fdc2f4c3aae3e440",
".git/objects/df/fc4f0d7a7449f76d9e815aeaba851475042e94": "4c8b2cadb23c292035332794f640e2a4",
".git/objects/e0/c4a5e4b38f13acb212af493f899c51bf1120fe": "f562d9c0d280c46c0f1a57abfcb944f2",
".git/objects/e1/5c1215c489a5cd59a071d28de7498e543cd70e": "9c8a4c755a818c0465eb019351dbcf09",
".git/objects/e1/bccfe2403a4ed770c1697ae7c15b9e1cd9bc4e": "bf34ca0db841edf7dee447ed975ac54e",
".git/objects/e1/c5ef064e7518f078e43275930e5f41bceedb9b": "6d33b849f8f52f14bac1f0d47a2d6261",
".git/objects/e1/ec5457664f438ce5a1cc6dd8409bf60ca7804b": "9ffe6e9f90f5e212eee5bef8ba9df897",
".git/objects/e2/6f07bdb55a1dc30543f5bd7e634ff766158401": "af296d6648d698796972534f549fbda5",
".git/objects/e3/8348b5975a5d5ac4bb39edef7bd58235bdd74c": "53afec755b88da1e9e764ff8a9105409",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/cd99fa5d18ab6b7a16d8c5b1bdafb7c1c34446": "20a901f96722182b0b68b8e0e73dfc87",
".git/objects/e6/e9b658dcf1cd031ac82b6b8f312444c55d4fc0": "ec8171b702f945033c7f7d2ad9dbed03",
".git/objects/e7/730f66275c87c28f26530d89264cffecf90be0": "c23e4d6aa908d3d26425455638ab3e6b",
".git/objects/e7/cc091d07c833add5497eb5e51e2fcc8d6e0cdb": "614e167a0373e35c68ad75f3e05f02e3",
".git/objects/e7/f3823214181380744dde5b1a8cee97bda65db6": "5c4089a6e0f7f43fd558525872119558",
".git/objects/e8/44af1bf62398fd709aed9b8ccf018a894b14ba": "ca0c7ec4e39e91d16ebdce8a08c23f73",
".git/objects/e9/ae10bb1ad8de48488c7229d2867709c9b7bc73": "dfcdad768359dcc59de26d9caf4cc445",
".git/objects/e9/c62fe6627e7dd3712a371d12893d803b406235": "e5b3b9af8a537f0de39002585e3c1dbc",
".git/objects/e9/f5c85930df186f9a8270c5556c7e081329221f": "2218edbb89e571ea041b328ea55e4d23",
".git/objects/ea/0b162f301e5b13fdad49208ec82849db638c92": "dbc167c6c7f0621273983bad85476261",
".git/objects/ea/a345795f02dd0bfa9d216676c1801feb2ffa77": "c6c53caa3a2db8b47f5f71def865b4ea",
".git/objects/ea/a5f4264febf7fdedd14659586d9eb3d12a43b1": "63b268809cc69b8adf83d44627bc59ce",
".git/objects/eb/24a7ba282b03d830fa6c63ee897d92a5188736": "4d94997d59523456651cdd2da8adfe17",
".git/objects/eb/5159d4c1ca83fb92b3190223698427df0e010c": "0aaa5e341d28803211c7e003d11c09bb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/64ba68ff74a6e60f205aae4be598bc89eedf7c": "cc410dba1b2417bf71ce3f74df7103cf",
".git/objects/ec/c7fb0d359fc79a9f33b4d299638b96456349a7": "33d7ef0b7d190b325f1083d34942852b",
".git/objects/ee/382306c0015f2d0fc2dea23d4856faabfcef38": "1c559bdf46b533b371ee3620a9dcfa9c",
".git/objects/ef/339ece518b082773916430ca7da68437993298": "318efedb26fc889cd7d7ffe963d7788d",
".git/objects/ef/53780d7a75059da0f5c4a9566f4488571264e3": "5f7dc6d74fdfad1e838a055a25db9b6f",
".git/objects/f0/0c52178f132e08bfdd8ab8c770cd86a279ceba": "86a872ac3537707de4d611dfbedbec56",
".git/objects/f2/29500b9e095ae32fb8388c408521178092d593": "f696e073a33c724ef7048450aa750aee",
".git/objects/f2/a9fb013fefabe48252f2fd9f025d75d5f1967f": "e624f291243a4f43d3ce9e6e79df7ff7",
".git/objects/f3/8136ac1cc2dcdc9d9b10b8521487468b1f768c": "ecbe7c954fd00911567a5184edff1852",
".git/objects/f3/90922eceffe1f6dfb81a3dc086a92d98171b02": "dd9dc238bb5c658b252df95c3a1280c6",
".git/objects/f5/22294ff0f3f8c52dfdaef7ebfaa06ebfcfaabf": "e327ef748c6d290837c8029516aa546b",
".git/objects/f5/6f6edce81101668a2b8727de97a76855844e0e": "3ff265295f1b03169eee6ab3bcb44139",
".git/objects/f6/2f8ae8a53e4f514adf11d55291f52db08af644": "d42d40a1aea422f20ab670fc46ebf3ff",
".git/objects/f7/54924631f5945d5fd4f4281049ca3b02525c58": "6dce7d4ab784d0689b00102bf7e2c692",
".git/objects/f8/dcafaa042f657c4e9c6e078980723288b5b670": "43645a9975f33e57eb03bcbb47c90069",
".git/objects/f9/d662f47f485ee655468ff2ffdad27d777c67c0": "64df278a9003371693c4203b3a6c5c18",
".git/objects/fa/e0b6f80fa8738f4ccc7b6ef6da6de0322d3175": "0a8b347f48772278d783b760df1c24cd",
".git/objects/fd/15703d5246a93a9f9cae6c9b7187f2157d7342": "ea867cb7235c40ff64ce69654a4afca7",
".git/objects/fd/679bf374af72f2a183b97b40c9c7e9e51fbe5e": "f47c8eaa45310a39a7c3bc7afab92cc1",
".git/objects/fd/d741abfcb10d65adff8b80d108df98db199952": "89f8552eafee1b6fe94f5d5d44dd94e6",
".git/ORIG_HEAD": "5b54adabd59802a204072e27bb042e7d",
".git/refs/heads/main": "5b54adabd59802a204072e27bb042e7d",
".git/refs/remotes/origin/main": "5b54adabd59802a204072e27bb042e7d",
".git/refs/remotes/origin-push/main": "4c305fc7b2fb89350f82d25d3c6acef2",
"assets/AssetManifest.json": "51a1f6ad2e08c03ad0217936c1cc510a",
"assets/assets/Gilroy-Bold.ttf": "3cf0ee273a0b3f022234b6572c3b78f9",
"assets/assets/Gilroy-Medium.ttf": "6444f14adcdee041b62184f13139a56d",
"assets/assets/Gilroy-Regular.ttf": "ae5e7255973ffe09b53f07a2805232a8",
"assets/FontManifest.json": "43ba5ddf2108f5eb26c9713f94d36af8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "fb75976b61735f8d9a48ab8bf784a341",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"git": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bc03d2dcc4a79c908b25eed27b5805bd",
"/": "bc03d2dcc4a79c908b25eed27b5805bd",
"main.dart.js": "48d80387015a6f6ebb3c79669c689572",
"manifest.json": "2f1e46d3bc5e40bce8613f27c50b6c53",
"test/test.json": "ff6554f7182ab99d656342a0a4099eae",
"version.json": "ab03d059d4b470027c7bc9f737ff9090"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
