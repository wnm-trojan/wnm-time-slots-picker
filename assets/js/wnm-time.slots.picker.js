function wnmLoadTimeSlot(e){
    var min = '8:00';
    var max = '18:00';
    var interval = parseInt(15);
    var html = '';
    var getDSlots = [['9:30', '11:00'], ['16:45', '17:50']]
    // var dSlots = ['9:30', '10:00', '10:15', '10:45', '11:50'];
    // var minuDisSlot = [];

    var minuMin = wnmHtimeToMtime(min);
    var minuMax = wnmHtimeToMtime(max);

    var i = 5;

    // for (var j = 0; j < dSlots.length; j++) {
    //     minuDisSlot[j] = wnmHtimeToMtime(dSlots[j]);
    // }

    html = '<div class="wnm-time-frame"><h6>Select an appointment</h6><ul  id="wnm-slots" class="wnm-times-list"></ul></div>';

    $('#wnm-load-time-slots').html(html);

    for (var i = minuMin; i <= minuMax; i+=interval) {

        var h = Math.trunc(i/60);
        h = h.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })
        var gap = i - (h * 60);
        gap = gap.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })
        var slotedTime = h + ":" + gap;

        // var status = (minuDisSlot.includes(i)) ? "disabled" : "active";
        var status = 'active';
        for(var k = 0; k < getDSlots.length; k++){
            if(wnmHtimeToMtime(getDSlots[k][0]) <= i && wnmHtimeToMtime(getDSlots[k][1]) >= i) {
                status = 'disabled'
            }
        }

        $('#wnm-slots').append('<li class="wnm-time-slots"><input id="wnm-slot-btn'+i+'" class="wnm-slot-btn ' + status + '" type="button" value="' + wnmTimeConvert(slotedTime) + '" /></li>');

    }
}
function wnmHtimeToMtime (h) {
    var minArr = h.split(":");
    let m = parseInt((parseInt(minArr[0]) * 60) + parseInt(minArr[1]));
    return m;
}
function wnmTimeConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
}
$('body').on('click', '#wnm-slots .wnm-time-slots .active', function (e) {
    e.preventDefault();
    var time = $(this).val();
    $('#wnm-slots .wnm-time-slots .wnm-slot-btn').removeClass('selected');
    $(this).addClass('selected');
    $('#event_start_time').val(time);
});