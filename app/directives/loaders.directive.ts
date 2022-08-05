import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ajaxload]',
  inputs: ['ajaxload'],
})
export class LoadingDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() set ajaxload(isLoading: boolean) {
    if (isLoading) {
      let span = this.renderer.createElement('span');
      const text = this.renderer.createText(' ');

      this.renderer.appendChild(span, text);

      this.renderer.setAttribute(span, 'class', 'fa small-spin');
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');

      this.renderer.insertBefore(
        this.el.nativeElement,
        span,
        this.el.nativeElement.firstChild
      );
    } else {
      if (this.el.nativeElement.childNodes.length > 1) {
        this.renderer.removeChild(
          this.el.nativeElement,
          this.el.nativeElement.firstChild
        );
      }
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
  }
}

@Directive({
  selector: '[spinner]',
  inputs: ['spinner'],
})
export class SpinLoadingDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() set spinner(isLoading: boolean) {
    if (isLoading) {
      let span2 = this.renderer.createElement('span');

      this.renderer.setAttribute(
        span2,
        'style',
        'width:' +
          this.el.nativeElement.parentElement.offsetWidth +
          'px;height:' +
          this.el.nativeElement.parentElement.offsetHeight +
          'px;'
      );

      this.renderer.setAttribute(span2, 'class', 'grid-backdrop fade');
      this.renderer.insertBefore(
        this.el.nativeElement,
        span2,
        this.el.nativeElement.firstChild
      );

      let span = this.renderer.createElement('span');
      this.renderer.setAttribute(span, 'class', 'grid-spinner spinner');
      var getElement =
        document.getElementsByClassName('grid-backdrop')[0].parentElement
          .previousElementSibling;
      var isModalSpinner =
        getElement == null
          ? false
          : getElement.classList.contains('modal-header');
      if (isModalSpinner) {
        this.renderer.setAttribute(
          span,
          'style',
          'left:50%;top:50%;position:absolute !important'
        );
      } else {
        this.renderer.setAttribute(
          span,
          'style',
          'left:50%;top:50%;position:fixed'
        );
      }
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
      this.renderer.insertBefore(
        this.el.nativeElement,
        span,
        this.el.nativeElement.firstChild
      );
    } else {
      if (this.el.nativeElement.childNodes.length > 1) {
        var firstChild = this.el.nativeElement.childNodes[0];
        var secondChild = this.el.nativeElement.childNodes[1];
        this.renderer.removeChild(this.el.nativeElement, firstChild);
        this.renderer.removeChild(this.el.nativeElement, secondChild);
      }

      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
  }
}
