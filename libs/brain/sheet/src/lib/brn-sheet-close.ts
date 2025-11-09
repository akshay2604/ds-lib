import { Directive } from '@angular/core';
import { BrnDialogClose } from 'grg-ui-ui/brain/dialog';

@Directive({
	selector: 'button[brnSheetClose]',
})
export class BrnSheetClose extends BrnDialogClose {}
