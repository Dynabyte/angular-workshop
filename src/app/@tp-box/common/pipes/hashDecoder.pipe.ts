import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'selector-name'
})

export class HashDecoderPipe implements PipeTransform {
    transform(hash: string): string {
        return window.atob(hash);
    }
}