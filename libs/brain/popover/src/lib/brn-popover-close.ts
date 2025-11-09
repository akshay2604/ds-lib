import { Directive } from '@angular/core';
import { BrnDialogClose } from 'grg-ui-ui/brain/dialog';

@Directive({
	selector: 'button[brnPopoverClose]',
})
export class BrnPopoverClose extends BrnDialogClose {}
