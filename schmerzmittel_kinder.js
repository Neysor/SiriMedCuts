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
        prepO: [
            {
                name: "Novalgin Tropfen",
                mgpe: 25,
                cave: "20gtt = 1ml = 500mg<br>",
            },
        ],
        prepI: [
            {
                name: "Novalgin 1g Ampullen",
                mgpe: 500,
                cave: "1ml = 500mg, 0,1ml = 50mg",
            },
        ],
        prepR: null,
    },
]

function schmerzmittel_kinder(applikation, medikament, gewicht) {

    document.title = medikament + " " + applikation + "" + " " + gewicht + "kg"
    var gewicht = Number.parseFloat(gewicht.replace(",","."))
    var ret = ""

    if(medikament == "Ibuprofen") {

        var TD = 30
        var ED = 10
        var Tagesdosis = TD * gewicht
        var Einzeldosis = ED * gewicht
        var txt = "";
        mymed = med.find(function (elm) {
            return elm.name == "Ibuprofen"
        });

        if (applikation == "oral") {

            if (mymed.prepO != null) {
                for (i = 0; i < mymed.prepO.length; i++) {
                    ml = Number.parseFloat(Einzeldosis / mymed.prepO[i].mgpe).toFixed(1)
                    mg = Number.parseFloat(ml*mymed.prepO[i].mgpe*3).toFixed(0)
                    txt += mymed.prepO[i].name + " " + ml + "ml 3x täglich (= "+ mg +"mg TD)<br>"
                    txt += mymed.prepO[i].cave
                }
                txt += "<br>oral: ab 6 Monaten, ab 7 kg<br>"
            } else {
                txt = "Keine oralen Präparate hinterlegt<br>"
            }
        } else if(applikation == "intravenös") {
            txt = "Keine intravenösen Präparate hinterlegt<br>"
        } else if(applikation == "rektal") {
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

                txt += "<br>rektal: ab 3 Monaten, ab 6 kg<br>"
            } else {
                txt = "Keine rektalen Präparate hinterlegt<br>"
            }
        }

        ret += txt
        ret += "Tagesdosis: " + Tagesdosis.toFixed(0) + "mg ("+TD+"mg/kg)<br>"
        ret += "Einzeldosis: " + Einzeldosis.toFixed(0) + "mg ("+ED+"mg/kg)"

    } else if(medikament == "Paracetamol") {
        ret += "Noch nicht im System möglich<br>"
    } else if(medikament == "Mefenaminsäure") {


        var txt = "";
        mymed = med.find(function (elm) {
            return elm.name == "Mefenaminsäure"
        });
        if (applikation == "oral") {

            var TD = 6.5*3
            var ED = 6.5
            var Tagesdosis = TD * gewicht
            var Einzeldosis = ED * gewicht


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
        ret += txt + "<br>"
        ret += "oral+rektal: ab 6 Monaten<br>"
        ret += "Tagesdosis: " + Tagesdosis.toFixed(0) + "mg ("+TD+"mg/kg)<br>"
        ret += "Einzeldosis: " + Einzeldosis.toFixed(0) + "mg ("+ED+"mg/kg)"

    } else if(medikament == "Metamizol") {

        var TD = 30
        var ED = 12.5
        var Tagesdosis = TD * gewicht
        var Einzeldosis = ED * gewicht
        var txt = "";
        mymed = med.find(function (elm) {
            return elm.name == "Metamizol"
        });

        if (applikation == "oral") {

            //Novalgintroppfen Hardcoded
            dosis1 = Math.round(0.5 * gewicht)
            dosis2 = Math.round(1 * gewicht)
            mgdosis1 = dosis1 * mymed.prepO[0].mgpe * 3
            mgdosis2 = dosis2 * mymed.prepO[0].mgpe * 3
            txt += mymed.prepO[0].name + " " + dosis1 + "-" + dosis2 + "gtt bis 3x täglich (= " +
                mgdosis1.toFixed(0) + "-" + mgdosis2.toFixed(0) + "mg TD)<br>"

            ret += txt + "<br>"
            ret += "oral: ab 3 Monaten, ab 5 kg<br>"
            ret += "Dosis: 0,5-1gtt pro Kg Körpergewicht 1-4x täglich"


        } else if (applikation == "intravenös") {
            //Novalginampulle Hardcoded
            dosis1 = 10 * gewicht
            dosis2 = 15 * gewicht
            dosis3 = 20 * gewicht
            mgdosis1 = dosis1 * 3
            mgdosis2 = dosis2 * 3
            mgdosis3 = dosis3 * 3

            txt += mymed.prepI[0].name + " (" + mymed.prepI[0].cave + ")<br>" +
                dosis1.toFixed(0) + "mg (= " + mgdosis1.toFixed(0) + "mg TD) oder<br>" +
                dosis2.toFixed(0) + "mg (= " + mgdosis2.toFixed(0) + "mg TD) oder<br>[" +
                dosis3.toFixed(0) + "mg) (= " + mgdosis3.toFixed(0) + "mg TD)]<br>bis 3x täglich<br>"

            ret += txt + "<br>"
            ret += "iv: ab 1 Jahr, ab ~9kg<br>"
            ret += "Dosis: 10-15-(20mg) pro Kg Körpergewicht 1-4x täglich"


        } else if (applikation == "rektal") {
            txt = "Keine rektalen Präparate hinterlegt<br>"
        }
    }
    return ret
}
document.body.innerHTML = schmerzmittel_kinder("oral", "Ibuprofen", "10")