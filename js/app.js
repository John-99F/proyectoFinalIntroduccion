
/**
 * Funcion para cambiar los formularios en el "container-main"
 * @param {String} htmlPath ruta del archivo html a montar en "container-main"
 */
function setScreen(htmlPath) {
    const containerMain = document.getElementById("container-main");
    fetch(htmlPath)
        .then(result => {
            if (!result.ok) {
                throw new Error("El sitio no se encuentra");
            }
            return result.text();
        })
        .then(screen => {
            containerMain.innerHTML = screen;
        })
        .catch(error => {
            containerMain.innerHTML = "<h1>Error al cargar el formulario</h1>";
            console.error(error);
        });
}

function setFormTechnical() {
    let nameTechnical = document.getElementsByClassName("form-input-name-technical")[0];
    let dateTechnical = document.getElementsByClassName("form-input-date-technical")[0];
    let placeTechnical = document.getElementsByClassName("form-input-place-technical")[0];

    const data = {
        nameTechnical: nameTechnical.value,
        dateTechnical: dateTechnical.value,
        placeTechnical: placeTechnical.value,
    };

    localStorage.setItem("datosTecnicos", JSON.stringify(data));

    alert("Datos guardados");

    setScreen('environmentalConditionsScreen.html');
}

function setFormEnvironmental() {
    let temperatureEnvironmental = document.getElementsByClassName("form-input-temperature-environmental")[0];
    let humidityEnvironmental = document.getElementsByClassName("form-input-humidity-environmental")[0];

    const dataEnvironmental = {
        temperatureEnvironmental: temperatureEnvironmental.value,
        humidityEnvironmental: humidityEnvironmental.value,
    };

    localStorage.setItem("datosAmbiente", JSON.stringify(dataEnvironmental));

    alert("Datos guardados");

    setScreen('patternsScreen.html');

}

function setPatterns() {
    let codePatterns = document.getElementsByClassName("form-input-code-pattern")[0];
    let tagPatterns = document.getElementsByClassName("form-input-tag-pattern")[0];
    const dataPatterns = {
        codePatterns: codePatterns.value,
        tagPatterns: tagPatterns.value,
    };

    localStorage.setItem("datosParametros", JSON.stringify(dataPatterns));

    alert("Datos guardados");

    setScreen('valveScreen.html');

}


function setValve() {
    let typeValve = document.getElementsByClassName("form-input-type-valve")[0];
    let pressureRangeValve = document.getElementsByClassName("form-input-pressure-range-valve")[0];
    let temperatureRangeValve = document.getElementsByClassName("form-input-temperature-range-valve")[0];
    const dataValve = {
        typeValve: typeValve.value,
        pressureRangeValve: pressureRangeValve.value,
        temperatureRangeValve: temperatureRangeValve.value,
    };

    localStorage.setItem("datosValvula", JSON.stringify(dataValve));

    alert("Datos guardados");
    setScreen('pressureGauge.html');

}

function setPressure() {
    let measurementRangePressure = document.getElementsByClassName("form-input-measurement-range-pressure")[0];
    let precisionPressure = document.getElementsByClassName("form-input-precision-pressure")[0];
    let scaleTypePressure = document.getElementsByClassName("form-input-scale-type-pressure")[0];
    const dataPressure = {
        measurementRangePressure: measurementRangePressure.value,
        precisionPressure: precisionPressure.value,
        scaleTypePressure: scaleTypePressure.value,
    };

    localStorage.setItem("datosManometro", JSON.stringify(dataPressure));

    alert("Datos guardados");

    setScreen('certificateScreen.html');

}

function setCertificate() {

    let instrumentIdentificationCertificate = document.getElementsByClassName("form-input-instrument-identification-certificate")[0];
    let metrologyTraceabilityCertificate = document.getElementsByClassName("form-input-metrology-traceability-certificate")[0];
    const dataCertificate = {
        instrumentIdentificationCertificate: instrumentIdentificationCertificate.value,
        metrologyTraceabilityCertificate: metrologyTraceabilityCertificate.value,
    };

    localStorage.setItem("datosCertificado", JSON.stringify(dataCertificate));

    setForm();
}
function setForm() {
    const dataTechnical = JSON.parse(localStorage.getItem("datosTecnicos"));
    const dataEnvironmental = JSON.parse(localStorage.getItem("datosAmbiente"));
    const dataPatterns = JSON.parse(localStorage.getItem("datosParametros"));
    const dataValve = JSON.parse(localStorage.getItem("datosValvula"));
    const dataPressure = JSON.parse(localStorage.getItem("datosManometro"));
    const dataCertificate = JSON.parse(localStorage.getItem("datosCertificado"));

    if (dataTechnical &&
        dataEnvironmental &&
        dataPatterns &&
        dataValve &&
        dataPressure &&
        dataCertificate) {

        alert("Resultado de la medicion: \n" +
            "Nombre tecnico: " + dataTechnical.nameTechnical +
            "\nFecha: " + dataTechnical.dateTechnical +
            "\nUbicacion: " + dataTechnical.placeTechnical +
            "\nError absoluto: " + (dataPressure.measurementRangePressure - dataPressure.precisionPressure) +
            "\nError relativo: " + ((dataValve.pressureRangeValve / dataValve.temperatureRangeValve) * 100)
        );

    }
}