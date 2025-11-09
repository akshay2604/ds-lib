import { computed, Directive, input } from '@angular/core';
import { BrnSeparator } from 'grg-ui-ui/brain/separator';
import { hlmSeparatorClass } from 'grg-ui-ui/helm/separator';
import { hlm } from 'grg-ui-ui/helm/utils';
import type { ClassValue } from 'clsx';

@Directive({
	selector: 'div[hlmItemSeparator]',
	hostDirectives: [{ directive: BrnSeparator, inputs: ['orientation'] }],
	host: { 'data-slot': 'item-separator', '[class]': '_computedClass()' },
})
export class HlmItemSeparator {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected readonly _computedClass = computed(() => hlm(hlmSeparatorClass, 'my-0', this.userClass()));
}
