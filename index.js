console.log('linked');

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
    

    console.log('clicked');
    event.preventDefault();
  });

 