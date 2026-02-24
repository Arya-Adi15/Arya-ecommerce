const products = [

    { id: 1, name: "Solid Babydoll..", price: "245", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lingerie-set/y/d/h/free-s9-1077-bikini-set-sgc-sweden-original-imagrnfrwarphvs5.jpeg?q=70" },

    { id: 2, name: "Solid Babydoll..", price: "245", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/babydoll/y/a/3/m-babay001-mysli-original-imah8yxergtuxzyt.jpeg?q=70" },

    { id: 3, name: "Solid Babydoll..", price: "245", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lingerie-set/b/t/z/free-s9-1077-bikini-set-sgc-sweden-original-imagrnfrntr8ghdj.jpeg?q=70" },

    { id: 4, name: "Solid Babydoll..", price: "245", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lingerie-set/r/u/n/free-maroon-one-piece-lingerie-ssoshhub-original-imaghxsgzgffvmj5.jpeg?q=70" },

    { id: 5, name: "Solid Babydoll..", price: "245", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/night-dress-nighty/i/b/o/free-7011-grey-baby-doll-life-tale-resized-2-original-imagg8ptj4zactgx.jpeg?q=70" },

    { id: 6, name: "Solid Babydoll..", price: "245", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/babydoll/i/f/r/free-maroon-vl-cut-1077-lingerie-babydoll-ssoshhub-original-imagjg36yjyghftx.jpeg?q=70" },

    { id: 7, name: "Women Saree..", price: "2200", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/o/v/k/-resized-2-original-imahhbygduzgqqng.jpeg?q=70" },

    { id: 8, name: "Women Saree..", price: "2500", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/t/e/n/free-rcrw3701-elora-unstitched-original-imahbk9sxjdhs5gk.jpeg?q=70" },

    { id: 9, name: "Women Saree..", price: "4500", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/v/3/f/free-bridal-red-saree-snh-export-unstitched-resized-2-original-imahbmaaqfcnkhez.jpeg?q=70" },

    { id: 10, name: "Women Saree..", price: "8200", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/v/u/7/free-krn-sht-0063-mayak-handloom-unstitched-original-imah29jaupsmhq3m.jpeg?q=70" },

    { id: 11, name: "Women Saree..", price: "5200", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-sari/q/i/1/free-gkerala-kira-navy-gugaliya-unstitched-original-imahc44v9twyryfr.jpeg?q=70" },

    { id: 12, name: "Women Saree..", price: "3200", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/q/e/u/free-165-artfulthreads-no-blouse-resized-2-original-imah4sv4xzrf2dxt.jpeg?q=70" },

    { id: 13, name: "Women Saree..", price: "5200", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/l/o/n/free-fk-ys-p1-dholki-baby-pink-yashika-unstitched-original-imah38d7gfhgkafe.jpeg?q=70" },

    { id: 14, name: "Women Saree..", price: "4200", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/m/1/g/free-embroidered-bollywood-cotton-linen-saree-krivity-unstitched-resized-2-original-imah9a8zy78ecxxf.jpeg?q=70" },

    { id: 15, name: "Women Saree..", price: "6200", type: "fashion", cat: "Saree", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/t/5/i/free-diamond-kaxafashion-unstitched-original-imahjszzuzc3wpzd.jpeg?q=70" },

    { id: 16, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/n/a/f/-resized-2-original-imaheqk7r7xzuf99.jpeg?q=70" },

    { id: 17, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/w/u/b/m-solid-wine-kaizone-original-imahjav3unpwhtbr.jpeg?q=70" },

    { id: 18, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/l/1/l/-original-imahjyz5h3qwbpmy.jpeg?q=70" },

    { id: 19, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/j/t/d/s-jsk-011-enterprisesjsk-original-imahjdpwgdfjb9km.jpeg?q=70" },

    { id: 20, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/f/m/k/s-nd-125-nalax-designs-original-imagryhja2hgbgvb.jpeg?q=70" },

    { id: 21, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/v/4/j/xl-black-dress-aarti-fashion-original-imahcph7skwzkufh.jpeg?q=70" },

    { id: 22, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/0/v/s/m-411-leoped-amorluxe-original-imahjyhrndqchcty.jpeg?q=70" },

    { id: 23, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/apparel-set/w/h/h/xxl-2142-co-ords-sijopa-original-imahg3rbbycfswvr.jpeg?q=70" },

    { id: 24, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/apparel-set/r/l/j/xl-aco-18888-co-ords-shally-bhasin-by-athena-original-imahg4ptvderabyf.jpeg?q=70" },

    { id: 25, name: "Women Tops..", price: "425", type: "fashion", cat: "dresses", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/apparel-set/s/v/l/s-09-green-2pcs-co-ords-ethnichub-original-imaheqqmzdfd9auh.jpeg?q=70" },

    { id: 26, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/w/q/9/xxl-d-anjani-trendz-tycoon-original-imahebbggt6sf7kn.jpeg?q=70" },

    { id: 27, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/o/w/xl-zl-emb-kurtipant-set-lizord-fab-original-imahc6a3pqgjszqd.jpeg?q=70" },

    { id: 28, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/d/z/u/l-ethnic-set123-glitzstyle-original-imahk77gn7nvwnfs.jpeg?q=70" },

    { id: 29, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-ethnic-set/s/d/q/l-shop-miss-96-miss-clothing-original-imahghu49fgbcagw.jpeg?q=70" },

    { id: 30, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/w/q/j/l-pinkbandej-mini-collections-original-imah4ayvy3vzmch5.jpeg?q=70" },

    { id: 31, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/b/n/7/xs-ps-peach-2025-pschoice-original-imahf78fk2gfgcgu.jpeg?q=70" },

    { id: 32, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/e/i/s/m-14775-niklav-original-imahhh27qrj8wbyx.jpeg?q=70" },

    { id: 33, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/i/o/w/xl-zl-emb-kurtipant-set-lizord-fab-original-imahc6a3pqgjszqd.jpeg?q=70" },

    { id: 34, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/l/g/t/l-joplvsrw4288q-wonder-weaves-original-imahexe37u6wzfhn.jpeg?q=70" },

    { id: 35, name: "Women Kurtas..", price: "590", type: "fashion", cat: "wkurts", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/r/d/p/m-ugmaz001-ugmaz-original-imahgg4ynhfyqzsw.jpeg?q=70" },

    { id: 36, name: "Sexy Bra..", price: "299", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/babydoll/s/z/b/3xl-dvk-bbd-lng-mx-nighty-0135-dvka-creations-original-imahgv7dewyjeaqz.jpeg?q=70" },

    { id: 37, name: "Sexy Bra..", price: "299", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/kbwjvrk0/night-dress-nighty/d/q/u/free-purple-robe-lingerie-printed-set-ssoshhub-original-imaft5z8a6rnz2zz.jpeg?q=70" },

    { id: 38, name: "Sexy Bra..", price: "299", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/babydoll/y/b/h/l-50-dg-mysli-original-imahgnzfpbcevy7u.jpeg?q=70" },

    { id: 39, name: "Sexy Bra..", price: "299", type: "fashion", cat: "bra", img: "https://rukminim2.flixcart.com/image/612/612/xif0q/lingerie-set/w/7/l/34-sfh051-bl-beaon-original-imaghacpvyb3fz87.jpeg?q=70" },

    { id: 40, name: "", price: "", type: "", cat: "", img: "" },

    { id: 41, name: "", price: "", type: "", cat: "", img: "" },

    { id: 42, name: "", price: "", type: "", cat: "", img: "" },

    { id: 43, name: "", price: "", type: "", cat: "", img: "" },

    { id: 44, name: "", price: "", type: "", cat: "", img: "" },

    { id: 45, name: "", price: "", type: "", cat: "", img: "" },

    { id: 46, name: "", price: "", type: "", cat: "", img: "" },

    { id: 47, name: "", price: "", type: "", cat: "", img: "" },

    { id: 48, name: "", price: "", type: "", cat: "", img: "" },

    { id: 49, name: "", price: "", type: "", cat: "", img: "" },

    { id: 50, name: "", price: "", type: "", cat: "", img: "" },
    { id: 51, name: "", price: "", type: "", cat: "", img: "" },

    { id: 52, name: "", price: "", type: "", cat: "", img: "" },

    { id: 53, name: "", price: "", type: "", cat: "", img: "" },

    { id: 54, name: "", price: "", type: "", cat: "", img: "" },

    { id: 55, name: "", price: "", type: "", cat: "", img: "" },

    { id: 56, name: "", price: "", type: "", cat: "", img: "" },

    { id: 57, name: "", price: "", type: "", cat: "", img: "" },

    { id: 58, name: "", price: "", type: "", cat: "", img: "" },

    { id: 59, name: "", price: "", type: "", cat: "", img: "" },

    { id: 60, name: "", price: "", type: "", cat: "", img: "" },

    { id: 61, name: "", price: "", type: "", cat: "", img: "" },

    { id: 62, name: "", price: "", type: "", cat: "", img: "" },

    { id: 63, name: "", price: "", type: "", cat: "", img: "" },

    { id: 64, name: "", price: "", type: "", cat: "", img: "" },

    { id: 65, name: "", price: "", type: "", cat: "", img: "" },

    { id: 66, name: "", price: "", type: "", cat: "", img: "" },

    { id: 67, name: "", price: "", type: "", cat: "", img: "" },

    { id: 68, name: "", price: "", type: "", cat: "", img: "" },

    { id: 69, name: "", price: "", type: "", cat: "", img: "" },

    { id: 70, name: "", price: "", type: "", cat: "", img: "" },

    { id: 71, name: "", price: "", type: "", cat: "", img: "" },

    { id: 72, name: "", price: "", type: "", cat: "", img: "" },

    { id: 73, name: "", price: "", type: "", cat: "", img: "" },

    { id: 74, name: "", price: "", type: "", cat: "", img: "" },

    { id: 75, name: "", price: "", type: "", cat: "", img: "" },

    { id: 76, name: "", price: "", type: "", cat: "", img: "" },

    { id: 77, name: "", price: "", type: "", cat: "", img: "" },

    { id: 78, name: "", price: "", type: "", cat: "", img: "" },

    { id: 79, name: "", price: "", type: "", cat: "", img: "" },

    { id: 80, name: "", price: "", type: "", cat: "", img: "" },

    { id: 81, name: "", price: "", type: "", cat: "", img: "" },

    { id: 82, name: "", price: "", type: "", cat: "", img: "" },

    { id: 83, name: "", price: "", type: "", cat: "", img: "" },

    { id: 84, name: "", price: "", type: "", cat: "", img: "" },

    { id: 85, name: "", price: "", type: "", cat: "", img: "" },

    { id: 86, name: "", price: "", type: "", cat: "", img: "" },

    { id: 87, name: "", price: "", type: "", cat: "", img: "" },

    { id: 88, name: "", price: "", type: "", cat: "", img: "" },

    { id: 89, name: "", price: "", type: "", cat: "", img: "" },

    { id: 90, name: "", price: "", type: "", cat: "", img: "" },

    { id: 91, name: "", price: "", type: "", cat: "", img: "" },

    { id: 92, name: "", price: "", type: "", cat: "", img: "" },

    { id: 93, name: "", price: "", type: "", cat: "", img: "" },

    { id: 94, name: "", price: "", type: "", cat: "", img: "" },

    { id: 95, name: "", price: "", type: "", cat: "", img: "" },

    { id: 96, name: "", price: "", type: "", cat: "", img: "" },

    { id: 97, name: "", price: "", type: "", cat: "", img: "" },

    { id: 98, name: "", price: "", type: "", cat: "", img: "" },

    { id: 99, name: "", price: "", type: "", cat: "", img: "" },

    { id: 100, name: "", price: "", type: "", cat: "", img: "" }

];