// Hide navbar when scroll
$(document).ready(function () {
  $(document).scroll(function () {
      $('.navbar-collapse').collapse('hide');
  });
});

// hide navbar when click outside 
// $(document).on('click', function () {
//   $('.collapse').collapse('hide');
// });

// <!------ Js for select2 option ------->
function formatText(icon) {
  return $('<span><i class="fas ' + $(icon.element).data('icon') + '"></i> ' + icon.text + '</span>');
};
$('.select2-icon').select2({
  width: "50%",
  templateSelection: formatText,
  templateResult: formatText,
  placeholder: "Placeholder",
});

// js for tooltip (hotelresult)
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// js for multiselect datepiker calender start (hotelresult page)
var separator = ' - ', dateFormat = 'MM/DD/YYYY';
  var options = {
    autoUpdateInput: false,
    autoApply: true,
    locale: {
      format: dateFormat,
      separator: separator,
  },
  opens: "right"
};
  $('[data-datepicker=separateRange]')
      .daterangepicker(options)
      .on('apply.daterangepicker' ,function(ev, picker) {
          var boolStart = this.name.match(/value_from_start_/g) == null ? false : true;
          var boolEnd = this.name.match(/value_from_end_/g) == null ? false : true;

          var mainName = this.name.replace('value_from_start_', '');
          if(boolEnd) {
              mainName = this.name.replace('value_from_end_', '');
              $(this).closest('form').find('[name=value_from_end_'+ mainName +']').blur();
          }

          $(this).closest('form').find('[name=value_from_start_'+ mainName +']').val(picker.startDate.format(dateFormat));
          $(this).closest('form').find('[name=value_from_end_'+ mainName +']').val(picker.endDate.format(dateFormat));

          $(this).trigger('change').trigger('keyup');
      })
      .on('show.daterangepicker', function(ev, picker) {
          var boolStart = this.name.match(/value_from_start_/g) == null ? false : true;
          var boolEnd = this.name.match(/value_from_end_/g) == null ? false : true;
          var mainName = this.name.replace('value_from_start_', '');
          if(boolEnd) {
              mainName = this.name.replace('value_from_end_', '');
          }

          var startDate = $(this).closest('form').find('[name=value_from_start_'+ mainName +']').val();
          var endDate = $(this).closest('form').find('[name=value_from_end_'+ mainName +']').val();

          $('[name=daterangepicker_start]').val(startDate).trigger('change').trigger('keyup');
          $('[name=daterangepicker_end]').val(endDate).trigger('change').trigger('keyup');
          
          if(boolEnd) {
              $('[name=daterangepicker_end]').focus();
          }
      });
// js for multiselect calender end (hotelresult page)

