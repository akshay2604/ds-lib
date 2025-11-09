import { Directive, computed, input } from '@angular/core';
import { BrnSheetDescription } from 'grg-ui-ui/brain/sheet';
import { hlm } from 'grg-ui-ui/helm/utils';
import type { ClassValue } from 'clsx';

@Directive({
	selector: '[hlmSheetDescription]',
	host: {
		'[class]': '_computedClass()',
	},
	hostDirectives: [BrnSheetDescription],
})
export class HlmSheetDescription {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected readonly _computedClass = computed(() => hlm('text-muted-foreground text-sm', this.userClass()));
}
