var med = [
    {
        name: "Ibuprofen",
        prepO: [
            {
                name: "Nureflex Saft 40mg/ml",
                mgpe: 40,
                cave: "",
            },
        ],
        prepI: null,
        prepR: [
            {
                name:"Nureflex Supp 60mg",
                mgpe: 60,
                cave: "",
            },
            {
                name:"Nureflex Supp 125mg",
                mgpe: 125,
                cave: "",
            },
        ],
    },
    {
        name: "Paracetamol",
    },
    {
        name: "Mefenaminsäure",
        prepO: [
            {
                name: "Parkemed Saft 50mg/5ml",
                mgpe: 10,
                cave: "1 Messlöffel hat 5ml (1/2 Messlöffel 2.5ml)<br>",
            },
        ],
        prepI: null,
        prepR: [
            {
                name:"Parkemed Supp 125mg",
                mgpe: 125,
                cave: "",
            },
            {
                name:"Parkemed Supp 500mg",
                mgpe: 500,
                cave: "",
            },
        ],
    },
    {
        name: "Metamizol",
    },
    {
        name: "Naproxen",
    },
]

function schmerzmittel_kinder(applikation, medikament, gewicht) {

    var gewicht = Number.parseFloat(gewicht.replace(",","."))
    var ret = ""

    if(medikament == "Ibuprofen") {
        //Erst ab 3 Monaten und ab 6kg
        var TD = 30
        var ED = 10
        var Tagesdosis = TD * gewicht
        var Einzeldosis = ED * gewicht
        var txt = "";


        if (applikation == "oral") {
            mymed = med.find(function (elm) {
                return elm.name == "Ibuprofen"
            });
            if (mymed.prepO != null) {
                for (i = 0; i < mymed.prepO.length; i++) {
                    ml = Number.parseFloat(Einzeldosis / mymed.prepO[i].mgpe).toFixed(1)
                    mg = Number.parseFloat(ml*mymed.prepO[i].mgpe*3).toFixed(0)
                    txt += mymed.prepO[i].name + " " + ml + "ml 3x täglich (= "+ mg +"mg TD)<br>"
                    txt += mymed.prepO[i].cave
                }
            } else {
                txt = "Keine oralen Präparate hinterlegt<br>"
            }
        } else if(applikation == "intravenös") {
            txt = "Keine intravenösen Präparate hinterlegt<br>"
        } else if(applikation == "rektal") {
            mymed = med.find(function (elm) {
                return elm.name == "Ibuprofen"
            });
            if (mymed.prepR != null) {
                for (i = 0; i < mymed.prepR.length; i++) {
                    if(mymed.prepR[i].mgpe <= Einzeldosis) {
                        mg = Number.parseFloat(mymed.prepR[i].mgpe*3).toFixed(0)
                        txt += mymed.prepR[i].name + " 3x täglich (= "+ mg +"mg TD)<br>"
                        txt += mymed.prepR[i].cave
                    } else if(mymed.prepR[i].mgpe <= Einzeldosis*3/2) {
                        mg = Number.parseFloat(mymed.prepR[i].mgpe*2).toFixed(0)
                        txt += mymed.prepR[i].name + " 2x täglich (= "+ mg +"mg TD)<br>"
                        txt += mymed.prepR[i].cave
                    }
                }
            } else {
                txt = "Keine rektalen Präparate hinterlegt<br>"
            }
        }


        ret = medikament + " " + applikation + ":" + "<br>"
        ret += txt + "<br>"
        ret += "Ab 3 Monaten | Ab 6 kg<br>"
        ret += "Tagesdosis: " + Tagesdosis.toFixed(0) + "mg ("+TD+"mg/kg)<br>"
        ret += "Einzeldosis: " + Einzeldosis.toFixed(0) + "mg ("+ED+"mg/kg)"

    } else if(medikament == "Paracetamol") {
        ret = "Noch nicht im System möglich<br>"
    } else if(medikament == "Mefenaminsäure") {


        var txt = "";

        if (applikation == "oral") {

            var TD = 6.5*3
            var ED = 6.5
            var Tagesdosis = TD * gewicht
            var Einzeldosis = ED * gewicht

            mymed = med.find(function (elm) {
                return elm.name == "Mefenaminsäure"
            });
            if (mymed.prepO != null) {
                for (i = 0; i < mymed.prepO.length; i++) {
                    ml = Number.parseFloat(Einzeldosis / mymed.prepO[i].mgpe).toFixed(1)
                    mg = Number.parseFloat(ml*mymed.prepO[i].mgpe*3).toFixed(0)
                    txt += mymed.prepO[i].name + " " + ml + "ml 3x täglich (= "+ mg +"mg TD)<br>"
                    txt += mymed.prepO[i].cave
                }
            } else {
                txt = "Keine oralen Präparate hinterlegt<br>"
            }
        } else if(applikation == "intravenös") {
            txt = "Keine intravenösen Präparate hinterlegt<br>"
        } else if(applikation == "rektal") {

            var TD = 12*3
            var ED = 12
            var Tagesdosis = TD * gewicht
            var Einzeldosis = ED * gewicht

            mymed = med.find(function (elm) {
                return elm.name == "Mefenaminsäure"
            });
            if (mymed.prepR != null) {
                for (i = 0; i < mymed.prepR.length; i++) {
                    if(mymed.prepR[i].mgpe <= Einzeldosis) {
                        mg = Number.parseFloat(mymed.prepR[i].mgpe*3).toFixed(0)
                        txt += mymed.prepR[i].name + " 3x täglich (= "+ mg +"mg TD)<br>"
                        txt += mymed.prepR[i].cave
                    } else if(mymed.prepR[i].mgpe <= Einzeldosis*3/2) {
                        mg = Number.parseFloat(mymed.prepR[i].mgpe*2).toFixed(0)
                        txt += mymed.prepR[i].name + " 2x täglich (= "+ mg +"mg TD)<br>"
                        txt += mymed.prepR[i].cave
                    }
                }
            } else {
                txt = "Keine rektalen Präparate hinterlegt<br>"
            }
        }
        ret = medikament + " " + applikation + ":" + "<br>"
        ret += txt + "<br>"
        ret += "Ab 6 Monaten<br>"
        ret += "Tagesdosis: " + Tagesdosis.toFixed(0) + "mg ("+TD+"mg/kg)<br>"
        ret += "Einzeldosis: " + Einzeldosis.toFixed(0) + "mg ("+ED+"mg/kg)"

    } else if(medikament == "Metamizol") {
        ret = "Noch nicht im System möglich<br>"
    } else if(medikament == "Naproxen") {
        ret = "Noch nicht im System möglich<br>"
    }
    return ret
}

document.body.innerHTML = schmerzmittel_kinder("oral", "Ibuprofen", "10")