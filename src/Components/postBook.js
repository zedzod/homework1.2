import React, {Component} from 'react'


class postBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
    this.eachIdea   = this.eachIdea.bind(this);
    this.add        = this.add.bind(this)
  }

  add(book) {
    this.setState(prevState => ({
      books: [
      ...prevState.books,
      {
        name: book.Name,
        author: book.Author
      }]
    }))
  }

  componentWillMount(){
      const url = "https://amazon-book.herokuapp.com/getBooksDetails";
      fetch(url,{
          method:"post"
      }).then((res) => { return res.json()}).then((data) => {
           var self=this;
             self.add(data);
            });
    }

  eachIdea (books,i) {
    return (        
          <div className="card" style={{width: 20 + 'rem'}}  key={'book'+i} index={i} >
            <div className="card-body">
                <h5 className="card-title">{books.name}</h5>
            </div>
          </div>
      )
  }

  render() {
      return (
        <div className="ideaList">
          {this.state.books.map(this.eachIdea)}
        </div>
      )
  }
}
export default postBook;