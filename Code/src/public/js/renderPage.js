var filterSelector = $('#filter');
var filterArchivedSelector = $('#filterArchived');
var agencyFilterSelector = $('#agencyFilter');
var agencyFilterSelectorDiv = $('#agencyFilterDiv');
var renderPage = function (bolosPerPage, visibleNumbers) {
    const filterValue = filterSelector.find("option:selected").val();
    const filterArchivedValue = filterArchivedSelector.find("option:selected").val();
    const agencyFilterValue = agencyFilterSelector.find("option:selected").val();
    const listOfBoloThumbnails = $('.thumbnail');
    const archivedBolos = $('#input').val() === 'archived';
    var boloDiv = $('#bolo-list');
    var pagingDiv = $('#bolo-paging');
    if(!archivedBolos){
   
    $.ajax({
        
        url: '/bolo/list', type: 'GET',
        data: {filter: filterValue, agency: agencyFilterValue, archived: archivedBolos},
        success: function (response) {
            if (!response) {
                $('#purge').hide();
                pagingDiv.hide();
                boloDiv.empty();
                boloDiv.append('<p class="text-success" style="font-size:xx-large">No Bolos To Show</p>');
            } else {                
                var Title = agencyFilterValue === '' ? filterSelector.find("option:selected").text():
                        agencyFilterSelector.find("option:selected").text();
                //var title_archived = filterArchivedSelector.find("option:selected").text();
                console.log('this is ' + Title);
                console.log('testing 1');
                $('#purge').show();
                pagingDiv.show();
                boloDiv.empty();
                boloDiv.append();
                boloDiv.append(response);
                boloDiv.children().hide();
                boloDiv.children().slice(0, bolosPerPage).show();
                $(function () {
                    pagingDiv.twbsPagination({
                        totalPages: listOfBoloThumbnails.length <= bolosPerPage ?
                            1 : Math.floor(listOfBoloThumbnails.length / bolosPerPage),
                        visiblePages: visibleNumbers,
                        prev: '&laquo;',
                        next: '&raquo;',
                        onPageClick: function (event, page) {
                            boloDiv.children().hide();
                            var start = (page - 1) * bolosPerPage;
                            var end = start + bolosPerPage;
                            boloDiv.children().slice(start, end).show();
                        }
                    });
                });
            }
        }
    })
       
}
else{
    $.ajax({
        url: '/bolo/list', type: 'GET',
        data: {filterArchived: filterArchivedValue, archived: archivedBolos},
        success: function (responses) {
            if (!responses) {
                $('#purge').hide();
                pagingDiv.hide();
                boloDiv.empty();
                boloDiv.append('<p class="text-success" style="font-size:xx-large">No Bolos To Show</p>');
            } else {
                var title_archived = filterArchivedSelector.find("option:selected").text();
                console.log('that is '+ title_archived);
                console.log('testing 2');
                $('#purge').show();
                pagingDiv.show();
                boloDiv.empty();
                boloDiv.append();
                boloDiv.append(responses);
                boloDiv.children().hide();
                boloDiv.children().slice(0, bolosPerPage).show();
                $(function () {
                    pagingDiv.twbsPagination({
                        totalPages: listOfBoloThumbnails.length <= bolosPerPage ?
                            1 : Math.floor(listOfBoloThumbnails.length / bolosPerPage),
                        visiblePages: visibleNumbers,
                        prev: '&laquo;',
                        next: '&raquo;',
                        onPageClick: function (event, page) {
                            boloDiv.children().hide();
                            var start = (page - 1) * bolosPerPage;
                            var end = start + bolosPerPage;
                            boloDiv.children().slice(start, end).show();
                        }
                    });
                });
            }
        }
    })
}
};
$(document).ready(function () {
    agencyFilterSelectorDiv.hide();
    renderPage(12, 8);
});
//When you change the filter, render the selected bolos, and the paging
filterSelector.change(function () {
    if (filterSelector.val() === 'selectedAgency') {
        agencyFilterSelectorDiv.show();
    } else {
        agencyFilterSelectorDiv.hide();
        agencyFilterSelector.val('').change();
    }
});

//When you change the agency filter, render all the agencies bolos, and the paging
agencyFilterSelector.change(function () {
    renderPage(12, 8);
});