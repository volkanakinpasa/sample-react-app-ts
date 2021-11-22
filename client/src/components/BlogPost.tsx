import React from 'react';

export class BlogPost extends React.Component<{ handleChange: any }, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      blogPost: 'blogpost init',
    };
  }

  render() {
    return (
      <input value={this.state.blogPost} onChange={this.props.handleChange} />
    );
  }
}
