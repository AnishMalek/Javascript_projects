let coundown;

let settime= () => {
    clearInterval(coundown)


    let getTime = document.querySelector("#data").value
    let targetTime = new Date(getTime).getTime()


    coundown = setInterval(() => {

        let d = document.querySelector("#days")
        let h = document.querySelector("#hours")
        let m = document.querySelector("#minutes")
        let s = document.querySelector("#seconds")
        let nowtime = new Date().getTime()

        let diff = targetTime - nowtime

        if (diff <= 0) {
            clearInterval(coundown);
            alert("Time's Up")
            return
        }
        if(getTime == ""){
            clearInterval(coundown)
            alert('Plz Enter time')
            return
        }

        let days = Math.floor((diff / (1000 * 60 * 60 * 24)))
        let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((diff / (1000 * 60)) % 60);
        let seconds = Math.floor((diff / 1000) % 60)

        d.innerHTML=days
        h.innerHTML=hours
        m.innerHTML=minutes
        s.innerHTML=seconds

    }, 1000)


}