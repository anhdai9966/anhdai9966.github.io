import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: {
        name: 'cd',
        age: 30,
        address: 'nd',
      },
      posts: []
    };
  }

  // như useEffect
  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json =>this.setState({posts: json}));
  }
  // chạy khi state được render
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  // được chạy khi bị class bị xóa khỏi dom
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  handlePlus = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  changeName = () => {
    this.setState({ user: { name: 'Hello' } });
  };

  render() {
    let { count } = this.state;
    let { color } = this.props;

    return (
      <>
        <h1 style={{ color: color }}>Counter : {count}</h1>
        <button onClick={this.handlePlus}>Plus</button>

        <h2>Name: {this.state.user.name}</h2>
        <button onClick={this.changeName}>Change name</button>

        <ul>
          {this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      </>
    );
  }
}
