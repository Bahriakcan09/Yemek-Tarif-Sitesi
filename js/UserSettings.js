function changeTab(clickedTab) {
    var tabs = document.querySelectorAll('nav>ul>li');

    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] === clickedTab) {
            tabs[i].classList.add('active');
            var ref = document.getElementById('scrollRef');
            ref.href = "#scroll" + (i + 1);
            ref.click();
        } else {
            tabs[i].classList.remove('active');
        }
    }
}