function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName('tabLinks');
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function (){
        var firstBtn = document.querySelector('.tab .tabLinks');
        if(firstBtn) firstBtn.click();
    });