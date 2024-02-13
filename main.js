function yes() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('yesorno').style.display = 'none';
    document.getElementById('yesgif').style.display = 'block';
    document.getElementById('cutegif').style.display='none';
    document.body.style.backgroundColor = black;
}

function no() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('yesorno').style.display = 'none';
    document.getElementById('nogif').style.display = 'block';
    document.getElementById('cutegif').style.display='none';
}
