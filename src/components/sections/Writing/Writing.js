import React from "react";
import "./Writing.css";
import Section from "../../../HOC/Section";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Writing = () => {
  return (
    <Section id="writing">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Writing</span>
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            Individualized quality care that meets the total needs of the
            patient Individualized quality care that quality care that
            Individualized quality care that meets the total.
          </h6>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-9 col-lg-7 mr-auto ml-auto">
              <form>
                <div className="form-wrapper">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Enter title"
                  />
                </div>
                <div className="form-wrapper">
                  <CKEditor
                    editor={ClassicEditor}
                    data="<p></p>"
                    placeholder="Enter content"
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                      console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log("Focus.", editor);
                    }}
                  />
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-block btn-primary rounded-0 mr-auto ml-auto">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Writing;
