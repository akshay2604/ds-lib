import { Directive } from '@angular/core';
import { HlmButton } from 'grg-ui-ui/helm/button';

@Directive({
	selector: 'button[hlmAlertDialogAction]',
	hostDirectives: [{ directive: HlmButton, inputs: ['variant', 'size'] }],
})
export class HlmAlertDialogActionButton {}
