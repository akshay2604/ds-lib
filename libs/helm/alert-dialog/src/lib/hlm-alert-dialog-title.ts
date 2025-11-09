import { Directive, computed, input } from '@angular/core';
import { BrnAlertDialogTitle } from 'grg-ui-ui/brain/alert-dialog';
import { hlm } from 'grg-ui-ui/helm/utils';
import type { ClassValue } from 'clsx';

@Directive({
	selector: '[hlmAlertDialogTitle]',
	host: {
		'[class]': '_computedClass()',
	},
	hostDirectives: [BrnAlertDialogTitle],
})
export class HlmAlertDialogTitle {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected readonly _computedClass = computed(() => hlm('text-lg font-semibold', this.userClass()));
}
