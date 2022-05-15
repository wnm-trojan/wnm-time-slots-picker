# wnm-time-slots-picker
This plugin can be used for picking time slots for the selected date. And also, the time slot breaking range can be dynamically changed. You can disable specific dates and time slots so that they cannot be selected. 

Requirements
* Jquery 3.0 or Up version
* Jquery-UI 1.12.1 or Up version


### Disable dates array
```sh
var dates = ["26-03-2022", "27-03-2022", "30-03-2022"];
```

### Time slot start and end time
```sh
var min = '8:00';
var max = '18:00';
```

### Time slot breaking gap value
```sh
var interval = parseInt(15);
```

### Disable times array
```sh
var getDSlots = [['9:30', '11:00'], ['16:45', '17:50']];
```

### Time slot bind id
```sh
<div id="wnm-load-time-slots"></div>
```
