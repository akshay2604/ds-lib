import { computed, Directive, input } from '@angular/core';
import { BrnNavigationMenuItem } from 'grg-ui-ui/brain/navigation-menu';
import { hlm } from 'grg-ui-ui/helm/utils';
import { ClassValue } from 'clsx';

@Directive({
	selector: 'li[hlmNavigationMenuItem]',
	host: {
		'[class]': '_computedClass()',
	},
	hostDirectives: [{ directive: BrnNavigationMenuItem, inputs: ['id'] }],
})
export class HlmNavigationMenuItem {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected readonly _computedClass = computed(() => hlm('relative', this.userClass()));
}
