$(document).ready(function () {
    $(`body`).addClass(`contianer bg-dark`);

    $(`header`).addClass(`row justify-content-center`).append(`<div id=welcome></div`);
   
    $(`main`).addClass(`row bg-dark justify-content-center my-3`).append(`<div id=input>`).append('<div id=output></div>');
    <div class="row">
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Title</h3>
            <p class="card-text">Text</p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Title</h3>
            <p class="card-text">Text</p>
          </div>
        </div>
      </div>
    </div>
});