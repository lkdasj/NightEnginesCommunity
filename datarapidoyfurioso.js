const cars = [
    {
        name: "Maibatsu Penumbra FF",
        nameactor: "Brian O'Conner",
        basedOn: "1995 Mitsubishi Eclipse RS 420A",
        infocar: "https://fastandfurious.fandom.com/es/wiki/1995_Mitsubishi_Eclipse",
        price: "$1,380,000",
        img: "https://i.ibb.co/gbvsbc95/Maibatsu-Penumbra-FF.webp"
    },
    {
        name: "Annis ZR350",
        nameactor: "Dominic 'Dom' Toretto",
        basedOn: "1993 Mazda RX-7 FD3S Veilside",
        infocar: "https://fastandfurious.fandom.com/es/wiki/Mazda_RX-7",
        price: "$1,615,000",
        img: "https://i.ibb.co/NgN60NRr/Annis-ZR350.webp"
    },
    {
        name: "Annis Elegy Retro Personalizado",
        nameactor: "Leon",
        basedOn: "1993 Nissan Skyline GT-R R33",
        infocar: "https://fastandfurious.fandom.com/es/wiki/Nissan_Skyline_GT-R",
        price: "$904,000",
        img: "https://i.ibb.co/kgvKC0NL/Annis-Elegy-Retro-Custom.webp"
    },
    {
        name: "Ubermatch Sentinel Classic Ancho",
        nameactor: "Jesse",
        basedOn: "1995 Volkswagen Jetta III",
        infocar: "https://fastandfurious-fandom-com.translate.goog/wiki/1995_Volkswagen_Jetta?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc",
        price: "$650,00",
        img: "https://i.ibb.co/CK1K1q2W/Ubermatch-Sentinel-Classic-Ancho.webp"
    },
    {
        name: "Annis Remus",
        nameactor: "Leticia 'Letty' Ortiz",
        basedOn: "1997 Nissan 240SX",
        infocar: "https://fastandfurious.fandom.com/wiki/1997_Nissan_240SX",
        price: "$1,370,000",
        img: "https://i.ibb.co/qSrvLsj/Annis-Remus.webp"
    },
    {
        name: "Karin Sultan Classic",
        nameactor: "Vince",
        basedOn: "1999 Nissan Maxima",
        infocar: "https://fastandfurious-fandom-com.translate.goog/wiki/1999_Nissan_Maxima_(A32)?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc",
        price: "$1,789,000",
        img: "https://i.ibb.co/nsGYRwwB/Karin-Sultan-Classic.webp"
    },
    {
        name: "Dinka Blista Kanjo",
        nameactor: "Hector",
        basedOn: "1992 Honda Civic EG",
        infocar: "https://fastandfurious-fandom-com.translate.goog/wiki/1992_Honda_Civic_Hatchback?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc",
        price: "$435,000",
        img: "https://i.ibb.co/b59BYtf7/Dinka-Blista-Kanjo.webp"
    },
    {
        name: "Karin Calico GTF",
        nameactor: "Edwin",
        basedOn: "1996 Acura Integra GS-R",
        infocar: "https://fastandfurious-fandom-com.translate.goog/wiki/Acura_Integra?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc",
        price: "$1,995,000",
        img: "https://i.ibb.co/JFpPHwTt/Karin-Calico-GTF.webp"
    },
    {
        name: "Dinka Kanjo SJ",
        nameactor: "Danny Yamato",
        basedOn: "1995 Honda Civic EJ2",
        infocar: "https://fastandfurious-fandom-com.translate.goog/wiki/Danny_Yamato?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc",
        price: "$1,370,000",
        img: "https://i.ibb.co/kgH7WT1d/Dinka-Kanjo-SJ.webp"
    },
    {
        name: "Vapid Dominator ASP",
        nameactor: "Mia Toretto",
        basedOn: "1991 Acura Integra DC2 Type R",
        infocar: "https://atodogasfan.blogspot.com/2014/05/acura-integra-dc2-type-r-de-mia-toretto.html",
        price: "$1,775,000",
        img: "https://i.ibb.co/0pcJzgMQ/Vapid-Dominator-ASP.webp"
    },
    {
        name: "Imponte Dukes Chatarra",
        nameactor: "Dominic 'Dom' Toretto",
        basedOn: "1970 Dodge SuperCharger R/T",
        infocar: "https://fastandfurious.fandom.com/es/wiki/1970_Dodge_Charger_R/T",
        price: "$378,000",
        img: "https://i.ibb.co/5gnsBNtv/Imponte-Dukes-Chatarra.webp"
    },
    {
        name: "Dinka Jester Classic",
        nameactor: "Brian O'Conner",
        basedOn: "1994 Toyota Supra 2JZ BiTurbo",
        infocar: "https://fastandfurious-fandom-com.translate.goog/wiki/1994_Toyota_Supra_MK_IV?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc",
        price: "$790,000",
        img: "https://i.ibb.co/nNQFf8Wg/Dinka-Jester-Classic.webp"
    },
    {
        name: "Dinka RT3000",
        nameactor: "Johnny Tran",
        basedOn: "2000 Honda S2000 F20C",
        infocar: "https://fastandfurious-fandom-com.translate.goog/wiki/2000_Honda_S2000?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc",
        price: "$1,715,000",
        img: "https://i.ibb.co/5gVcd405/Dinka-RT3000.webp"
    },
    {
        name: "Grotti Cheetah Classic",
        nameactor: "Millonario con Ferrari",
        basedOn: "1999 Ferrari F355 Spyder",
        infocar: "https://fastandfurious-fandom-com.translate.goog/wiki/Ferrari_F355_Spider?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc",
        price: "$865,000",
        img: "https://i.ibb.co/Jw11SGKZ/Grotti-Cheetah-Classic.webp"
    },
    {
        name: "Dinka Kanjo SJ",
        nameactor: "Dominic 'Dom' Toretto, Leticia 'Letty' Ortiz y Leon",
        basedOn: "1993 Honda Civic EJ1 Turbo (x3)",
        infocar: "https://fastandfurious-fandom-com.translate.goog/wiki/1993_Honda_Civic_EJ1?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc",
        price: "$1,370,000",
        img: "https://i.ibb.co/kgH7WT1d/Dinka-Kanjo-SJ.webp"
    },
    {
        name: "Declasse Sabre Turbo",
        nameactor: "Dominic 'Dom' Toretto",
        basedOn: "1970 Chevrolet Chevelle SS",
        infocar: "https://fastandfurious.fandom.com/es/wiki/1970_Chevrolet_Chevelle_SS",
        price: "$15,000",
        img: "https://i.ibb.co/bgqjH77n/Declasse-Sabre-Turbo.webp"
    },
    {
        name: "Vapid Firebolt ASP",
        nameactor: "Brian O'Conner",
        basedOn: "1999 Ford F-150 SVT Lightning",
        infocar: "https://fastandfurious.fandom.com/es/wiki/Ford_F-150",
        price: "$1,894,500",
        img: "https://i.ibb.co/DDvFnZnh/Vapid-Firebolt-ASP.webp"
    },
    {
        name: "Annis ZR350",
        nameactor: "Corredor con rastas",
        basedOn: "1995 Mazda RX-7 FD",
        infocar: "https://fastandfurious.fandom.com/es/wiki/Mazda_RX-7",
        price: "$1,615,000",
        img: "https://i.ibb.co/NgN60NRr/Annis-ZR350.webp"
    }
]