var mytext = `I specialize in creating intuitive and visually appealing user interfaces for websites. With
my skills in HTML, CSS, and JavaScript,
    I strive to design and develop websites that not only look great but also provide a seamless
user experience.Whether it 's building responsive layouts, optimizing web page performance,
or implementing interactive features, I 'm passionate about creating engaging and accessible
web experiences.😃.`

i = 0


var read = setInterval(
    function write(params) {
        document.getElementById(`textwriter`).textContent += mytext[i]
        i++
        if (i > mytext.length - 1) {
            clearInterval(read)

        }

    }, 20);
// read()
