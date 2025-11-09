import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { provideCustomClassSettableExisting } from 'grg-ui-ui/brain/core';
import { BrnDialogOverlay } from 'grg-ui-ui/brain/dialog';

@Component({
	selector: 'brn-alert-dialog-overlay',
	providers: [provideCustomClassSettableExisting(() => BrnAlertDialogOverlay)],
	template: '',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class BrnAlertDialogOverlay extends BrnDialogOverlay {}
