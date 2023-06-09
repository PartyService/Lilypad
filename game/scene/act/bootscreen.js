const txtwarn = document.querySelector('.txt-warning')
setTimeout(function () {
    gfunc.startTransition(false, 'scene/ui/title.html', 'scene/act/title.js', 0)
    setTimeout(function () {
        txtwarn.innerHTML = `WARNING: READ BEFORE PLAYING

        A very small percentage of individuals may experience epileptic seizures when exposed to certain light patterns or flashing lights. Exposure to certain patterns or backgrounds on a computer screen, or while playing video games, may induce an epileptic seizure in these individuals. Certain conditions may induce previously undetected epileptic symptoms even in persons who have no history of prior seizures or epilepsy. If you, or anyone in your family, have an epileptic condition, consult your physician prior to playing. If you experience any of the following symptoms while playing a video or computer game - dizziness, altered vision, eye or muscle twitches, loss of awareness, disorientation, any involuntary movement, or convulsions - IMMEDIATELY discontinue use and consult your physician before resuming play.`
        setTimeout(function () {
            gfunc.startTransition(true, 'scene/ui/title.html', 'scene/act/title.js', 0)
        }, 5000)
    }, 1000)
}, 3000)

