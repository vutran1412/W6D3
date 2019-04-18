const followToggles = require('./follow_toggle.js');



$('document').ready( function() {
    $(".follow-toggle").each((index, el) => {
        let ft = new followToggles(el);
        console.log("button here")
    });
});
