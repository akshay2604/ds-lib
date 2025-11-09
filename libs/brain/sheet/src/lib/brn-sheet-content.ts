import { Directive, inject } from '@angular/core';
import {
	type ExposesSide,
	provideExposedSideProviderExisting,
	provideExposesStateProviderExisting,
} from 'grg-ui-ui/brain/core';
import { BrnDialogContent } from 'grg-ui-ui/brain/dialog';
import { BrnSheet } from './brn-sheet';

@Directive({
	selector: '[brnSheetContent]',
	providers: [
		provideExposesStateProviderExisting(() => BrnSheetContent),
		provideExposedSideProviderExisting(() => BrnSheetContent),
	],
})
export class BrnSheetContent<T> extends BrnDialogContent<T> implements ExposesSide {
	public readonly side = inject(BrnSheet).sideState;
}
