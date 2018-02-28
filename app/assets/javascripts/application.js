// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .
$(document).ready(function() {
  $('.has-tooltip').tooltip();
});


$(document).ready(function() {
  $('.has-tooltip').tooltip();
  $('.has-popover').popover({
    trigger: 'hover'
  });
});





//function to load rows on click
$(document).ready(function () {
    var counter = 0;

    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="text" class="form-control" name="todo[v_topic_code'+ counter + ']" id="todo_v_topic_code'+ counter +'"></td>';
        cols +='<td> <select name="todo[v_topic_type' + counter + ']" id="todo_v_topic_type' + counter + '"><option value="standard_3x">standard_3x</option>  <option value="standard_1x">standard_1x</option> <option value="ranking">ranking</option></select></td> ';   
        cols += '<td><input type="text" class="form-control" name="todo[v_survey_column' + counter + ']" id="todo_v_survey_column'+ counter + '"/></td>';
        cols += '<td><input maxlength="25" type="text" class="form-control" name="todo[v_topic_title' + counter + ']" id="todo_v_topic_title' + counter + '" /></td>';
        cols += '<td><input type="text" class="form-control" name="todo[v_topic_frame' + counter + ']" id="todo_v_topic_frame' + counter + '" /></td>';
        cols += '<td><input type="text" class="form-control" name="todo[v_segment' + counter + ']" id="todo_v_segment' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="todo[v_product_mindset' + counter + ']" id="todo_v_product_mindset' + counter + '" /></td>';
        cols += '<td><input type="text" class="form-control" name="todo[v_ranking_num' + counter + ']" id="todo_v_ranking_num' +counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="todo[v_ranking_total' + counter + ']" id="todo_v_ranking_total' +counter + '"/></td>';


        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });



    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
    });


});


$(document).ready(function () {
    var counter = 0;

    $("#addrow1").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="text" class="form-control" name="todo[g_topic_code'+ counter + ']" id="todo_g_topic_code'+ counter +'"></td>';
        cols +='<td> <select name="todo[g_topic_type' + counter + ']" id="todo_g_topic_type' + counter + '"><option value="Percent Positive">Percent Positive</option>  <option value="Mindset">Mindset</option> <option value="Ranking">Ranking</option></select></td> ';   
        cols += '<td><input type="text" class="form-control" name="todo[graph_topics' + counter + ']" id="graph_topics'+ counter + '"/></td>';
        cols += '<td><input maxlength="25" type="text" class="form-control" name="todo[g_topic_title' + counter + ']" id="todo_g_topic_title' + counter + '" /></td>'; 
        cols += '<td><input type="text" class="form-control" name="todo[g_ranking_num' + counter + ']" id="todo_g_ranking_num' +counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="todo[g_ranking_total' + counter + ']" id="todo_g_ranking_total' +counter + '"/></td>';


        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list1").append(newRow);
        counter++;
    });



    $("table.order-list1").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
    });


});




function calculateRow(row) {
    var price = +row.find('input[name^="price"]').val();

}

function calculateGrandTotal() {
    var grandTotal = 0;
    $("table.order-list").find('input[name^="price"]').each(function () {
        grandTotal += +$(this).val();
    });
    $("#grandtotal").text(grandTotal.toFixed(2));
}
