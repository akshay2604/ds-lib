import { Directive } from '@angular/core';
import { BrnDialogDescription } from 'grg-ui-ui/brain/dialog';

@Directive({
	selector: '[brnSheetDescription]',
	host: {
		'[id]': '_id()',
	},
})
export class BrnSheetDescription extends BrnDialogDescription {}
