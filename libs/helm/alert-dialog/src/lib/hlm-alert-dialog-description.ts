import { Directive, computed, input } from '@angular/core';
import { BrnAlertDialogDescription } from 'grg-ui-ui/brain/alert-dialog';
import { hlm } from 'grg-ui-ui/helm/utils';
import type { ClassValue } from 'clsx';

@Directive({
	selector: '[hlmAlertDialogDescription]',
	host: {
		'[class]': '_computedClass()',
	},
	hostDirectives: [BrnAlertDialogDescription],
})
export class HlmAlertDialogDescription {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected readonly _computedClass = computed(() => hlm('text-muted-foreground text-sm', this.userClass()));
}
