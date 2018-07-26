console.log('linked');

$( "#form" ).submit((e) => { 


    const fields = {};
    $("#form").find(":input").each(() => {
        fields[this.name] = $(this).val();
    });

    const obj = {fields: fields};

    console.log(obj);
    console.log('clicked');
    event.preventDefault();
  });

 