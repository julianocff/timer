function relogio() {
    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    let segundos = 0
    let timer

    const criaSegundos = (segundos) => {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    const iniciaRelogio = () => {
        timer = setInterval(() => {
            segundos++
            relogio.innerHTML = criaSegundos(segundos)
        }, 1000)
    }

    // iniciar.addEventListener('click', (evento) => {
    //     clearInterval(timer)
    //     iniciaRelogio()
    //     relogio.classList.remove('relogio-pausado')
    //     relogio.classList.remove('relogio-zerado')
    //     relogio.classList.add('relogio-contando')
    //         // relogio.style.color = "#000"
    // })

    // pausar.addEventListener('click', (evento) => {
    //     clearInterval(timer)
    //     relogio.classList.remove('relogio-contando')
    //     relogio.classList.remove('relogio-zerado')
    //     relogio.classList.add('relogio-pausado')
    // })

    // zerar.addEventListener('click', evento => {
    //     clearInterval(timer)
    //     relogio.innerHTML = '00:00:00'
    //     segundos = 0
    //     relogio.classList.remove('relogio-contando')
    //     relogio.classList.remove('relogio-pausado')
    //     relogio.classList.add('relogio-zerado')
    // })

    // modelo mais performatico de criar as func de eventos

    document.addEventListener('click', evento => {
        let elemento = evento.target

        if (elemento.classList.contains('iniciar')) {
            clearInterval(timer)
            iniciaRelogio()
            relogio.classList.remove('relogio-pausado')
            relogio.classList.remove('relogio-zerado')
            relogio.classList.add('relogio-contando')
        }

        if (elemento.classList.contains('pausar')) {
            clearInterval(timer)
            relogio.classList.remove('relogio-contando')
            relogio.classList.remove('relogio-zerado')
            relogio.classList.add('relogio-pausado')
        }

        if (elemento.classList.contains('zerar')) {
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            segundos = 0
            relogio.classList.remove('relogio-contando')
            relogio.classList.remove('relogio-pausado')
            relogio.classList.add('relogio-zerado')
        }
    })
}

relogio()