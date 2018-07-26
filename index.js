
$( "#form" ).submit(function( event ) { 

    const fields = {};
    
    $("#form").find(":input").each(function() {
        fields[this.name] = $(this).val();
    });
    console.log(fields);

    $("select.time").change(function(){
        const timeValue = $(".time option:selected").val();
        event.preventDefault();
    });

    $("select.agent").change(function(){
        const timeValue = $(".agenct option:selected").val();
        event.preventDefault();
    });


    // Put the object into storage
    localStorage.setItem('fields', JSON.stringify(fields));

    // Retrieve the object from storage
    const retrievedObject = localStorage.getItem('fields');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));

    // console.log('clicked');
    event.preventDefault();
  });

 