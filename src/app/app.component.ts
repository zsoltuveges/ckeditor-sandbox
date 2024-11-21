import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  Bold,
  Code,
  DecoupledEditor,
  Essentials,
  Font,
  Heading,
  Italic,
  Paragraph,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
  Undo
} from 'ckeditor5';
import { DocumentOutline } from 'ckeditor5-premium-features';

@Component({
  selector: 'app-root',
  imports: [ ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  @ViewChild('toolbarContainer', { static: true }) toolbarContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('editorContainer', { static: true }) editorContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('outlineContainer', { static: true }) outlineContainer!: ElementRef<HTMLDivElement>;

  title = 'ckeditor-sandbox';
  editor!: DecoupledEditor;

  async ngOnInit() {
    this.editor = await DecoupledEditor.create(this.editorContainer.nativeElement, {
      initialData: this.getInitData(),
      toolbar: {
        items: [
          'undo', 'redo', 'heading',
          '|',
          'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
          '|',
          'bold', 'italic', 'underline', 'strikethrough', 'code', 'subscript', 'superscript',
        ],
        shouldNotGroupWhenFull: true,
      },
      plugins: [
        DocumentOutline,
        Essentials,
        Heading,
        Paragraph,
        Undo,
        Font,
        Bold,
        Italic,
        Underline,
        Strikethrough,
        Code,
        Subscript,
        Superscript,
      ],
      documentOutline: {
        container: this.outlineContainer.nativeElement,
      },
      licenseKey: '<<licenseKey>>',
    })

    this.toolbarContainer.nativeElement.appendChild(this.editor.ui.view.toolbar.element!);
  }


  private getInitData(): string {
    return `
    <h1>Test heading 1</h1>
    <h2>Test heading 2</h2>
    <h3>Test heading 3</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit ex. Vivamus lorem est, suscipit sed
      purus malesuada, eleifend ultrices nulla. Nulla tincidunt metus in tellus pretium, at aliquam sem placerat. Donec
      dapibus, tellus sed porttitor egestas, risus purus faucibus dolor, vel porta ex nulla sit amet lacus. In egestas enim
      ac enim consequat rutrum. Aenean imperdiet rutrum hendrerit. Aenean nisl est, eleifend non mauris vitae, semper
      sollicitudin tellus. Nulla porta erat malesuada velit hendrerit, at ultrices sem vehicula.

      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.

            Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.

      Aliquam erat volutpat. Donec vel convallis sapien. Vestibulum congue lacus quam, sit amet molestie felis eleifend id.
      Suspendisse aliquet pellentesque turpis, eget iaculis neque tincidunt ac. Aenean eget arcu non est pulvinar
      pellentesque. Maecenas eget consectetur augue. Ut ultricies interdum nibh sit amet facilisis. Nunc fringilla erat eget
      purus eleifend porta vitae a mauris. Cras mollis dignissim augue iaculis finibus. Nullam vulputate pharetra arcu.
      Integer ac velit consectetur, tincidunt nulla ut, efficitur erat. Duis eu nisl odio. Sed eget nibh velit. In quis
      scelerisque leo, quis posuere ipsum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit ex. Vivamus lorem est, suscipit sed
      purus malesuada, eleifend ultrices nulla. Nulla tincidunt metus in tellus pretium, at aliquam sem placerat. Donec
      dapibus, tellus sed porttitor egestas, risus purus faucibus dolor, vel porta ex nulla sit amet lacus. In egestas enim
      ac enim consequat rutrum. Aenean imperdiet rutrum hendrerit. Aenean nisl est, eleifend non mauris vitae, semper
      sollicitudin tellus. Nulla porta erat malesuada velit hendrerit, at ultrices sem vehicula.

      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.

            Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.

      Aliquam erat volutpat. Donec vel convallis sapien. Vestibulum congue lacus quam, sit amet molestie felis eleifend id.
      Suspendisse aliquet pellentesque turpis, eget iaculis neque tincidunt ac. Aenean eget arcu non est pulvinar
      pellentesque. Maecenas eget consectetur augue. Ut ultricies interdum nibh sit amet facilisis. Nunc fringilla erat eget
      purus eleifend porta vitae a mauris. Cras mollis dignissim augue iaculis finibus. Nullam vulputate pharetra arcu.
      Integer ac velit consectetur, tincidunt nulla ut, efficitur erat. Duis eu nisl odio. Sed eget nibh velit. In quis
      scelerisque leo, quis posuere ipsum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit ex. Vivamus lorem est, suscipit sed
      purus malesuada, eleifend ultrices nulla. Nulla tincidunt metus in tellus pretium, at aliquam sem placerat. Donec
      dapibus, tellus sed porttitor egestas, risus purus faucibus dolor, vel porta ex nulla sit amet lacus. In egestas enim
      ac enim consequat rutrum. Aenean imperdiet rutrum hendrerit. Aenean nisl est, eleifend non mauris vitae, semper
      sollicitudin tellus. Nulla porta erat malesuada velit hendrerit, at ultrices sem vehicula.

      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.

            Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.

      Aliquam erat volutpat. Donec vel convallis sapien. Vestibulum congue lacus quam, sit amet molestie felis eleifend id.
      Suspendisse aliquet pellentesque turpis, eget iaculis neque tincidunt ac. Aenean eget arcu non est pulvinar
      pellentesque. Maecenas eget consectetur augue. Ut ultricies interdum nibh sit amet facilisis. Nunc fringilla erat eget
      purus eleifend porta vitae a mauris. Cras mollis dignissim augue iaculis finibus. Nullam vulputate pharetra arcu.
      Integer ac velit consectetur, tincidunt nulla ut, efficitur erat. Duis eu nisl odio. Sed eget nibh velit. In quis
      scelerisque leo, quis posuere ipsum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at hendrerit ex. Vivamus lorem est, suscipit sed
      purus malesuada, eleifend ultrices nulla. Nulla tincidunt metus in tellus pretium, at aliquam sem placerat. Donec
      dapibus, tellus sed porttitor egestas, risus purus faucibus dolor, vel porta ex nulla sit amet lacus. In egestas enim
      ac enim consequat rutrum. Aenean imperdiet rutrum hendrerit. Aenean nisl est, eleifend non mauris vitae, semper
      sollicitudin tellus. Nulla porta erat malesuada velit hendrerit, at ultrices sem vehicula.

      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.

            Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.      Proin eleifend ut leo et tempus. Ut ut augue non ligula volutpat condimentum at interdum odio. Suspendisse potenti.
      Aenean a neque nulla. Aliquam tincidunt, lectus vel tempor tempor, ipsum mi laoreet urna, et consectetur felis sem in
      nunc. Sed mattis lobortis dolor, ac faucibus magna faucibus a. Vestibulum magna dui, blandit sit amet justo vel,
      finibus rutrum ligula.

      Aliquam erat volutpat. Donec vel convallis sapien. Vestibulum congue lacus quam, sit amet molestie felis eleifend id.
      Suspendisse aliquet pellentesque turpis, eget iaculis neque tincidunt ac. Aenean eget arcu non est pulvinar
      pellentesque. Maecenas eget consectetur augue. Ut ultricies interdum nibh sit amet facilisis. Nunc fringilla erat eget
      purus eleifend porta vitae a mauris. Cras mollis dignissim augue iaculis finibus. Nullam vulputate pharetra arcu.
      Integer ac velit consectetur, tincidunt nulla ut, efficitur erat. Duis eu nisl odio. Sed eget nibh velit. In quis
      scelerisque leo, quis posuere ipsum.</p>
`
  }
}
