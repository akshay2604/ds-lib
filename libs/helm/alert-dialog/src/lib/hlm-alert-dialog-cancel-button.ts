import { Directive } from '@angular/core';
import { HlmButton, provideBrnButtonConfig } from 'grg-ui-ui/helm/button';

@Directive({
	selector: 'button[hlmAlertDialogCancel]',
	hostDirectives: [{ directive: HlmButton, inputs: ['variant', 'size'] }],
	providers: [provideBrnButtonConfig({ variant: 'outline' })],
})
export class HlmAlertDialogCancelButton {}
