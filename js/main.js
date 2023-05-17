let but = document.getElementById('but1')
let forma = document.getElementById('form1')

forma.onsubmit = f1

function f1() {
    console.log(forma.elements)
    console.log(forma.elements)
    let stroka = ''
    let elems = forma.elements
    for (e in elems) {
        if (elems[e].type == 'checkbox' && elems[e].checked) {
            stroka += elems[e].name
            stroka += ' -- выбран' + '\n'

        }
        if (elems[e].type == 'radio' && elems[e].checked) {
            stroka += elems[e].name
            stroka += ' -- ' + elems[e].value + '\n'
        }



        if (e == forma.elements.length-1) {break}
        if (elems[e].name == '') {continue}
        if (elems[e].value == undefined) {continue}

        if (elems[e].type != 'checkbox' && elems[e].type != 'radio') {
            stroka += elems[e].name
            stroka += ' -- ' + elems[e].value + '\n'
        }
    }
    console.log(stroka)
    // saveToPC(stroka)
    // sendemail(stroka)
    telegram(stroka,token,chatid)
    return false
}

function saveToPC(str){
let blob = new Blob([str], {type: "text/plain"});
let link = document.createElement("a");
link.setAttribute("href", URL.createObjectURL(blob));
link.setAttribute("download", "123.txt");
link.click();
}

function sendemail(str){
    str=str.replaceAll('\n','<br>')
    Email.send({
        SecureToken : "8d5e8d3d-4221-4813-b7bf-930e0f978358",
        To : 'koroliev@yandex.ru',//'ysh-ysh@rambler.ru',//'koanyur@gmail.com','koroliev@yandex.ru',
        From : "koanyur@gmail.com",
        Subject : "From TOP",
        Body : str,
        Attachments : [
	{
		name : "smtpjs.png",
		path : "https://i.pinimg.com/originals/8a/de/fe/8adefe5af862b4f9cec286c6ee4722cb.jpg"
	}]
    }).then(alert('отправлено'))
}

bot = 't.me/testBotAboutCat_bot'
token = '5909417731:AAF4qPc-CIEYc_11MplQywQpIS3-tk5ZgoA'//'6273327730:AAFsKa4fQ099v97L2NFILGfyz_VlNGc8iZQ'
chatid = '50853567'

function telegram(str,token,chatid){
    let z=$.ajax({
    type: "POST",
    url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
    data: "parse_mode=HTML&text="+encodeURIComponent(str),
    }).then(alert('отправили в тг') )
}

//https://api.telegram.org/bot6273327730:AAFsKa4fQ099v97L2NFILGfyz_VlNGc8iZQ/getUpdates