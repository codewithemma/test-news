import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import imageIcon from "@ckeditor/ckeditor5-core/theme/icons/image.svg";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";

export default class CustomImagePlugin extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("customImage", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "Insert image",
        icon: imageIcon,
        tooltip: true,
      });

      view.on("execute", () => {
        this._openCustomImageDialog();
      });

      return view;
    });
  }

  _openCustomImageDialog() {
    const editor = this.editor;
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        editor.model.change((writer) => {
          const imageElement = writer.createElement("image", {
            src: base64,
          });
          editor.model.insertContent(
            imageElement,
            editor.model.document.selection
          );
        });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    };
    fileInput.click();
  }
}
