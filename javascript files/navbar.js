function navBar(){

    navBarElements = document.getElementById('nav-bar')

    navBarContents = '<a class="image-link" href="about-me.html"> <img id="image-logo"> </a> <ul id = "nav-list" > <li class="nav-list-item"> <a class="nav-item" href="index.html"> Home </a> </li> <li class="nav-list-item"> <details> <summary class="nav-item-dropdown"> Photos </summary> <div class="dropdown-menu"> <a class="dropdown-content" href="all-photos.html" style="color:white;"> All </a> <a class="dropdown-content" href="event-photos.html"> Events </a> <a class="dropdown-content" href="people-photos.html"> People </a> <a class="dropdown-content" href="animal-photos.html"> Animals </a> </div> </details> </li> <li class="nav-list-item"> <details> <summary class="nav-item-dropdown"> Contact </summary> <div class="dropdown-menu"> <a target="_blank" class="dropdown-content" href="https://www.instagram.com/felixchua3141/"> Insta </a> </div> </details></li><li class="nav-list-item"><a class="nav-item" href="about-me.html"> About Me </a></li></ul><footer><div id="copyright"><p class="copyright-text"> All photos shown being to <a class="links" href="about-me.html">Felix Chua</a>, do not steal or copy the photos for commerical gain. </p> </div> </footer>'

    navBarElements.innerHTML = navBarContents

    const logoLink = [
        './images/My Logo(V2-Dark) (2).png'
    ]

    document.getElementById('image-logo').src = logoLink

}

navBar()