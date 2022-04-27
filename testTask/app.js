const arrJosefina = [
    { 
        photoOfContact: `<img src="/additional/ava2.png" class="photo-of-contact-in-chat">`,
        classDiv: 'message',
        internalClassDiv: 'text-message',
        classP: 'text-ms',
        classSpan: 'time-of-message',
        text: 'Quickly come to the meeting room 1B, we have a big server issue',
        data: '18/02/2017',
        time: '4.00AM',
    },
    {
        classDiv: 'my-message',
        internalClassDiv: 'my-text-message',
        classP: 'my-text-ms',
        classSpan: 'my-time-of-message',
        text: `I'm having breakfast right now, can't you wait for 10 minutes?`,
        data: '18/02/2017',
        time: '4.05AM',
    },
    {
        photoOfContact: `<img src="/additional/ava2.png" class="photo-of-contact-in-chat">`,
        classDiv: 'message',
        internalClassDiv: 'text-message',
        classP: 'text-ms',
        classSpan: 'time-of-message',
        text: `We are losing money! Quick!`,
        data: '18/02/2017',
        time: '4.10AM',
    }
];
const arrAliceFreeman = [
    { 
        photoOfContact: `<img src="/additional/ava1.png" class="photo-of-contact-in-chat">`,
        classDiv: 'message',
        internalClassDiv: 'text-message',
        classP: 'text-ms',
        classSpan: 'time-of-message',
        text: 'You are the worst!',
        data: '18/02/2017',
        time: '4.20AM',
    },
];
const arrBarrera = [
    { 
        photoOfContact: `<img src="/additional/ava4.png" class="photo-of-contact-in-chat">`,
        classDiv: 'message',
        internalClassDiv: 'text-message',
        classP: 'text-ms',
        classSpan: 'time-of-message',
        text: 'Hello! Can you help me?',
        data: '18/02/2017',
        time: '5.21AM',
    },
];
const arrVelazquez = [
    { 
        photoOfContact: `<img src="/additional/ava3.png" class="photo-of-contact-in-chat">`,
        classDiv: 'message',
        internalClassDiv: 'text-message',
        classP: 'text-ms',
        classSpan: 'time-of-message',
        text: 'Quickly come to the meeting room 1B, we have a big server issue',
        data: '18/02/2017',
        time: '4.01AM',
    },
];

if (localStorage.length != 0)
    getLastChanges();
setInterval(savingChanges, 10); //for saving changes/


//initialization variables
const chatWithJosefina = document.querySelector('.josefina');
const chatWithAliceFreeman = document.querySelector('.aliceFreeman');
const chatWithVelazquez = document.querySelector('.velazquez');
const chatWithBarrera = document.querySelector('.barrera');
const formMess = document.getElementById('2');
const inputMess = formMess.elements['message'];

//Function for getting information about message for every element
function getInfoFromArray(array) {
    array.forEach(infoOfMessage => { createMessage(getInfoAboutMessage(infoOfMessage)) });
}

//get all info about mess
function getInfoAboutMessage(objectAboutMessage) {
    return {
        photoOfContact: objectAboutMessage.photoOfContact,
        classDiv: objectAboutMessage.classDiv,
        internalClassDiv: objectAboutMessage.internalClassDiv,
        classP: objectAboutMessage.classP,
        classSpan: objectAboutMessage.classSpan,
        text: objectAboutMessage.text,
        data: objectAboutMessage.data,
        time: objectAboutMessage.time,

    };
}

//Function for creating messages in dom
function createMessage(objectAboutMessage) {
    const div = document.createElement('div'); //general div for mess
    div.className = objectAboutMessage.classDiv;
    const divInternal = document.createElement('div'); //div for text info of mess
    divInternal.className = objectAboutMessage.internalClassDiv;
    const p = document.createElement('p'); //text of mess
    p.className = objectAboutMessage.classP;
    const span = document.createElement('span'); //time of mess
    span.className = objectAboutMessage.classSpan;

    p.textContent = objectAboutMessage.text; //insert text info in mess
    span.textContent = `${objectAboutMessage.data}, ${objectAboutMessage.time}`;

    divInternal.insertAdjacentElement('beforeend', p);
    divInternal.insertAdjacentElement('beforeend', span);
    div.appendChild(divInternal);

    if (objectAboutMessage.photoOfContact) //for inserting photo of contact
        div.insertAdjacentHTML('afterbegin', objectAboutMessage.photoOfContact);

    document.querySelector('.history-of-chat').insertAdjacentElement('beforeend', div); //for inserting created message (div) in dom
}

//Actions on click of chats
chatWithJosefina.addEventListener('click', (e) => {
    document.querySelector('.typing-line-box').id = 'arrJosefina'; //typing line for messages
    selectChat('josefina');
    insertInfoOfContact(selectChat('josefina'));
    clearHistoryOfChat();
    getInfoFromArray(arrJosefina);
});
chatWithAliceFreeman.addEventListener('click', (e) => {
    document.querySelector('.typing-line-box').id = 'arrAliceFreeman';
    selectChat('aliceFreeman');
    insertInfoOfContact(selectChat('aliceFreeman'));
    clearHistoryOfChat();
    getInfoFromArray(arrAliceFreeman);
});
chatWithVelazquez.addEventListener('click', (e) => {
    document.querySelector('.typing-line-box').id = 'arrVelazquez';
    selectChat('velazquez');
    insertInfoOfContact(selectChat('velazquez'));
    clearHistoryOfChat();
    getInfoFromArray(arrVelazquez);
});
chatWithBarrera.addEventListener('click', (e) => {
    document.querySelector('.typing-line-box').id = 'arrBarrera';
    selectChat('barrera');
    insertInfoOfContact(selectChat('barrera'));
    clearHistoryOfChat();
    getInfoFromArray(arrBarrera)
});

//Clear chat, when you choose another dialog
function clearHistoryOfChat() {
    const divChat = document.querySelector('.history-of-chat');
    while (divChat.childElementCount != 0) {
        divChat.firstChild.remove();
    }
}

//function for selecting chat (for css). When we click on chat we need highlight it
function selectChat(name) {
    if (name === 'josefina') {
        chatWithJosefina.className = 'chat-after-click josefina'; //this
        chatWithAliceFreeman.className = 'chat aliceFreeman';
        chatWithVelazquez.className = 'chat velazquez';
        chatWithBarrera.className = 'chat barrera';

        return '.josefina';
    } else if (name === 'aliceFreeman') {
        chatWithAliceFreeman.className = 'chat-after-click aliceFreeman'; //this
        chatWithJosefina.className = 'chat josefina';
        chatWithVelazquez.className = 'chat velazquez';
        chatWithBarrera.className = 'chat barrera';

        return '.aliceFreeman';
    } else if (name === 'velazquez') {
        chatWithVelazquez.className = 'chat-after-click velazquez'; //this
        chatWithJosefina.className = 'chat josefina';
        chatWithAliceFreeman.className = 'chat aliceFreeman';
        chatWithBarrera.className = 'chat barrera';

        return '.velazquez';
    } else if (name === 'barrera') {
        chatWithBarrera.className = 'chat-after-click barrera'; //this
        chatWithJosefina.className = 'chat josefina';
        chatWithAliceFreeman.className = 'chat aliceFreeman';
        chatWithVelazquez.className = 'chat velazquez';

        return '.barrera';
    }
}

formMess.addEventListener('submit', (e) => {
    insertMyMess(e);
    setTimeout(getAnswer, 10000); //for adding answer after our message
}) //for sending in form

//function for inserting photo and name of chosen contact bar
function insertInfoOfContact(func) {
    const divChoseContact = document.querySelector('.main-info-about-chose-contact');
    const img = document.querySelector('.photo-of-chose-contact');
    const h1 = document.querySelector('.name-of-chose-contact');

    const chosenContact = func;
    img.src = document.querySelector('ul').querySelector(chosenContact).querySelector('img').src;
    h1.textContent = document.querySelector('ul').querySelector(chosenContact).querySelector('h2').textContent;
}

//function for creating mess by sending text in typing line
function insertMyMess(e) {
    e.preventDefault();
    const textMess = inputMess.value;
    formMess.reset();
    createMessage(insertInfoMessInArray(identifyArray(), textMess, true));
}

//function for identifying arr for new messages. By click on chat adding id with name of array. This func compares name of id and name of array
function identifyArray() {
    const nameArr = document.querySelector('.typing-line-box').id;
    if (nameArr === 'arrJosefina')
        return arrJosefina;
    else if (nameArr === 'arrAliceFreeman')
        return arrAliceFreeman;
    else if (nameArr === 'arrVelazquez')
        return arrVelazquez;
    else if (nameArr === 'arrBarrera')
        return arrBarrera;
}

//function for inserting our mess info in array
function insertInfoMessInArray(array, textMess, my) {
    let d = new Date();
    if (my === true) {
       array.push(
    {
        classDiv: 'my-message',
        internalClassDiv: 'my-text-message',
        classP: 'my-text-ms',
        classSpan: 'my-time-of-message',
        text: textMess,
        data: d.toLocaleDateString(),
        time: getConversionTime(),
        }) 
    } else if (my === false) {
        array.push(
            {
            photoOfContact: array[0].photoOfContact,
            classDiv: 'message',
            internalClassDiv: 'text-message',
            classP: 'text-ms',
            classSpan: 'time-of-message',
            text: textMess,
            data: d.toLocaleDateString(),
            time: getConversionTime(),
            })
    }
    
    return array[array.length - 1];
}

//function for conversation time in 12 hours format
function getConversionTime() {
    let t = new Date();
    let minutes = t.getMinutes();
    let hours = t.getHours();
    let meridiem = 'AM';

    switch (hours) {
        case '0':
            hours = 12;
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            hours = '0' + hours;
            break;
        case '13':
            hours = '0' + 1;
            meridiem = 'PM';
            break;
        case '14':
            hours = '0' + 2;
            meridiem = 'PM';
            break;
        case '15':
            hours = '0' + 3;
            meridiem = 'PM';
            break;
        case '16':
            hours = '0' + 4;
            meridiem = 'PM';
            break;
        case '17':
            hours = '0' + 5;
            meridiem = 'PM';
            break;
        case '18':
            hours = '0' + 6;
            meridiem = 'PM';
            break;
        case '19':
            hours = '0' + 7;
            meridiem = 'PM';
            break;
        case '20':
            hours = '0' + 8;
            meridiem = 'PM';
            break;
        case '21':
            hours = '0' + 9;
            meridiem = 'PM';
            break;
        case '22':
            hours = '0' + 10;
            meridiem = 'PM';
            break;
        case '23':
            hours = '0' + 11;
            meridiem = 'PM';
            break;
    }

    return `${hours}.${minutes}${meridiem}`;
}

//function for getting answer after our message in chucknorris.io
function getAnswer() {
    const url = 'https://api.chucknorris.io/jokes/random';
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response;
            } throw Error(response.statusText);
        })
        .then(response => response.json())
        .then(data => createMessage(insertInfoMessInArray(identifyArray(), data.value, false)) )
        .catch(error => console.log(`There was an error: ${error}`)), false;
}

//function for showing last mess in sidebar history of chats
function showLastMess() {
    const lastMessJosefina = document.querySelector('.last-sms.Josefina'); //for identify tag with last mess each of contact
    const lastMessAliceFreeman = document.querySelector('.last-sms.AliceFreeman');
    const lastMessBarrera = document.querySelector('.last-sms.Barrera');
    const lastMessVelazquez = document.querySelector('.last-sms.Velazquez');

    lastMessAliceFreeman.textContent = ifNeedCutMess(arrAliceFreeman.slice(-1)[0].text); //for getting last mess from array
    lastMessJosefina.textContent = ifNeedCutMess(arrJosefina.slice(-1)[0].text);
    lastMessVelazquez.textContent = ifNeedCutMess(arrVelazquez.slice(-1)[0].text);
    lastMessBarrera.textContent = ifNeedCutMess(arrBarrera.slice(-1)[0].text);

    function ifNeedCutMess(mess) { //check if mess so long, it need to cut
        if (mess.length > 74)
            mess = mess.slice(0, 73) + '...';
        return mess;
    }    
}

//function for showing last date of chatting
function showLastDateChatting() {
    const chatJosefina = document.querySelector('li.josefina');
    const chatAliceFreeman = document.querySelector('li.aliceFreeman');
    const chatBarrera = document.querySelector('li.barrera');
    const chatVelazquez = document.querySelector('li.velazquez');

    chatJosefina.querySelector('.data-of-last-sms').textContent = arrJosefina.slice(-1)[0].data;
    chatAliceFreeman.querySelector('.data-of-last-sms').textContent = arrAliceFreeman.slice(-1)[0].data;
    chatBarrera.querySelector('.data-of-last-sms').textContent = arrBarrera.slice(-1)[0].data;
    chatVelazquez.querySelector('.data-of-last-sms').textContent = arrVelazquez.slice(-1)[0].data;
}

setInterval(showLastMess, 100);
setInterval(showLastDateChatting, 100); 

//function for saving changes
function savingChanges() {
    localStorage.setItem('Josefina', JSON.stringify(arrJosefina));
    localStorage.setItem('AliceFreeman', JSON.stringify(arrAliceFreeman));
    localStorage.setItem('Barrera', JSON.stringify(arrBarrera));
    localStorage.setItem('Velazquez', JSON.stringify(arrVelazquez));
}

//function for getting last changes from localStorage
function getLastChanges() {
    arrJosefina.length = 0; //for reset arrays
    arrAliceFreeman.length = 0;
    arrBarrera.length = 0;
    arrVelazquez.length = 0;
 
    const arrJosefinaLast = JSON.parse(localStorage.Josefina); //get data from local storage
    const arrAliceFreemanLast = JSON.parse(localStorage.AliceFreeman);
    const arrBarreraLast = JSON.parse(localStorage.Barrera);
    const arrVelazquezLast = JSON.parse(localStorage.Velazquez);

    arrJosefinaLast.forEach(mess => { arrJosefina.push(mess) }); //add elements from local storage in resetting arrays
    arrAliceFreemanLast.forEach(mess => { arrAliceFreeman.push(mess) });
    arrBarreraLast.forEach(mess => { arrBarrera.push(mess) });
    arrVelazquezLast.forEach(mess => { arrVelazquez.push(mess) });
}

