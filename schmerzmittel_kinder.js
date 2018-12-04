var med = [
    {
        name: "Ibuprofen",
        prepO: [
            {
                name: "Nureflex Saft 40mg/ml",
                mgpe: 40,
            },
        ],
        prepI: null,
        prepR: [
            {
                name:"Nureflex Supp 60mg",
                mgpe: 60,
            },
            {
                name:"Nureflex Supp 125mg",
                mgpe: 125
            },
        ],
    },
    {
        name: "Paracetamol",
    },
    {
        name: "Mefenaminsäure",
    },
    {
        name: "Metamizol",
    },
    {
        name: "Naproxen",
    },

]

function schmerzmittel_kinder(applikation, medikament, gewicht) {

    var ret = ""

    if(medikament == "Ibuprofen") {
        //Erst ab 3 Monaten und ab 6kg
        Tagesdosis = Number.parseFloat(30 * gewicht).toFixed(2)
        Einzeldosis = Number.parseFloat(10 * gewicht).toFixed(2)
        txt = "";


        if (applikation == "oral") {
            mymed = med.find(function (elm) {
                elm.name = "Ibuprofen"
            });
            if (mymed.prepO != null) {
                for (i = 0; i < mymed.prepO.length; i++) {
                    ml = Number.parseFloat(Einzeldosis / ibu.prepO[i].mgpe).toFixed(1);
                    txt += mymed.prepO[i].name + " " + ml + "ml 3x täglich<br>"
                }
            } else {
                txt = "Keine oralen Präparate hinterlegt<br>"
            }
        } else if(applikation == "intravenös") {
            txt = "Keine intravenösen Präparate hinterlegt<br>"
        } else if(applikation == "rektal") {
            mymed = med.find(function (elm) {
                elm.name = "Ibuprofen"
            });
            if (mymed.prepR != null) {
                for (i = 0; i < mymed.prepR.length; i++) {
                    if(mymed.prepR[i].mgpe <= Einzeldosis) {
                        txt += mymed.prepO[i].name + " 3x täglich<br>"
                    } else if(mymed.prepR[i].mgpe <= Einzeldosis*3/2) {
                        txt += mymed.prepO[i].name + " 2x täglich<br>"
                    }
                }
            } else {
                txt = "Keine rektalen Präparate hinterlegt<br>"
            }
        }


        ret = medikament + " " + applikation + ":" + "<br>"
        ret += txt
        ret += "Ab 3m und 6kg - Tagesdosis 30mg/kg -> " + Tagesdosis + "<br>"
        ret += "Einzeldosis 10mg/kg -> " + Einzeldosis

    } else if(medikament == "Paracetamol") {
        //
    } else if(medikament == "Mefenaminsäure") {
        //
    } else if(medikament == "Metamizol") {
        //
    } else if(medikament == "Naproxen") {

    }
    return ret
}

document.body.innerHTML = schmerzmittel_kinder("oral", "Ibuprofen", "10")