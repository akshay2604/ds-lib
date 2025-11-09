import { Directive, computed, inject, input } from '@angular/core';
import { BrnAvatarImage } from 'grg-ui-ui/brain/avatar';
import { hlm } from 'grg-ui-ui/helm/utils';
import type { ClassValue } from 'clsx';

@Directive({
	selector: 'img[hlmAvatarImage]',
	exportAs: 'avatarImage',
	hostDirectives: [BrnAvatarImage],
	host: {
		'[class]': '_computedClass()',
	},
})
export class HlmAvatarImage {
	public canShow = inject(BrnAvatarImage).canShow;

	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected readonly _computedClass = computed(() => hlm('aspect-square size-full', this.userClass()));
}
