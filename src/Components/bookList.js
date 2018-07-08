import React, {Component} from 'react';
import Idea from './Idea';


class bookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
      ]
    }
    this.eachIdea   = this.eachIdea.bind(this);
    this.update     = this.update.bind(this);
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
      const url = "https://amazon-book.herokuapp.com/getAllBooks";
      fetch(url).then((res) => { 
        return res.json(); 
        }).then((data) => {
          var self=this;
          console.log(data.Books);
          data.Books.map((book) => self.add(book));
          });
    }

  update(newName, i) {
    this.setState(() => ({
      books: this.state.books.map(
        (book) => (book.id !== i) ? book : {...book, name: newName}
      )
    }))
  }    

  eachIdea (books,i) {
    return (        
          <div className="card" style={{width: 20 + 'rem'}} >
            <div className="card-body">
              <Idea onChange={this.update} key={'books'+i} index={i}>
                <h5 className="card-title">{books.name}</h5>
                <p>author:{books.author}</p>
              </Idea>
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
export default bookList;