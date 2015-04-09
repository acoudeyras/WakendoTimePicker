(function(KendoTimePicker) {
	'use strict';
	
	KendoTimePicker.setWidth('130');
	KendoTimePicker.setHeight('22');
	
    KendoTimePicker.addLabel({
        'defaultValue': 'Label',
        'position': 'left'
    });	
    
    KendoTimePicker.setPanelStyle({
	        'fClass': true,
	        'text': true,
	        'background': true,
	        'border': true,
	        'sizePosition': true,
	        'label': true,
	        'disabled': ['border-radius']
    	});

});
