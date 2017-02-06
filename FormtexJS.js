//IE Fix - allow copying from Disabeld fields
function allowToCopyFromDisableds() {
    i = NWF$('[disabled]');
    NWF$(i).each(function () {
        NWF$(this).removeProp("disabled");
        NWF$(this).prop("readonly", true);
    })
}