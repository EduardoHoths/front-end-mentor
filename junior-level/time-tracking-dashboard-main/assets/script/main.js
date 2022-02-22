import { data } from '../src/data.js'

const daily = document.getElementById('daily')
daily.addEventListener('click', switchToTime)

const weekly = document.getElementById('weekly')
weekly.addEventListener('click', switchToTime)

const monthly = document.getElementById('monthly')
monthly.addEventListener('click', switchToTime)


function switchToTime(e) {
    setActive(e)
    const work = document.getElementById('work')
    const play = document.getElementById('play')
    const study = document.getElementById('study')
    const exercise = document.getElementById('exercise')
    const social = document.getElementById('social')
    const selfCare = document.getElementById('selfCare')

    if (e.target.id === 'daily') {
        switchToDaily(work, play, study, exercise, social, selfCare)
    }
    if (e.target.id === 'weekly') {
        switchToWeekly(work, play, study, exercise, social, selfCare)
    }
    if (e.target.id === 'monthly') {
        switchToMonthly(work, play, study, exercise, social, selfCare)
    }

}

function setActive(e) {
    daily.classList.remove('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')
    e.target.classList.add('active')
}

function switchToDaily(work, play, study, exercise, social, selfCare) {
    work.childNodes[1].innerText = data[0].timeframes.daily.current + 'hrs'
    work.childNodes[3].innerText = 'Last day - ' + data[0].timeframes.daily.previous + 'hrs'

    play.childNodes[1].innerText = data[1].timeframes.daily.current + 'hrs'
    play.childNodes[3].innerText = `Last day - ${data[1].timeframes.daily.previous}hrs`

    study.childNodes[1].innerText = data[2].timeframes.daily.current + 'hrs'
    study.childNodes[3].innerText = `Last day - ${data[2].timeframes.daily.previous}hrs`

    exercise.childNodes[1].innerText = data[3].timeframes.daily.current + 'hrs'
    exercise.childNodes[3].innerText = `Last day - ${data[3].timeframes.daily.previous}hrs`

    social.childNodes[1].innerText = data[4].timeframes.daily.current + 'hrs'
    social.childNodes[3].innerText = `Last day - ${data[4].timeframes.daily.previous}hrs`

    selfCare.childNodes[1].innerText = data[5].timeframes.daily.current + 'hrs'
    selfCare.childNodes[3].innerText = `Last day - ${data[5].timeframes.daily.previous}hrs`
}

function switchToWeekly(work, play, study, exercise, social, selfCare) {
    work.childNodes[1].innerText = data[0].timeframes.weekly.current + 'hrs'
    work.childNodes[3].innerText = 'Last week - ' + data[0].timeframes.weekly.previous + 'hrs'

    play.childNodes[1].innerText = data[1].timeframes.weekly.current + 'hrs'
    play.childNodes[3].innerText = `Last week - ${data[1].timeframes.weekly.previous}hrs`

    study.childNodes[1].innerText = data[2].timeframes.weekly.current + 'hrs'
    study.childNodes[3].innerText = `Last week - ${data[2].timeframes.weekly.previous}hrs`

    exercise.childNodes[1].innerText = data[3].timeframes.weekly.current + 'hrs'
    exercise.childNodes[3].innerText = `Last week - ${data[3].timeframes.weekly.previous}hrs`

    social.childNodes[1].innerText = data[4].timeframes.weekly.current + 'hrs'
    social.childNodes[3].innerText = `Last week - ${data[4].timeframes.weekly.previous}hrs`

    selfCare.childNodes[1].innerText = data[5].timeframes.weekly.current + 'hrs'
    selfCare.childNodes[3].innerText = `Last week - ${data[5].timeframes.weekly.previous}hrs`
}

function switchToMonthly(work, play, study, exercise, social, selfCare) {
    work.childNodes[1].innerText = data[0].timeframes.monthly.current + 'hrs'
    work.childNodes[3].innerText = 'Last month - ' + data[0].timeframes.monthly.previous + 'hrs'

    play.childNodes[1].innerText = data[1].timeframes.monthly.current + 'hrs'
    play.childNodes[3].innerText = `Last month - ${data[1].timeframes.monthly.previous}hrs`

    study.childNodes[1].innerText = data[2].timeframes.monthly.current + 'hrs'
    study.childNodes[3].innerText = `Last month - ${data[2].timeframes.monthly.previous}hrs`

    exercise.childNodes[1].innerText = data[3].timeframes.monthly.current + 'hrs'
    exercise.childNodes[3].innerText = `Last month - ${data[3].timeframes.monthly.previous}hrs`

    social.childNodes[1].innerText = data[4].timeframes.monthly.current + 'hrs'
    social.childNodes[3].innerText = `Last month - ${data[4].timeframes.monthly.previous}hrs`

    selfCare.childNodes[1].innerText = data[5].timeframes.monthly.current + 'hrs'
    selfCare.childNodes[3].innerText = `Last month - ${data[5].timeframes.monthly.previous}hrs`
}