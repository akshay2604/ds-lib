import { Directive } from '@angular/core';
import { provideExposesStateProviderExisting } from 'grg-ui-ui/brain/core';
import { BrnDialogContent } from 'grg-ui-ui/brain/dialog';

@Directive({
	selector: '[brnAlertDialogContent]',
	providers: [provideExposesStateProviderExisting(() => BrnAlertDialogContent)],
})
export class BrnAlertDialogContent<T> extends BrnDialogContent<T> {}
