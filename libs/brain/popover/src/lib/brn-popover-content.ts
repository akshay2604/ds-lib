import { Directive } from '@angular/core';
import { provideExposesStateProviderExisting } from 'grg-ui-ui/brain/core';
import { BrnDialogContent } from 'grg-ui-ui/brain/dialog';

@Directive({
	selector: '[brnPopoverContent]',
	providers: [provideExposesStateProviderExisting(() => BrnPopoverContent)],
})
export class BrnPopoverContent<T> extends BrnDialogContent<T> {}
