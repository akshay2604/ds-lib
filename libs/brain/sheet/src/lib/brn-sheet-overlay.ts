import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { provideCustomClassSettableExisting } from 'grg-ui-ui/brain/core';
import { BrnDialogOverlay } from 'grg-ui-ui/brain/dialog';

@Component({
	selector: 'brn-sheet-overlay',
	providers: [provideCustomClassSettableExisting(() => BrnSheetOverlay)],
	template: '',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class BrnSheetOverlay extends BrnDialogOverlay {}
