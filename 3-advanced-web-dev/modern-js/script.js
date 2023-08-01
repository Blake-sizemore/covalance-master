$(document).ready(function () {
    // simple test to see if a large bootstrap element can be imported
    $('header').append(`<!-- Nav tabs -->
    <ul class="nav nav-tabs" id="navId" role="tablist">
        <li class="nav-item">
            <a href="#tab1Id" class="nav-link active" data-bs-toggle="tab" aria-current="page">Active</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#tab2Id">Action</a>
                <a class="dropdown-item" href="#tab3Id">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#tab4Id">Action</a>
            </div>
        </li>
        <li class="nav-item" role="presentation">
            <a href="#tab5Id" class="nav-link" data-bs-toggle="tab">Another link</a>
        </li>
        <li class="nav-item" role="presentation">
            <a href="#" class="nav-link disabled" data-bs-toggle="tab">Disabled</a>
        </li>
    </ul>
    
    <!-- Tab panes -->
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="tab1Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab2Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab3Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab4Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab5Id" role="tabpanel"></div>
    </div>`
    ).append('<h1>It Worked</h1>');

    // global
    let movie = 'The Room';
    let name = "Tommy Wiseau";
    let fullName = {
        first: 'Christopher',
        middle: 'Blake',
        last: 'Sizemore'
    };

    // basic function build
    function favMovie() {
        console.log(`My name is ${name} and my favorite movie is ${movie}`);
    }
    favMovie();

    // Arrow function
    let favMovie2 = favMovieTwo => console.log(`My name is ${name} and my favorite movie is ${movie}`);
    favMovie2();

    let getFristName = firstName => console.log(fullName.first);
    getFristName();

    let Concise = n => console.log(`${n.first}`);
    Concise(fullName);
});