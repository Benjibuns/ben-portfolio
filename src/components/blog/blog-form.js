import React, { Component } from "react";

class BlogForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <input type="text" />
        <input type="text" />

        <button>Save</button>
      </form>
    );
  }
}

export default BlogForm;
