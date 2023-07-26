window.onload("DOMContentLoaded", function () {
    // elements
    let script = document.createElement("script");
    let link = document.createElement("link");
    // atrributies
    let srcAtt = document.createAttribute("src");
    let intAtt = document.createAttribute("integrity");
    let croAtt = document.createAttribute("crossorigin");
    let relAtt = document.createAttribute("rel");
    let hrefAtt = document.createAttribute("href");
    // values
    // [css, js, js-popper,js-jq]
    hrefAtt.value = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    relAtt.value = "stylesheet";
    intAtt.value = ["sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM", "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz", "sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r", "sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS"];
    croAtt.value = "anonymous";
    srcAtt.value = ["null","https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"]
document.
    // Bootstrap 5.3 - CSS
    // <link 
    // href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
    // rel="stylesheet"
    // integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" 
    // crossorigin="anonymous"></link>
    // 
    // Bootstrap 5.3 -JS,Popper,jQs
    // <script 
    // src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
    // integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"  
    // crossorigin="anonymous"></script>
    // 
    // <script 
    // src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    // integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
    // crossorigin="anonymous"></script>
    // 
    // <script 
    // src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
    // integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS"
    // crossorigin="anonymous"></script>    
});