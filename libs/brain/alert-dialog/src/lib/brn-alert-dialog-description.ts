import { Directive } from '@angular/core';
import { BrnDialogDescription } from 'grg-ui-ui/brain/dialog';

@Directive({
	selector: '[brnAlertDialogDescription]',
	host: {
		'[id]': '_id()',
	},
})
export class BrnAlertDialogDescription extends BrnDialogDescription {}
