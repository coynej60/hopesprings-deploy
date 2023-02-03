export class BaseComponent {
    scrollToTop(): void {
        (document.getElementById('top') as HTMLElement).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
}