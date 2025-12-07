function calculate() {
    //This converts input into integer and then into seconds
    let string_min = document.getElementById("min").value
    let min_val = parseInt(string_min) * 60

    let string_sec = document.getElementById("sec").value
    let sec_val = parseInt(string_sec)

    let tot = sec_val + min_val
    console.log(tot)

    //Event selection
    let event = document.getElementById("eventSelector").value

    //////////////////////////////////////// 1500 CONVERSIONS ///////////////////////////////////////////
    if (event == "1500m") {

        //1500 -> 3000
        let three = tot * 2.13
        let t_min = Math.floor(three / 60)
        let t_sec = Math.floor(three % 60).toFixed(0).toString().padStart(2, "0")
        let t_m = Math.round(((three % 1) * 1000)/10)
        document.getElementById("3k").textContent = t_min + ":" + t_sec + "." + t_m

        //1500
        document.getElementById("1500").textContent = tot
        let fifteen_min = Math.floor(tot / 60)
        let fifteen_sec = Math.floor(tot % 60).toString().padStart(2, "0")
        let fifteen_m = Math.round(((tot % 1) * 1000)/10)
        document.getElementById("1500").textContent = fifteen_min + ":" + fifteen_sec + "." + fifteen_m

        //3000 - > 5000
        let five = three * 1.721
        let five_min = Math.floor(five / 60)
        let five_sec = Math.floor(five % 60).toString().padStart(2, "0")
        let five_m = Math.round(((five % 1) * 1000)/10)
        document.getElementById("5k").textContent = five_min + ":" + five_sec + "." + five_m

        //1500 -> 400
        let four = tot * 0.205
        let four_min = Math.floor(four / 60)
        let four_sec = Math.floor(four % 60).toString().padStart(2, "0")
        let four_m = Math.round(((four % 1) * 1000)/10)
        document.getElementById("400").textContent = four_min + ":" + four_sec + "." + four_m

        //400 -> 800
        let e = (four *1.66)*1.38
        let e_min = Math.floor(e/60)
        let e_sec = Math.floor(e % 60).toString().padStart(2, "0")
        let e_m = Math.round(((e % 1) * 1000)/10)
        document.getElementById("800").textContent = e_min + ":" + e_sec + "." + e_m

        //400 -> 200
        let two = four/2.2
        let two_min = Math.floor(two/60)
        let two_sec = Math.floor(two % 60).toString().padStart(2, "0")
        let two_m = Math.round(((two % 1) * 1000)/10)
        document.getElementById("200").textContent = two_min + ":" + two_sec + "." + two_m

        //400 -> 100
        let one = (four/2.2)/2.01
        let one_sec = Math.floor(one % 60).toString().padStart(2, "0")
        let one_m = Math.round(((one % 1) * 1000)/10)
        document.getElementById("100").textContent = one_sec + "." + one_m
    }
    //Clears input field
    document.getElementById("min").value = ""
    document.getElementById("sec").value = ""
}