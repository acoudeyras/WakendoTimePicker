WAF.define('KendoTimePicker', ['waf-core/widget', 'kendoCore'], function(widget, $) {
	'use strict';
		
    var KendoTimePicker = widget.create('KendoTimePicker', {

    	value: widget.property({
    		type: 'string'
    	}),
    	
        init: function() {
        	var self = this;

        	self.valueChangeSubscriber = self.value.onChange(function(newValue) {
        		self.kendoWidget.value(newValue);
        	});
        	self.render();
        },
        
        render: function() {
        	var self = this;	
        	$(self.node).empty();
			var $el = $('<input />').appendTo(self.node);
			
        	$el.kendoTimePicker({
        		change: function(event) {
        			var value = self.kendoWidget.value();
        			self.valueChangeSubscriber.pause();
        			self.value(value.toString());
        			self.valueChangeSubscriber.resume();
        		}
        	});
        	
        	self.kendoWidget = $el.data("kendoTimePicker");			        	
        },

        open: function() {
        	self.kendoWidget.open();
        },

        close: function() {
        	self.kendoWidget.close();
        },

        enable: function() {
        	self.kendoWidget.enable();
        },

        disable: function() {
        	self.kendoWidget.enable(false);
        }

    });

    return KendoTimePicker;

});