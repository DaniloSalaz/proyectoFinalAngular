import { trigger, state, style, animate, transition } from '@angular/animations';

export function visibilidad() {
    return trigger('visibilidad', [state('visible', style({
        transform: 'scale(1.0)',
        opacity: 1
    })),
    state('oculto', style({
        transform: 'scale(1.0)',
        opacity: 2
    })),
    transition('* => *', animate('0.1s ease-in-out'))]);
}
export function efectOver() {
    return trigger('efectover', [state('sobre', style({
        transform: 'scale(1.1)',
        opacity: 1
    })),
    state('afuera', style({
        transform: 'scale(1.0)',
        opacity: 2
    })),
    transition('* => *', animate('0.3s ease-in-out'))]);
}
export function descarga() {
    return trigger('descarga', [
        state('*', style({
            opacity: 1,
            transform: 'translateX(0)'
        })), transition(':enter', [
            style({ transform: 'translateY(-50%)', opacity: 0 }),
            animate('200ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))])
    ]);
}