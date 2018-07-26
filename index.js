console.log('linked');

// $(document).ready(function() {
//     $(window).unload(saveSettings);
    // loadSettings();
// });

// function loadSettings() {
//     $('#height').val(localStorage.height);
// }



$( "#form" ).submit(function( event ) { 

    const fields = {};
    $("#form").find(":input").each(function() {
        fields[this.name] = $(this).val();
    });
    const obj = {fields: fields};
    console.log(obj);

    $("select.time").change(function(){
        const timeValue = $(".time option:selected").val();
        console.log(timeValue);
        event.preventDefault();
    });

    const string = JSON.stringify(obj)
    console.log(string)
    
    function populateStorage() {
        localStorage.setItem(obj, );
        localStorage.setItem('bgcolor', 'red');
      }

    populateStorage();


    console.log('clicked');
    event.preventDefault();
  });

 