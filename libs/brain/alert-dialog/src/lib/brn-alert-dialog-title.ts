import { Directive } from '@angular/core';
import { BrnDialogTitle } from 'grg-ui-ui/brain/dialog';

@Directive({
	selector: '[brnAlertDialogTitle]',
	host: {
		'[id]': '_id()',
	},
})
export class BrnAlertDialogTitle extends BrnDialogTitle {}
