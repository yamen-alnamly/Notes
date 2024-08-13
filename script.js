//const BoardNotes = [];
let BoardNotes = JSON.parse(sessionStorage.getItem('BoardNotes'));
RenderNotes();

function RenderNotes() {
    let BoardNotesHtml = ''
    for (let i = 0; i < BoardNotes.length; i++) {
        let Notes = BoardNotes[i];
        let {note , duedate} = Notes ; 
        let html = `
        <div class="note">
        <button onclick=" BoardNotes.splice(${i}, 1);
        RenderNotes();">x</button>
        <p>${note}</p>
        <h2>${duedate}</h2>
        </div>`;
        BoardNotesHtml += html
    }
    console.log(BoardNotesHtml);
    document.querySelector('#borad').innerHTML = BoardNotesHtml;
    sessionStorage.setItem('BoardNotes' , JSON.stringify(BoardNotes));
    return() ; 
}


function PostNote() {

    let inputitem = document.querySelector('.task');
    let inputDate = document.querySelector('.time')
    let note = inputitem.value;
    let duedate = inputDate.value;
    if (inputitem.value != '' && inputDate.value != '')
     { 
        console.log(note);
        console.log(BoardNotes);
        BoardNotes.push({note,duedate});
        inputitem.value = '';
        RenderNotes();
    }
}
